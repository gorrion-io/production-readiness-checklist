Example of re-authentication mechanism for sensitive operations

This example is a simple implementation for demonstration purposes. Production implementations should also include proper rate-limiting,
logging, and runtime type validation.

```ts
// pages/api/auth/[...nextauth].ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { verify } from "@node-rs/argon2";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    };
  }
}

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
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
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);

// pages/api/auth/reauthenticate.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { verify } from "@node-rs/argon2";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user || !user.passwordHash) {
    return res.status(404).json({ message: "User not found" });
  }

  const isValid = await verify(user.passwordHash, password);

  if (!isValid) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const reauthToken = jwt.sign(
    {
      userId: user.id,
      email: user.email,
      purpose: "reauth",
    },
    process.env.REAUTH_SECRET,
    {
      expiresIn: "5m",
    },
  );

  // Set cookie to be sent only to domains unser /api/sensitive
  res.setHeader(
    "Set-Cookie",
    `reauthToken=${reauthToken}; HttpOnly; Secure; SameSite=Strict; Path=/api/sensitive; Max-Age=300`,
  );
  return res.status(200).json({
    success: true,
  });
}

// pages/api/sensitive/delete-account.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const reauthToken = req.cookies.reauthToken;

  if (!reauthToken) {
    return res.status(400).json({ message: "Reauthentication required" });
  }

  const tokenData = jwt.verify(reauthToken, process.env.REAUTH_SECRET);
  if (tokenData.purpose !== "reauth") {
    throw new Error("Invalid token purpose");
  }

  if (tokenData.email !== session.user.email) {
    return res.status(403).json({ message: "Token user mismatch" });
  }

  await prisma.user.delete({
    where: { email: session.user.email },
  });

  res.setHeader(
    "Set-Cookie",
    "reauthToken=; HttpOnly; Secure; SameSite=Strict; Path=/api/sensitive; Max-Age=0",
  );

  return res.status(200).json({ success: true });
}
```
