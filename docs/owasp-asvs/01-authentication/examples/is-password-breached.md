Example function that checks if password is on a breached list using HaveIBeenPwned API.

```ts
import { crypto } from "node:crypto";
import commonPasswords from "./common-passwords.json" assert { type: "json" };

const commonPasswordsSet = new Set(commonPasswords);

export const isPasswordBreached = async (
  password: string
): Promise<boolean> => {
  try {
    const sha1Hash = crypto
      .createHash("sha1")
      .update(password)
      .digest("hex")
      .toUpperCase();

    const prefix = sha1Hash.substring(0, 5);
    const suffix = sha1Hash.substring(5);

    const response = await fetch(
      `https://api.pwnedpasswords.com/range/${prefix}`
    );

    const text = await response.text();
    const breachData = text.split("\n");

    for (const line of breachData) {
      const [hashSuffix] = line.split(":");

      if (hashSuffix.trim() === suffix) {
        return true;
      }
    }

    return false;
  } catch {
    // If external API is down, validate against common passwords
    if (commonPasswordsSet.has(password)) {
      return true;
    }

    return false;
  }
};
```
