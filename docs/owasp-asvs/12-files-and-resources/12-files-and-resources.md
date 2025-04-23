---
title: Ensure that an application handles files securly
---

# Ensure that an application handles files securly

## TLDR 
- Restrict file size
- Validate MIME types
- Rename uploaded files using a UUID
- Use AWS S3 for files storage 

## Description
Ensure that an application satisfies the following high level requirements:
- Untrusted file data should be handled accordingly and in a secure manner.
- Untrusted file data obtained from untrusted sources are stored outside the web root and with limited permissions.

### File Upload Security
Don't accept excessively large files.

### File Execution Security
- Make sure user-submitted filenames aren't directly used by us.
- Protect against Reflective File Download (RFD) attacks by:
    - Validating or ignoring user-submitted filenames in JSON, JSONP, or URL parameters.
    - Setting the response Content-Type header to text/plain.
    - Using a fixed filename in the Content-Disposition header.
- Never use untrusted file metadata directly with system APIs or libraries to prevent OS command injection vulnerabilities.

### Secure File Storage
- Store files from untrusted sources outside the web root, with restricted permissions.
- Scan uploaded files using antivirus software to detect and block known malicious content.

### Secure File Download
- Configure the web server to only allow specific file extensions, preventing accidental exposure of sensitive files like:
    - Backup files (e.g., .bak)
    - Temporary files (e.g., .swp)
    - Compressed archives (e.g., .zip, .tar.gz)
Unless explicitly required, these files should be blocked.
- Ensure that uploaded files are never executed as HTML or JS to prevent cross-site scripting (XSS) risks.

### SSRF Protection
Configure an allowlist of approved resources or systems it can request data from, preventing unauthorized server-side request forgery (SSRF) attacks.


