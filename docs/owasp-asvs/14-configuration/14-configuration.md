---
title: Ensure that an application has secure configuration
---

## TLDR 
- Use dependency checker 
- Remove unnecessary features and files 


## Description
Ensure that an application has:
- A secure, repeatable, automatable build environment.
- Hardened third party library, dependency and configuration management such that out of date or insecure components aren't included by the application.

### Dependency Management & Security

- Ensure that all components and dependencies are up to date, ideally using an automated dependency checker during build or compile time.
- Remove any unnecessary features, documentation, sample applications, and default configurations to reduce security risks.
- If the application loads external assets from a CDN or third-party provider, use Subresource Integrity (SRI) to verify the asset’s integrity.

### Preventing Unintended Security Disclosures
- Disable debug mode in production.
- Ensure that HTTP headers or any other parts of the response don't reveal version details about system components.
- Every HTTP response must include a Content-Type header. If the content type is text/*, application/xml, or similar, define a safe character set.
- All API responses should include a Content-Disposition: attachment; filename="api.json" header (or other appropriate filename for the content type).
- Implement a Content Security Policy (CSP) response header to mitigate risks from XSS attacks.
- Include an X-Content-Type-Options: nosniff header in all responses to prevent browsers from guessing content types.
- Ensure that a Strict-Transport-Security (HSTS) header is present in all responses, covering all subdomains.
- Use a Referrer-Policy header to prevent sensitive information from being leaked in URLs through the Referer header.
- Prevent third-party sites from embedding your web application by default. Allow embedding only where necessary using the Content-Security-Policy: frame-ancestors and X-Frame-Options headers.

### HTTP Request Header Validation
- Ensure that the server only allows necessary HTTP methods and logs or alerts on unexpected request methods.
- Never use the Origin header for authentication or access control.
- Enforce strict CORS policies by setting the Access-Control-Allow-Origin header to an explicit allowlist of trusted domains and subdomains. Do not allow "null" origins.



