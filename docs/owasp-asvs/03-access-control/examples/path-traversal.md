When an API endpoint accepts a path as a parameter, then it should validate the path to prevent path traversal attacks.

```ts
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

const SAFE_ROOT_DIR = "/app/allowed/files";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { filePath } = req.query;

    if (!filePath || typeof filePath !== "string") {
      return res.status(400).json({ error: "Missing file path" });
    }

    // Normalize the path and resolve to absolute path
    const normalizedPath = path
      .normalize(filePath)
      .replace(/^(\.\.(\/|\\|$))+/, "");
    const absolutePath = path.join(SAFE_ROOT_DIR, normalizedPath);

    // Ensure the resolved path is within the allowed directory
    if (!absolutePath.startsWith(SAFE_ROOT_DIR)) {
      return res.status(403).json({ error: "Invalid file path" });
    }

    if (!fs.existsSync(absolutePath)) {
      return res.status(404).json({ error: "File not found" });
    }

    res.status(200);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}
```
