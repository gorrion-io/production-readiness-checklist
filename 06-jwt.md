# The JWT secret is safe and configured only on the server-side

## Description

To ensure secure authentication and authorisation processes, the JWT (JSON Web Token) secret key must be properly managed and securely configured.

* **Server-Side Configuration**: Ensure that the JWT secret key is only configured on the server-side and never exposed to the client-side or included in client-side code.
* **Secure Storage**: Store the JWT secret in environment variables or a secure secrets management service. Avoid hardcoding the secret in the source code or configuration files.
* **Environment Configuration**: Ensure that the environment variables are correctly set on the server where the backend is deployed.
* **Access Controls**: Restrict access to the environment variables and secrets management systems to authorised staff.
* **Auditing and Monitoring**: Log access to the JWT secret and monitor for any unauthorised attempts to access or modify it. Set up alerts for any suspicious activity related to the JWT secret.
* **Documentation**: Document the procedures for managing and rotating the JWT secret key. Ensure all relevant team members are aware of and follow these procedures.

## Proposed options
### Option 1: Use AWS Secrets Manager

### Option 2: Use environment variable