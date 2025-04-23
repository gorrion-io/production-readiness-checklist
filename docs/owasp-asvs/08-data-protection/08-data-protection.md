---
title: Ensure that an application satisfies high level data protection
---

# Ensure that an application satisfies high level data protection

```
ℹ️ Avoid storing sensitive data in browser storage.
```

## TLDR (must-haves)

### Client-side data protection
  - Anti-caching headers
  - Set token in cookies
  - Remove authenticated data on user logout

### Private data
  - Privacy policy 
  - User can delete or export data

## Description

There are three key elements to sound data protection: Confidentiality, Integrity and Availability (CIA).
- **Confidentiality**: Data should be protected from unauthorized observation or disclosure both in transit and when stored.
- **Integrity**: Data should be protected from being maliciously created, altered or deleted by unauthorized attackers.
- **Availability**: Data should be available to authorized users as required.

### Client-side data protection
  - Use anti-caching headers.
  - Don't store sensitive data in browser storage.
  - Remove authenticated data on user logout.

### Sensitive private data
  - Send sensitive data only in the HTTP message body or headers, no sensitive information in query string parameters.
  - Enable users easily delete or export their data whenever they want.
  - Explain to users how their personal information is collected and used, and get their explicit consent before using it in any way.
  - Policy for handling properly all sensitive data in the application.


