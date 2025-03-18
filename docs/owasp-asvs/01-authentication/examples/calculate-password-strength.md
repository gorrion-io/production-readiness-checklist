Example function that calculates the strength of a password.

```ts
export const calculatePasswordStrength = (password: string): number => {
  if (!password) {
    return 0;
  }

  let score = 0;

  score += Math.min(password.length * 2, 60);

  if (/[a-z]/.test(password)) score += 10; // lowercase
  if (/[A-Z]/.test(password)) score += 10; // uppercase
  if (/\d/.test(password)) score += 10; // digits
  if (/[^A-Za-z0-9]/.test(password)) score += 10; // special chars

  return score;
};
```
