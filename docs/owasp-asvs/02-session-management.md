---
title: Session management is implemented securely
---

# Session management is implemented securely

## Description

Secure session management is crucial for maintaining user authentication state across multiple requests while preventing session-based attacks. Proper implementation helps protect users from session hijacking, fixation, and other related vulnerabilities.

- **Session Token Security**:

  - Verify the application never reveals session tokens in URL parameters.
  - Generate new session tokens on user authentication.
  - Ensure session tokens possess at least 64 bits of entropy.
  - Store session tokens in the browser using secure methods such as properly secured cookies or HTML 5 session storage.

- **Cookie-based Session Management**:

  - Set the `Secure` attribute on cookie-based session tokens.
  - Set the `HttpOnly` attribute on cookie-based session tokens.
  - Utilize the `SameSite` attribute to limit exposure to cross-site request forgery attacks.
  - Use the `__Host-` name prefix for cookies so they're only sent to the host that initially set them.
  - Set most precise path attributes on cookies if the application is published under a domain that hosts multiple applications.

- **Session Termination**:

  - Ensure logout and expiration invalidate the session token, so the back button or downstream relying party doesn't resume an authenticated session.
  - If users can remain logged in, implement periodic re-authentication when actively used or after an idle period (maximum 30 days).

- **Session Protection**:

  - Require full, valid login session or re-authentication/secondary verification before allowing sensitive transactions or account modifications.

- **Session Management Best Practices**:

  - Regenerate session IDs after authentication, privilege level changes, or other sensitive operations to prevent session fixation attacks.
  - Provide a clear logout function that properly invalidates the session.
  - Implement both idle timeout and absolute timeout to limit exposure.

## Proposed options

### Option 1: Framework-based Session Management

Use built-in session management from established libraries like nextAuth or Clerk, which implement security best practices.

### Option 2: Token-based Authentication

Use built-in JWT (JSON Web Tokens) or similar token-based authentication from established libraries like nextAuth, Clerk or jose, which implement proper signature validation, expiration, and refresh mechanisms.
