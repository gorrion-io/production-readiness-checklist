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

| Name                                                                        | Level       | Scope                   | Comment                                                 |
| --------------------------------------------------------------------------- | ----------- | ----------------------- | ------------------------------------------------------- |
| [Fundamental Security Controls](./05-cryptography/05-cryptography.md)       | Critical 🔴 | Security 🔒, Backend ⚙️ | Use established libraries, never custom implementations |
| [Secure Cryptographic Implementation](./05-cryptography/05-cryptography.md) | Critical 🔴 | Security 🔒, Backend ⚙️ | Ensure cryptographic modules fail securely              |

## Error Handling & Logging

| Name                                                                        | Level          | Scope                      | Comment                                               |
| --------------------------------------------------------------------------- | -------------- | -------------------------- | ----------------------------------------------------- |
| [Secure Error Handling](./06-error-handling/06-error-handling.md)           | Critical 🔴    | Security 🔒, Backend ⚙️    | Generic user-facing errors, detailed internal logging |
| [Privacy-Compliant Logging](./06-error-handling/06-error-handling.md)       | Critical 🔴    | Security 🔒, Logging 📝    | No sensitive data in logs, proper retention policies  |
| [Logging Best Practices](./06-error-handling/06-error-handling.md)          | Should have 🟡 | Security 🔒, Logging 📝    | Contextual info, security event logging, monitoring   |
| [Centralized Error Management](./06-error-handling/06-error-handling.md)    | Should have 🟡 | Security 🔒, Backend ⚙️    | Consistent error handling across the application      |
| [Real-time Monitoring & Alerting](./06-error-handling/06-error-handling.md) | Should have 🟡 | Security 🔒, Monitoring 👀 | Alerts for critical errors and suspicious patterns    |

## Data Protection

| Name                                                                         | Level       | Scope                               | Comment                                                     |
| ---------------------------------------------------------------------------- | ----------- | ----------------------------------- | ----------------------------------------------------------- |
| [Client-side Data Protection](./08-data-protection/08-data-protection.md)    | Critical 🔴 | Security 🔒, Backend ⚙️, Frontend 🖥 | Anti-caching headers, setting token in cookies, user logout |
| [Sending Sensitive Private Data](./08-data-protection/08-data-protection.md) | Critical 🔴 | Security 🔒, Backend ⚙️             | Privacy policy, user can delete or export data              |

## Communication

| Name                                                                  | Level       | Scope       | Comment                |
| --------------------------------------------------------------------- | ----------- | ----------- | ---------------------- |
| [Secure Client Communication](./09-communication/09-communication.md) | Critical 🔴 | Security 🔒 | Use TLS 1.2 or TLS 1.3 |

## Malicious Code

| Name                                                                           | Level       | Scope                               | Comment                                                |
| ------------------------------------------------------------------------------ | ----------- | ----------------------------------- | ------------------------------------------------------ |
| [Application Integrity](./10-malicious-code/examples/add-audit-stage-to-ci.md) | Critical 🔴 | Security 🔒, Backend ⚙️, Frontend 🖥 | Add audit stage to CI                                  |
| [Application Integrity](./10-malicious-code/10-malicious-code.md)              | Critical 🔴 | Security 🔒                         | Monitor DNS records for expired or abandoned resources |

## Business Logic

| Name                                              | Level       | Scope                               | Comment                              |
| ------------------------------------------------- | ----------- | ----------------------------------- | ------------------------------------ |
| [Business Logic Security](./11-business-logic.md) | Critical 🔴 | Security 🔒, Backend ⚙️, Frontend 🖥 | Business logic flow in correct order |

## Files And Resources

| Name                                                                                 | Level       | Scope                   | Comment                              |
| ------------------------------------------------------------------------------------ | ----------- | ----------------------- | ------------------------------------ |
| [File Upload Security](./12-files-and-resources/examples/validate-file-on-upload.md) | Critical 🔴 | Security 🔒, Backend ⚙️ | Don't accept excessively large files |
| [Secure File Download](./12-files-and-resources/12-files-and-resources.md)           | Critical 🔴 | Security 🔒, Backend ⚙️ | Allow specific file extensions       |
| [SSRF Protection](./12-files-and-resources/12-files-and-resources.md)                | Critical 🔴 | Security 🔒, Backend ⚙️ | Configure an allowlist               |

## Api And Web Service

| Name                                                                               | Level       | Scope                   | Comment                                                   |
| ---------------------------------------------------------------------------------- | ----------- | ----------------------- | --------------------------------------------------------- |
| [General Web Service Security](./13-api-and-web-service/13-api-and-web-service.md) | Critical 🔴 | Security 🔒, Backend ⚙️ | Use the same encoding, don't expose sensitive information |
| [RESTful Web Service Security](./13-api-and-web-service/13-api-and-web-service.md) | Critical 🔴 | Security 🔒, Backend ⚙️ | Use role-based access control                             |

## Configuration

| Name                                                                       | Level       | Scope                               | Comment                |
| -------------------------------------------------------------------------- | ----------- | ----------------------------------- | ---------------------- |
| [Dependency Management & Security](./14-configuration/14-configuration.md) | Critical 🔴 | Security 🔒, Backend ⚙️, Frontend 🖥 | Use dependency checker |
