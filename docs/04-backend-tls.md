---
title: The backend is accessible via the client’s domain with TLS
---

# The backend is accessible via the client’s domain with TLS

## Description

Ensuring that the backend services are accessible via the client's domain with secure communications is crucial for protecting sensitive data and maintaining trust.

* **Domain Configuration**: Verify that the backend services are correctly accessible through a dedicated subdomain (e.g. `api`) under the client's main domain. Ensure proper DNS settings and domain registration.
* **TLS Configuration**: Ensure that both the root domain and the ﻿`api` subdomain have valid SSL certificates. Configure redirection for both HTTP and HTTPS traffic.
* **Server configuration**: Ensure no sensitive endpoints are exposed over non-secure HTTP. Redirect all HTTP requests to HTTPS.
* **Security Headers**: Apply security headers such as ﻿Strict-Transport-Security (HSTS) to enforce HTTPS and protect against protocol downgrade attacks.
* **Testing and Validation**: Use tools like SSL Labs' SSL Test to validate the proper implementation of the certificate and check for security vulnerabilities. Additionally, verify the domain's availability from different geographic locations to ensure global accessibility. Check the DNS configuration with DNSChecker.
* **Monitoring and Alerts**: Set up monitoring for domain expiration, certificate expiration, and TLS configuration issues. Implement alerts to notify the relevant team members of potential problems.
## Proposed options
### Option 1: Load Balancer
Configure AWS ELB/ALB to listen to a 443 port and serve the certificate from ACM.

### Option 2: Use Cloudflare with the provided certificate

### Option 3: Reverse Proxy
Configure the Reverse Proxy of choice (e.g. Nginx, Caddy, Traefik) with Let's Encrypt Certificate.
