# Gorrion Production Readiness Checklist

| Name                                                                                                                                | Level           | Scope                                     | Comment                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------------------------------------- | --------------------------------------------------------------------------------------- |
| [The website is available via the client’s domain address with TLS and redirected to HTTPS from HTTP](./01-redirect-front-https.md) | Critical 🔴     | Frontend 🖥, Security 🔒                  |                                                                                         |
| [The domain is redirected to the www subdomain](./02-redirect-www.md)                                                               | Critical 🔴     | Frontend 🖥                               |                                                                                         |
| [The check on https://securityheaders.com/ gives at least a “B” grade](./03-security-headers.md)                                    | Critical 🔴     | Frontend 🖥, Security 🔒                  |                                                                                         |
| [The backend is accessible via the client’s domain with TLS](./04-backend-tls.md)                                                   | Critical 🔴     | Backend ⚙️, Security 🔒                   |                                                                                         |
| [The backend is accessible only from the client’s domains using CORS](./05-backend-cors.md)                                         | Critical 🔴     | Backend ⚙️, Security 🔒                   | Not possible with mobile apps                                                           |
| [The JWT secret is safe and configured only on the server side](./06-jwt.md)                                                        | Critical 🔴     | Backend ⚙️, Security 🔒                   |                                                                                         |
| [The app has an error-monitoring system configured](./07-error-monitoring.md)                                                       | Critical 🔴     | Backend ⚙️, Frontend 🖥, Monitoring 👀    | Recommended: https://sentry.io                                                          |
| [The app is deployed via the CI solution](./08-ci.md)                                                                               | Critical 🔴     | Deployment 🚀, CI/CD 🤖                   |                                                                                         |
| [The app is hosted on a production-grade cloud solution](./09-hosting.md)                                                           | Critical 🔴     | Deployment 🚀, Security 🔒                | Recommended: AWS, Digital Ocean, Fly.io                                                 |
| [The database is hosted on a production-grade solution](./10-db.md)                                                                 | Critical 🔴     | Deployment 🚀, Security 🔒                | Recommended: AWS RDS, Digital Ocean Databases, Supabase, PlanetScale or similar         |
| [The system has backups enabled](./11-backup.md)                                                                                    | Critical 🔴     | Deployment 🚀, Security 🔒                |                                                                                         |
| [CRON jobs should only be handled via one source of truth](./12-crons.md)                                                           | Critical 🔴     | Backend ⚙️, Deployment 🚀                 |                                                                                         |
| [All password related to the project should be shared via password manager only with corresponding group](13-passwords.md)          | Critical 🔴     | Security 🔒, Deployment 🚀                | Do not share password, secrets etc. in messages nor host them on git                    |
| [The app should have a risk management and disaster recovery plan written down and available at any point](13-risk-management.md)   | Critical 🔴     | Monitoring 👀, Security 🔒, Deployment 🚀 |                                                                                         |
| [The app has an uptime-monitoring system configured](14-uptime.md)                                                                  | Should have 🟡  | Monitoring 👀, Backend ⚙️, Frontend 🖥    | Leverage health checks. Recommended: https://instatus.com/ or https://betteruptime.com/ |
| [The app has a logging solution configured](15-logging.md)                                                                          | Should have 🟡  | Monitoring 👀, Backend ⚙️, Frontend 🖥    | Recommended: AWS Cloudwatch or https://betterstack.com/logtail                          |
| [The auto-scaling solution is enabled](16-autoscaling.md)                                                                           | Should have 🟡  | Deployment 🚀, Backend ⚙️                 |                                                                                         |
| [The frontend should be checked periodically in terms of performance](17-front-perf.md)                                             | Should have 🟡  | Frontend 🖥                               | At least test Core Web Vitals via Chrome Lighthouse                                     |
| [Tests and audits should run in CI/CD pipelines](18-ci-cd-tests.md)                                                                 | Should have 🟡  | CI/CD 🤖, Security 🔒                     | Audit packages to limit CVEs, use SNYK CLI to check production docker images            |
| [There is a way to quickly check and deploy hot fixes to production](19-hot-fixes.md)                                               | Should have 🟡  | Deployment 🚀, CI/CD 🤖                   |                                                                                         |
| [The error messages on client don’t include stack traces](20-stack-trace.md)                                                        | Nice to have 🟢 | Deployment 🚀, Security 🔒, Frontend 🖥   | Remove everything that can give attackers an attack surface                             |
| [The app has versioning system enabled and has a change log](21-versioning.md)                                                      | Nice to have 🟢 | Deployment 🚀                             |                                                                                         |
