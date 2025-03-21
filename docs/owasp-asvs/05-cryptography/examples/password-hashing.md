Example of proper hashing

```ts
import { hash } from "@node-rs/argon2";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { email, password } = req.body;

    const hashedPassword = await hash(password);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      success: true,
      userId: user.id,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred during registration" });
  }
}
```
