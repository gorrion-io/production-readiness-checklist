---
title: Access control mechanisms are properly implemented
---

# Access control mechanisms are properly implemented

## Description

Access control ensures that users can only access resources and perform actions they are authorized for. Proper implementation prevents unauthorized access to sensitive functionality and data.

- **General Access Control Design**:

  - Enforce access control rules on a trusted service layer, especially if client-side access control is present and could be bypassed.
  - Ensure user and data attributes and policy information used by access controls cannot be manipulated by end users unless specifically authorized.
  - Implement the principle of least privilege - users should only be able to access functions, data files, URLs, services, and resources for which they possess specific authorization.
  - Ensure access controls fail securely, including when exceptions occur.

- **Operation Level Access Control**:

  - Protect sensitive data and APIs against Insecure Direct Object Reference (IDOR) attacks targeting creation, reading, updating, and deletion of records.
  - Enforce strong anti-CSRF mechanisms to protect authenticated functionality, and effective anti-automation or anti-CSRF to protect unauthenticated functionality.

- **Other Access Control Considerations**:

  - Use appropriate multi-factor authentication for administrative interfaces to prevent unauthorized use.
  - Disable directory browsing unless deliberately desired. Prevent discovery or disclosure of file or directory metadata (Thumbs.db, .DS_Store, .git folders).

- **Access Control Best Practices**:

  - Implement consistent access control checks across all parts of the application.
  - Use a deny-by-default approach where access is denied unless explicitly granted.
  - Never reveal features or options in the UI that users don't have permission to use.
  - Log access control failures to identify potential attacks or misconfiguration.

## Proposed options

### Option 1: Framework-based Access Control

Use built-in access control mechanisms provided by mature frameworks such as NextAuth.

### Option 2: Middleware-based Authorization

Implement custom middleware that checks permissions before request handling.

### Option 3: Authorization Services

Use dedicated authorization services like AWS IAM for complex authorization requirements.
