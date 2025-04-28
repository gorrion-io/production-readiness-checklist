# OWASP ASVS Security Checklist

## Authentication

| Name                                                                       | Level          | Scope                   | Comment                                                                  |
| -------------------------------------------------------------------------- | -------------- | ----------------------- | ------------------------------------------------------------------------ |
| [Strong Password Requirements](./01-authentication/01-authentication.md)   | Critical 🔴    | Security 🔒, Backend ⚙️ | Min 12 chars, allow Unicode & emojis, check against breached databases   |
| [Essential Security Controls](./01-authentication/01-authentication.md)    | Critical 🔴    | Security 🔒, Backend ⚙️ | Rate limiting, secure hashing, change notifications, MFA support         |
| [User Experience Considerations](./01-authentication/01-authentication.md) | Critical 🔴    | Security 🔒, Frontend 🖥 | Allow paste & password managers, viewing masked passwords, secure resets |
| [Brute Force Protection](./01-authentication/01-authentication.md)         | Critical 🔴    | Security 🔒, Backend ⚙️ | Anti-automation controls to prevent brute force attacks                  |
| [Authentication Notifications](./01-authentication/01-authentication.md)   | Should have 🟡 | Security 🔒, Backend ⚙️ | Notify users of auth detail changes and suspicious logins                |
| [Secure Account Recovery](./01-authentication/01-authentication.md)        | Critical 🔴    | Security 🔒, Backend ⚙️ | Avoid security questions, use secure recovery mechanisms                 |

## Session Management

| Name                                                                                           | Level       | Scope                   | Comment                                                  |
| ---------------------------------------------------------------------------------------------- | ----------- | ----------------------- | -------------------------------------------------------- |
| [Session Token Security](./02-session-management/02-session-management.md)                     | Critical 🔴 | Security 🔒, Backend ⚙️ | Never expose tokens in URLs, generate new tokens on auth |
| [Cookie Security Configuration](./02-session-management/02-session-management.md)              | Critical 🔴 | Security 🔒, Backend ⚙️ | Secure, HttpOnly, SameSite attributes, \_\_Host- prefix  |
| [Session Lifecycle Management](./02-session-management/02-session-management.md)               | Critical 🔴 | Security 🔒, Backend ⚙️ | Proper invalidation, timeouts, token regeneration        |
| [Session Protection Mechanisms](./02-session-management/02-session-management.md)              | Critical 🔴 | Security 🔒, Backend ⚙️ | Prevent fixation, implement re-authentication            |
| [Re-authentication for Sensitive Operations](./02-session-management/02-session-management.md) | Critical 🔴 | Security 🔒, Backend ⚙️ | Verify identity before allowing critical actions         |
| [Session Token Regeneration](./02-session-management/02-session-management.md)                 | Critical 🔴 | Security 🔒, Backend ⚙️ | New tokens after privilege changes to prevent fixation   |

## Access Control

| Name                                                                              | Level       | Scope                   | Comment                                                                    |
| --------------------------------------------------------------------------------- | ----------- | ----------------------- | -------------------------------------------------------------------------- |
| [Core Access Control Principles](./03-access-control/03-access-control.md)        | Critical 🔴 | Security 🔒, Backend ⚙️ | Deny-by-default, server-side enforcement, least privilege                  |
| [Protection Against Common Attacks](./03-access-control/03-access-control.md)     | Critical 🔴 | Security 🔒, Backend ⚙️ | IDOR protections, anti-CSRF, rate limiting, path traversal prevention      |
| [Implementation Best Practices](./03-access-control/03-access-control.md)         | Critical 🔴 | Security 🔒, Backend ⚙️ | MFA for admin interfaces, consistent access checks, proper UI restrictions |
| [Deny-by-default Implementation](./03-access-control/examples/deny-by-default.md) | Critical 🔴 | Security 🔒, Backend ⚙️ | Default access denial unless explicitly granted                            |
| [Role-based Access Control](./03-access-control/examples/role-based-access.md)    | Critical 🔴 | Security 🔒, Backend ⚙️ | Permission enforcement based on user roles                                 |
| [IDOR Prevention](./03-access-control/examples/idor.md)                           | Critical 🔴 | Security 🔒, Backend ⚙️ | Protection against Insecure Direct Object Reference attacks                |

