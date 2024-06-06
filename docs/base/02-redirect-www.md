---
title: The domain is redirected to the www subdomain
---

# The domain is redirected to the www subdomain

```Plain Text
ℹ️ This should be a 301 Permanent Redirect
```

## Description

To ensure a consistent user experience and improve SEO, the primary domain should redirect to the ﻿www subdomain. Here are the necessary steps:

* **DNS Configuration**: Ensure that the domain name has the appropriate DNS records that point to the same server as the ﻿`www` subdomain.
* **Server Configuration**: Configure the web server (e.g. Nginx, Caddy) to redirect all traffic from the root domain to the ﻿`www` subdomain.
* **TLS Configuration**: Ensure that both the root domain and the ﻿www subdomain have valid SSL certificates. Configure redirection for both HTTP and HTTPS traffic.
* **Testing**: Verify the redirection using multiple tools and browsers to ensure the correct configuration. Check for any potential issues such as redirect loops or misconfigurations.
* **SEO Considerations**: Use Google Search Console or similar tools to inform search engines about the preferred domain and to monitor for issues.
* **Monitoring**: Implement ongoing monitoring to ensure that the redirection remains functional and promptly address any issues if the configuration changes or breaks.
