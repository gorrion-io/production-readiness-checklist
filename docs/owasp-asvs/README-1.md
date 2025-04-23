# OWASP ASVS Security Checklist

## Data Protection

| Name                                                                       | Level          | Scope                   | Comment                                                                  |
| -------------------------------------------------------------------------- | -------------- | ----------------------- | ------------------------------------------------------------------------ |
| [Client-side Data Protection](./08-data-protection/08-data-protection.md)   | Critical 🔴    | Security 🔒, Backend ⚙️, Frontend 🖥 | Anti-caching headers, setting token in cookies, user logout   |
| [Sending Sensitive Private Data](./08-data-protection/08-data-protection.md)    | Critical 🔴    | Security 🔒, Backend ⚙️ | Privacy policy, user can delete or export data        |


## Communication

| Name                                                                                           | Level       | Scope                   | Comment                                                  |
| ---------------------------------------------------------------------------------------------- | ----------- | ----------------------- | -------------------------------------------------------- |
| [Secure Client Communication](./09-communication/09-communication.md)                     | Critical 🔴 | Security 🔒 |  Use TLS 1.2 or TLS 1.3 |


## Malicious Code

| Name                                                                              | Level       | Scope                   | Comment                                                                    |
| --------------------------------------------------------------------------------- | ----------- | ----------------------- | -------------------------------------------------------------------------- |
| [Application Integrity](./10-malicious-code/examples/add-audit-stage-to-ci.md)        | Critical 🔴 | Security 🔒, Backend ⚙️, Frontend 🖥 | Add audit stage to CI               |
           |
| [Application Integrity](./10-malicious-code/10-malicious-code.md)        | Critical 🔴 | Security 🔒 |  Monitor DNS records for expired or abandoned resources                 |
           |

## Business Logic

| Name                                                                              | Level       | Scope                   | Comment                                                                    |
| --------------------------------------------------------------------------------- | ----------- | ----------------------- | -------------------------------------------------------------------------- |
| [Business Logic Security](./11-business-logic.md)        | Critical 🔴 | Security 🔒, Backend ⚙️, Frontend 🖥 | Business logic flow in correct order              |
           


## Files And Resources

| Name                                                                                 | Level       | Scope                   | Comment                                                           |
| ------------------------------------------------------------------------------------ | ----------- | ----------------------- | ----------------------------------------------------------------- |
| [File Upload Security](./12-files-and-resources/examples/validate-file-on-upload.md)          | Critical 🔴 | Security 🔒, Backend ⚙️ | Don't accept excessively large files |
| [Secure File Download](./12-files-and-resources/12-files-and-resources.md)       | Critical 🔴 | Security 🔒, Backend ⚙️ | Allow specific file extensions                       |
| [SSRF Protection](./12-files-and-resources/12-files-and-resources.md)   | Critical 🔴 | Security 🔒, Backend ⚙️ | Configure an allowlist                |

## Api And Web Service

| Name                                                                         | Level       | Scope                   | Comment                                                 |
| ---------------------------------------------------------------------------- | ----------- | ----------------------- | ------------------------------------------------------- |
| [General Web Service Security](./13-api-and-web-service/13-api-and-web-service.md)        | Critical 🔴 | Security 🔒, Backend ⚙️ | Use the same encoding, don't expose sensitive information  |
| [RESTful Web Service Security](./13-api-and-web-service/13-api-and-web-service.md)            | Critical 🔴 | Security 🔒, Backend ⚙️ | Use role-based access control        |


## Configuration

| Name                                                                        | Level          | Scope                      | Comment                                               |
| --------------------------------------------------------------------------- | -------------- | -------------------------- | ----------------------------------------------------- |
| [Dependency Management & Security](./14-configuration/14-configuration.md)           | Critical 🔴    | Security 🔒, Backend ⚙️,  Frontend 🖥    | Use dependency checker  |
