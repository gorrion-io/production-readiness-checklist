Example auth configuration using NextAuth

```ts
// pages/api/auth/[...nextauth].ts
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { verify } from "@node-rs/argon2";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
          select: {
            id: true,
            name: true,
            password: true,
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
        };
      },
    }),
  ],
  session: {
    // Use JWTs for stateless sessions or database for stateful
    strategy: "jwt", // or "database"

    // Set max session age (absolute timeout)
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Update session every time it's used to extend idle timeout
    updateAge: 24 * 60 * 60, // 24 hours
  },
  // You can set custom cookies here, but it is not recommended by NextAuth docs https://next-auth.js.org/configuration/options#cookies
  cookies: {
    sessionToken: {
      name: `__Host-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
  },
});
```
