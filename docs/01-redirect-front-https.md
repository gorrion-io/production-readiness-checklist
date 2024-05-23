---
title: The website is available via client’s domain address with TLS and redirected from HTTP to HTTPS
---

# The website is available via client’s domain address with TLS and redirected from HTTP to HTTPS

## Description

Ensuring the client's website is properly configured and secure is essential for user trust and data protection. Here's what is required:

* **Domain Configuration**: Verify that the website is accessible via the client's official domain name, ensuring proper DNS settings and domain registration.
* **TLS (Transport Layer Security)**: Ensure that TLS is correctly configured to secure all communication between the client and the server. Certificate management should be in place to handle renewal and updates.
* **HTTP to HTTPS Redirection**: Implement automatic redirection from HTTP to HTTPS to guarantee that all traffic is encrypted. This can be done via web server settings or using a service like Cloudflare.
* **SSL Certificate**: Obtain a valid SSL certificate from a trusted Certificate Authority (CA) and install it on the server. Ensure the certificate is renewed before it expires.
* **Security Headers**: Apply security headers such as ﻿Strict-Transport-Security (HSTS) to enforce HTTPS and protect against protocol downgrade attacks.
* **Testing and Validation**: Use tools like SSL Labs' SSL Test to validate the proper implementation of the certificate and check for security vulnerabilities. Additionally, verify the domain's availability from different geographic locations to ensure global accessibility. Check the DNS configuration with DNSChecker.
* **Monitoring and Alerts**: Set up monitoring for domain expiration, certificate expiration, and TLS configuration issues. Implement alerts to notify the relevant team members of potential problems.

## Proposed options
### Option 1: Load Balancer
Configure AWS ELB/ALB to listen to a 443 port and serve the certificate from ACM.

### Option 2: CloudFront
Configure CloudFront to serve S3-hosted, static pages with TLS.

### Option 3: Reverse Proxy
Configure the Reverse Proxy of choice (e.g. Nginx, Caddy, Traefik) with Let's Encrypt Certificate.
