---
title: Error handling and logging are implemented securely
---

# Error handling and logging are implemented securely

```
ℹ️ Properly handle errors and logs to maintain security while providing useful information
```

## TLDR (must-haves)

- **Secure Error Handling**

  - Show generic error messages to users, never expose stack traces or system details. Log errors internally for debugging.

- **Privacy-Compliant Logging**

  - Never log sensitive data (passwords, tokens, payment details, PII)
  - Comply with relevant privacy laws (GDPR) in log content
  - Implement appropriate log retention and deletion policies
  - Apply proper access controls to log storage and management

- **Logging Best Practices**

  - Include context (user ID, request ID, timestamp) but not sensitive data
  - Log security-relevant events like authentication attempts and permission changes
  - Implement monitoring and alerting for critical errors and suspicious patterns

## Description

Proper error handling and logging are essential for application security, helping to identify issues without revealing sensitive information to potential attackers.

- **General Requirements**:

  - Ensure logs do not contain sensitive data and comply with privacy laws.
  - Don't collect sensitive information in logs unless specifically required.
  - Handle all logged information securely with appropriate protections.
  - Implement appropriate log retention policies rather than indefinite storage.
  - Design errors to avoid disclosing unnecessary information.

- **Log Content**:

  - Do not log credentials or payment details. Store session tokens only in irreversible, hashed form.
  - Avoid logging other sensitive data as defined by local privacy laws or security policies.
  - Include relevant information for debugging and security analysis without exposing sensitive details.

- **Error Handling**:

  - Show generic messages when unexpected or security-sensitive errors occur, potentially with a unique ID that support personnel can use for investigation.
  - Implement a centralized error handling mechanism that processes all errors consistently.
  - Design error handling to fail securely without exposing sensitive information or creating security vulnerabilities.

- **Best Practices**:

  - Use structured logging formats (like JSON) to make logs searchable and parsable.
  - Protect log data with proper access controls, encryption when necessary, and appropriate retention policies.
  - Log validation failures that might indicate attempted attacks, but avoid logging the invalid input directly.
  - Implement real-time error monitoring and alerting for critical application errors.
  - Follow logging standards appropriate for your industry and compliance requirements.

## Proposed options

### Option 1: Framework-based Logging and Error Handling

Use built-in or officially supported logging and error handling modules like tRPC's error formatter with custom error classes for type-safe error handling

### Option 2: Centralized Logging Services

Implement AWS CloudWatch for centralized logging combined with AWS X-Ray for distributed tracing

### Option 3: Error Monitoring Services

Use error monitoring services like Sentry or PostHog to automatically collect, group, and alert on application errors.
