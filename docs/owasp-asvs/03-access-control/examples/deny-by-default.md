Example middleware that enforces deny-by-default access control approach

```ts
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { User } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

// Permission check helper
function hasPermission(user: User, path: string): boolean {
  // Implementation of permission checking
  return false; // Default deny
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);

  // No valid session = deny access
  if (!session) {
    return res.status(401).redirect("/login");
  }

  // Check specific permissions before allowing access
  if (!hasPermission(session.user, req.url || "")) {
    return res.status(403).redirect("/unauthorized");
  }

  // Process the authorized request
  return res.status(200).json({ success: true });
}
```
