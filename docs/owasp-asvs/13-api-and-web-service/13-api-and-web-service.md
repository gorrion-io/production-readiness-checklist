---
title: Ensure that an application has authentication, input validation and security controls
---

# Ensure that an application has authentication, input validation and security controls

## TLDR

- Use role-based access control
- Reject API calls from unexpected origins

## Description

Ensure that application has:

- Adequate authentication, session management and authorization of all web services.
- Input validation of all parameters that transit from a lower to higher trust level.
- Effective security controls for all API types, including cloud and Serverless API

### General Web Service Security

- Ensure that all application components use the same encoding and parsing methods.
- Make sure API URLs don't expose sensitive information, such as API keys, session tokens, or other private data.

### RESTful Web Service Security

- Restrict RESTful HTTP methods based on user roles and actions.
- Implement JSON schema validation to ensure all incoming data is properly structured before being accepted.
- Protect RESTful web services that use cookies from Cross-Site Request Forgery (CSRF) by implementing at least one security measure such as:
  - Double-submit cookie pattern
  - CSRF nonces (tokens)
  - Origin request header checks

### SOAP Web Service Security

Use XSD schema validation to ensure incoming XML data is properly formatted. Then, validate each input field before processing the request.