## Input Validation

| Name                                                                                 | Level       | Scope                   | Comment                                                           |
| ------------------------------------------------------------------------------------ | ----------- | ----------------------- | ----------------------------------------------------------------- |
| [Input Validation Essentials](./04-input-validation/04-input-validation.md)          | Critical 🔴 | Security 🔒, Backend ⚙️ | Server-side validation, schema verification, parameter protection |
| [Sanitization Requirements](./04-input-validation/04-input-validation.md)            | Critical 🔴 | Security 🔒, Backend ⚙️ | Character/length restrictions, special content handling           |
| [Output Encoding Best Practices](./04-input-validation/04-input-validation.md)       | Critical 🔴 | Security 🔒, Backend ⚙️ | Context-aware auto-escaping for output data                       |
| [File Upload Validation](./04-input-validation/examples/file-upload-validation.md)   | Critical 🔴 | Security 🔒, Backend ⚙️ | Size, type, and extension verification for uploads                |
| [Schema Validation](./04-input-validation/examples/schema-validation.md)             | Critical 🔴 | Security 🔒, Backend ⚙️ | Structured data validation using schema libraries                 |
| [Protection Against Injection Attacks](./04-input-validation/04-input-validation.md) | Critical 🔴 | Security 🔒, Backend ⚙️ | SQL, NoSQL command injection prevention                           |

## Cryptography

| Name                                                                         | Level       | Scope                   | Comment                                                 |
| ---------------------------------------------------------------------------- | ----------- | ----------------------- | ------------------------------------------------------- |
| [Fundamental Security Controls](./05-cryptography/05-cryptography.md)        | Critical 🔴 | Security 🔒, Backend ⚙️ | Use established libraries, never custom implementations |
| [Key Management Essentials](./05-cryptography/05-cryptography.md)            | Critical 🔴 | Security 🔒, Backend ⚙️ | Secure key storage, rotation, and access controls       |
| [Implementation Best Practices](./05-cryptography/05-cryptography.md)        | Critical 🔴 | Security 🔒, Backend ⚙️ | Modern algorithms, strong TLS configuration             |
| [Password Hashing](./05-cryptography/examples/password-hashing.md)           | Critical 🔴 | Security 🔒, Backend ⚙️ | Proper password hashing with modern algorithms          |
| [Secure Error Handling](./05-cryptography/examples/secure-error-handling.md) | Critical 🔴 | Security 🔒, Backend ⚙️ | Error handling without information leakage              |

## Error Handling & Logging

| Name                                                                        | Level          | Scope                      | Comment                                               |
| --------------------------------------------------------------------------- | -------------- | -------------------------- | ----------------------------------------------------- |
| [Secure Error Handling](./06-error-handling/06-error-handling.md)           | Critical 🔴    | Security 🔒, Backend ⚙️    | Generic user-facing errors, detailed internal logging |
| [Privacy-Compliant Logging](./06-error-handling/06-error-handling.md)       | Critical 🔴    | Security 🔒, Logging 📝    | No sensitive data in logs, proper retention policies  |
| [Logging Best Practices](./06-error-handling/06-error-handling.md)          | Should have 🟡 | Security 🔒, Logging 📝    | Contextual info, security event logging, monitoring   |
| [Centralized Error Management](./06-error-handling/06-error-handling.md)    | Should have 🟡 | Security 🔒, Backend ⚙️    | Consistent error handling across the application      |
| [Real-time Monitoring & Alerting](./06-error-handling/06-error-handling.md) | Should have 🟡 | Security 🔒, Monitoring 👀 | Alerts for critical errors and suspicious patterns    |
