Example of IDOR protection in an API route that checks if the requested id belongs to the correct user

```ts
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);
  const { id } = req.query;

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Fetch the document
  const doc = await prisma.document.findUnique({
    where: { id: id as string },
  });

  // Verify the requester owns this document
  if (!doc || doc.userId !== session.user.id) {
    return res.status(403).json({ error: "Forbidden" });
  }

  return res.status(200).json(document);
}
```
