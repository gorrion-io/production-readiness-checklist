Example of a role-based access control middleware for an API route that checks if the user has the required role to access the resource

```ts
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      roles: Role[];
    };
  }
}

type Role = "admin" | "editor" | "viewer";
type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export function withRoleAccess(
  handler: Handler,
  allowedRoles: Role[],
): Handler {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user) {
      return res.status(401).json({ error: "Authentication required" });
    }

    const userRoles = session.user.roles || [];
    const hasRole = allowedRoles.some((role) => userRoles.includes(role));

    if (!hasRole) {
      return res.status(403).json({ error: "Insufficient permissions" });
    }

    return handler(req, res);
  };
}

async function adminDashboardHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return res.status(200).json({ adminData: "sensitive information" });
}

export default withRoleAccess(adminDashboardHandler, ["admin"]);
```
