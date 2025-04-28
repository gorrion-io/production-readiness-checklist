Example of secure error handling without leaking information from the backend to the client

```ts
import { verify } from "@node-rs/argon2";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, password: true },
    });

    if (!user) {
      // Dummy hash verification to prevent timing attacks
      await verify(
        "$argon2id$v=19$m=19456,t=2,p=1$c4QWIB+y15ITLaYZnNVGdg$PKEN7S05d+GE7n0hONL+oFOeUfOzo5WAn0by6//RDlk",
        "dummy"
      );
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isValid = await verify(user.password, password);

    if (!isValid) {
      // Same generic error message regardless of whether email exists or password is wrong
      return res.status(401).json({ error: "Invalid credentials" });
    }

    return res.status(200).json({
      success: true,
      userId: user.id,
    });
  } catch (error) {
    // In case of known error, return specific error message
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error("Database error:", error);
      return res.status(500).json({ error: "Database error" });
    }

    console.error("Authentication error:", error);

    // Return generic error regardless of what went wrong
    // This prevents information leakage about system internals
    return res.status(500).json({
      error: "Authentication failed",
    });
  }
}
```
