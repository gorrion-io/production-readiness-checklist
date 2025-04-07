---
title: All input is validated, sanitized, and properly encoded
---

# All input is validated, sanitized, and properly encoded

```
ℹ️ Never trust user input - validate everything server-side
```

## TLDR (must-haves)

- **Input Validation Essentials**

  - Implement server-side validation for ALL input regardless of client-side validation
  - Verify all structured data (JSON, XML) against defined schemas
  - Implement protections against parameter pollution and mass assignment attacks

- **Sanitization Requirements**

  - Sanitize unstructured data with appropriate character and length restrictions
  - Apply special sanitization for email, template engines, file upload and SVG content

- **Output Encoding Best Practices**

  - Apply framework-provided context-aware auto-escaping when available

## Description

Proper data validation, sanitization, and encoding are critical defenses against injection attacks, cross-site scripting (XSS), and other vulnerabilities that exploit untrusted data. This includes both validating input when it enters the application and properly encoding output when it leaves.

- **Input Validation**:

  - Implement defenses against HTTP parameter pollution attacks.
  - Protect against mass parameter assignment attacks with countermeasures for unsafe parameter assignment.
  - Validate all input (HTML form fields, REST requests, URL parameters, HTTP headers, cookies etc.) using schema validation.
  - Ensure structured data is strongly typed and validated against defined schemas including allowed characters, length, and pattern.
  - Restrict URL redirects and forwards to destinations on an allow list, or show warnings when redirecting to potentially untrusted content.

- **Sanitization**:

  - Sanitize unstructured data to enforce safety measures such as allowed characters and length.
  - Sanitize user input before passing to mail systems to protect against SMTP or IMAP injection.
  - Avoid using eval() or other dynamic code execution features. When unavoidable, sanitize any user input before execution.
  - Protect against template injection attacks by sanitizing user input.
  - Protect against SSRF attacks by validating or sanitizing untrusted data or HTTP file metadata.
  - Sanitize or disable user-supplied SVG scriptable content to prevent XSS.
  - Sanitize or disable sandbox user-supplied scriptable or expression template language content (Markdown, CSS, XSL, BBCode, etc.).

- **Server-side Validation Best Practices**:

  - Implement strong server-side validation regardless of client-side validation.
  - Validate that inputs match expected data types, formats, and content constraints.
  - Use schema validation whenever possible, accepting only known good input.
  - For structured data like JSON or XML, validate against a schema before processing.
  - Apply strict validation on file uploads including type, size, and content verification.

## Proposed options

### Option 1: HTML5 Validation Features

Utilize built-in HTML5 validation attributes like type, required, pattern, minlength, maxlength, and min/max on input fields to provide client-side validation with minimal code.

### Option 2: Schema Validation Libraries

Use schema validation libraries Zod to validate input against predefined schemas.

### Option 3: Web Application Firewall (WAF)

Implement a WAF like AWS WAF, or Cloudflare's WAF as an additional layer of protection for common attack patterns.
