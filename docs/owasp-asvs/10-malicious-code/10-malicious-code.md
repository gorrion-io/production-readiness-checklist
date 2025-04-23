---
title: Ensure that the code has no inherent malicious code or unwanted functionality
---

# Ensure that the code has no inherent malicious code or unwanted functionality

## TLDR

- Use npm package integrity checks (ex. npm audit) to prevent supply chain attacks. Lock dependencies with package-lock.json
- Monitor DNS records for expired or abandoned resources

### Application Integrity
- If the application supports automatic updates, ensure updates are downloaded over secure channels and are digitally signed. 
- The application should have integrity protections, such as code signing or subresource integrity.
- If the application relies on DNS entries or subdomains, ensure it is protected against subdomain takeovers. This includes monitoring for risks such as:
    - Expired domain names
    - Outdated DNS records (CNAMEs, pointers)
    - Abandoned repositories in public source control
    - Inactive cloud resources (serverless functions, storage buckets, APIs)
    Regularly review and update DNS configurations to prevent unauthorized takeovers.



