---
title: Ensure that all client connections use TLS
---

# Ensure that all client connections use TLS

```
ℹ️ Regularly test your TLS configuration using tools like SSL Labs SSL Test to detect vulnerabilities.
```

## TLDR (must-haves)
  - Use TLS 1.2 or TLS 1.3

### Secure Client Communication

- Ensure that all connections use TLS.
- Use the latest TLS testing tools to confirm that only strong cipher suites are enabled.
- Make sure that only the latest recommended TLS versions, such as TLS 1.2 and TLS 1.3, are enabled—always prioritizing the newest version for optimal security.


## Proposed solution

Configure AWS services to allow only TLS 1.2 and 1.3
