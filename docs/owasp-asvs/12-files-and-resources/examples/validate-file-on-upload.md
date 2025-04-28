Example backend file upload validation

```ts
import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!req.body || !req.body.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const file = req.body.file;

  const MAX_SIZE = 1024 * 1024; // 1MB
  if (file.size > MAX_SIZE) {
    return res.status(400).json({ error: "File too large (max 1MB)" });
  }

  const fileType = file.type;
  const validTypes = ["image/jpeg", "image/png", "image/gif"];

  if (!validTypes.includes(fileType)) {
    return res.status(400).json({ error: "Invalid file type" });
  }

  const fileName = file.name;
  const ext = path.extname(fileName).toLowerCase();
  const validExtensions = [".jpg", ".jpeg", ".png", ".gif"];
  const newFileName = `${uuidv4()}${ext}`; 

  if (!validExtensions.includes(ext)) {
    return res.status(400).json({ error: "Invalid file extension" });
  }

  return res.status(200).json({ success: true });
}
```