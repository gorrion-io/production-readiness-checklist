# Gorrion Production Readiness Checklist

|Name|Level|Scope|Comment
|--|--|--|--|
|The website is available via clientβs domain address with TLS and redirected from HTTP to HTTPS|Critical π΄|Frontend π₯, Security π||
|The domain is redirected to the www subdomain|Critical π΄|Frontend π₯||
|The check on https://securityheaders.com/ gives at least a βBβ grade|Critical π΄|Frontend π₯, Security π||
|The backend is accessible via the clientβs domain with TLS|Critical π΄|Backend βοΈ, Security π||
|The backend is accessible only from the clientβs domains using CORS|Critical π΄|Backend βοΈ, Security π|Not possible with mobile apps|
|The JWT secret is safe and configured only on the server-side|Critical π΄|Backend βοΈ, Security π||
|The app has an error-monitoring system configured|Critical|Backend βοΈ, Frontend π₯, Monitoring π|Recommended: https://sentry.io|
|The app is deployed via CI solution|Critical π΄|Deployment π, CI/CD π€||
|The app is hosted on production-grade cloud solution|Critical π΄|Deployment π, Security π|Recommended: AWS, Digital Ocean, Fly.io|
|The database is hosted on production-grade solution|Critical π΄|Deployment π, Security π|Recommended: AWS RDS, Digital Ocean Databases, Supabase, PlanetScale or similar|
|The database has backups enabled|Critical π΄|Deployment π, Security π||
|CRON jobs should only be handled via one source of truth|Critical π΄|Backend βοΈ, Deployment π||
|All password related to the project should be shared via password manager only with corresponding group|Critical π΄|Security π, Deployment π|Do not share password, secrets etc. in messages nor host them on git|
|The app should have a risk management and disaster recovery plan written down and available at any point.|Critical π΄|Monitoring π, Security π, Deployment π||
|The app has an uptime-monitoring system configured|Should have π‘|Monitoring π, Backend βοΈ, Frontend π₯|Leverage health checks. Recommended: https://instatus.com/ or https://betteruptime.com/|
|The app has a logging solution configured|Should have π‘|Monitoring π, Backend βοΈ, Frontend π₯|Recommended: AWS Cloudwatch or https://betterstack.com/logtail|
|The auto-scaling solution is enabled|Should have π‘|Deployment π, Backend βοΈ||
|The frontend should be checked periodically in terms of performance|Should have π‘|Frontend π₯|At least test Core Web Vitals via Chrome Lighthouse|
|Tests and audits should be run in CI/CD pipelines|Should have π‘|CI/CD π€, Security π|Audit packages to limit CVEs, use SNYK CLI to check production docker images|
|The app has an ability to quickly check and deploy hot-fixes to production|Should have π‘|Deployment π, CI/CD π€||
|The error messages on client doesnβt include stack traces|Nice to have π’|Deployment π, Security π, Frontend π₯|Remove everything that can give attackers an attack surface|
|The app has versioning system enabled and has a change log|Nice to have π’|Deployment π||
