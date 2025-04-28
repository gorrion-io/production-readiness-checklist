---
title: Cryptography is implemented securely
---

# Cryptography is implemented securely

```
ℹ️ Never implement your own cryptographic algorithms - use well-vetted libraries instead
```

## TLDR (must-haves)

- **Fundamental Security Controls**

  - Use well-established cryptographic libraries - never custom implementations
  - Ensure all errors are handled securely without leaking sensitive information

- **Key Management Essentials**

  - Store cryptographic keys in secure vaults, not in application code or config
  - Implement proper key rotation, access controls, and lifecycle management

- **Implementation Best Practices**

  - Use modern algorithms (Argon2, scrypt, bcrypt) for password hashing
  - Implement TLS 1.2+ with strong cipher suites for all communications

## Description

Proper cryptographic implementation is essential for protecting sensitive data at rest and in transit. Cryptography should be implemented using established libraries and following current best practices.

- **Core Requirements**:

  - Use suitable random number generators for all security-related functions.
  - Implement secure access management for cryptographic keys.

- **Algorithms**:

  - Use only modern, standard cryptographic algorithms from reputable libraries (e.g., argon2, scrypt, bcrypt for password hashing).
  - Ensure cryptographic modules fail securely, with errors handled in ways that don't enable attacks like Padding Oracle.
  - Avoid custom or deprecated algorithms and implementations.

- **Key Management**:

  - Use a secrets management solution such as a key vault to securely create, store, control access to, and destroy secrets.
  - Ensure key material is not exposed to the application but instead uses an isolated security module like a vault for cryptographic operations.
  - Implement secure key generation, storage, and rotation practices.
  - Never hardcode or embed cryptographic keys in source code or configuration files.

- **Password Storage**:

  - Store passwords using modern, slow hashing algorithms designed for password storage with appropriate work factors.
  - Configure salt generation and storage according to industry best practices.

- **Transport Security**:

  - Use TLS 1.2+ for all communications with secure cipher suites and parameters.
  - Implement proper certificate validation for TLS connections.

## Proposed options

### Option 1: Managed Encryption Services

Use cloud provider encryption services like AWS KMS for key management and encryption operations.

### Option 2: Established Cryptographic Libraries

Implement cryptography using checked libraries like node-rs/argon2, crypto, bcrypt.js
