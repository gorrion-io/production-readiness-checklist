---
title: Cryptography is implemented securely
---

# Cryptography is implemented securely

```
ℹ️ Never implement your own cryptographic algorithms - use well-vetted libraries instead
```

## Description

Proper cryptographic implementation is essential for protecting sensitive data at rest and in transit. Cryptography should be implemented using established libraries and following current best practices.

- **Algorithms**:

  - Ensure cryptographic modules fail securely, with errors handled in ways that don't enable attacks like Padding Oracle.

## Proposed options

### Option 1: Managed Encryption Services

Use cloud provider encryption services like AWS KMS for key management and encryption operations.

### Option 2: Established Cryptographic Libraries

Implement cryptography using checked libraries like node-rs/argon2, crypto, bcrypt.js
