---
title: Authentication requirements are implemented securely
---

# Authentication requirements are implemented securely

```
ℹ️ Proper authentication is the foundation of application security
```

## TLDR (must-haves)

- **Strong Password Requirements**

  - Minimum 12 characters, allow up to 64-128 characters
  - No mandatory character type rules (uppercase, numbers, etc.)
  - Allow all printable Unicode characters, including spaces and emojis
  - Check against breached password databases
  - Provide a password strength meter

- **Essential Security Controls**

  - Implement rate limiting on critical endpoints
  - Use secure, salted password hashing (node-rs/argon2)
  - Send notifications for account changes (password, email, etc.). Sending notifications for unusual logins is a plus!
  - Support MFA (TOTP, security keys, or push notifications)
  - Implement secure account recovery (avoid security questions)

- **User Experience**

  - Allow paste functionality and password managers
  - Option to view masked passwords temporarily
  - Require current and new password during changes
  - Use secure channels for OTP/reset codes with short expiration

## Description

Authentication is the process of verifying that an individual, entity or website is who they claim to be. Implementing secure authentication is critical to protect user accounts and prevent unauthorized access.

- **Password Security**:

  - Implement password requirements with minimum length of at least 12 characters.
  - Maximum password length should be at least 64 characters, and no more than 128 characters.
  - Do not perform password truncation.
  - Permit any printable Unicode character in passwords, including spaces and emojis.
  - Do not enforce composition rules limiting character types (no requirements for upper/lowercase, numbers, or special characters).
  - Check passwords against known breached password lists either locally or via API.
  - Provide a password strength meter to help users set stronger passwords.
  - Verify that there are no password composition rules limiting the type of characters permitted.
  - Avoid periodic credential rotation or password history requirements as they can lead to predictable password patterns.
  - Allow paste functionality, browser password helpers, and external password managers.
  - Provide an option to temporarily view masked passwords or the last typed character.

- **Brute Force Protection**: Implement anti-automation controls to mitigate credential testing and brute force attacks (rate limiting, CAPTCHA, delays between attempts). Ensure no more than 100 failed attempts per hour is possible on a single account.

- **Authentication Notifications**: Send secure notifications to users after authentication detail updates, credential resets, email or address changes, or logins from unknown locations. Prefer push notifications over SMS or email.

- **Account Recovery**:

  - Use secure, randomly generated initial passwords or activation codes that are at least 6 characters long and expire after a short period.
  - Avoid using password hints or knowledge-based authentication ("secret questions").
  - Ensure password recovery doesn't reveal the current password.
  - Use secure recovery mechanisms like time-based OTP (TOTP), soft tokens, mobile push, or other offline recovery methods.

- **Credential Management**:

  - Allow users to change their passwords.
  - Require the user's current and new password during password changes.
  - Notify users when authentication factors are changed or replaced.
  - Ensure no shared or default accounts are present (e.g., "root", "admin").

- **Out of Band/OTP Authentication**:

  - Prefer stronger alternatives (like push notifications) over SMS for the out of band authentication.
  - Verify that the out of band authenticator and verifier communicates over a secure independent channel.
  - Ensure that out of band authentication requests, codes, or tokens expire after a short period (about 10 minutes).
  - Ensure time-based OTPs have a defined lifetime before expiring.
  - Ensure codes are only usable once and only for the original request.
  - Use weak authenticators (such as SMS and email) only for secondary verification and transaction approval and not as a replacement for more secure authentication methods.

## Proposed options

### Option 1: Custom Authentication Implementation

Implement authentication using secure frameworks and libraries with proper password hashing, session management, and brute force protection like NextAuth.

### Option 2: Identity as a Service

Use established authentication services like Clerk, BetterAuth or AWS Cognito that handle these features out of the box.
