Example of schema validation using Zod

```ts
import { z } from "zod";
import { NextApiRequest, NextApiResponse } from "next";

const userSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/),
  email: z.string().email(),
  password: z.string().min(12).max(128),
  age: z.number().int().min(18).optional(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const validatedData = userSchema.parse(req.body);

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: "Server error" });
  }
}
```
