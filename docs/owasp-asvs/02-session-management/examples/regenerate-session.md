Example of invalidating the user session after a privilege change

```ts
// pages/api/auth/[...nextauth].ts
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { verify } from "@node-rs/argon2";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name?: string | null;
    role?: string;
    updatedAt: Date;
  }

  interface Session {
    user: {
      id: string;
      role?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
    role?: string;
    userUpdatedAt: number;
    lastChecked?: number;
  }
}

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          select: {
            id: true,
            name: true,
            password: true,
            updatedAt: true,
          },
        });
        if (!user) {
          return null;
        }

        const isValidPassword = await verify(
          user.password,
          credentials.password,
        );
        if (!isValidPassword) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          updatedAt: user.updatedAt,
        };
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.role = user.role;
        token.userUpdatedAt = user.updatedAt.getTime();
        token.lastChecked = Date.now();
        return token;
      }

      // Revalidate token every 5 minutes
      const shouldCheckDatabase =
        !token.lastChecked || Date.now() - token.lastChecked > 5 * 60 * 1000;

      if (shouldCheckDatabase) {
        token.lastChecked = Date.now();

        const dbUser = await prisma.user.findUnique({
          where: { id: token.userId },
          select: { updatedAt: true, role: true },
        });

        if (!dbUser || token.userUpdatedAt < dbUser.updatedAt.getTime()) {
          return { ...token, exp: 0 };
        }

        // Role change - force token invalidation
        if (dbUser.role !== token.role) {
          return { ...token, exp: 0 };
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.id = token.userId;
      return session;
    },
  },
});

// pages/api/promote-to-admin.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  // Update user role in database
  await prisma.user.update({
    where: { id: session.user.id },
    data: { role: "ADMIN" },
  });

  res.status(200).json({ success: true, invalidateSession: true });
}

// utils/user-actions.ts
import { signOut } from "next-auth/react";

export async function promoteToAdmin() {
  const response = await fetch("/api/promote-to-admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.success && data.invalidateSession) {
    // Sign out and redirect to sign-in page
    await signOut({ callbackUrl: "/auth/signin?reason=privilegeChange" });
    return true;
  }

  return data.success;
}
```
