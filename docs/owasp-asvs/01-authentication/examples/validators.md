Example validator for auth using Zod

```ts
import { z } from "zod";

const passwordSchema = z
  .string()
  .min(12, `Password must be at least 12 characters`)
  .max(128, `Password cannot exceed 128 characters`);

const registerSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: passwordSchema,
  name: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string(),
});

const changePasswordSchema = z.object({
  currentPassword: z.string(),
  newPassword: passwordSchema,
});
```
