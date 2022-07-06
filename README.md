# Gorrion Production Readiness Checklist

|Name|Level|Scope|Comment
|--|--|--|--|
|The website is available via client’s domain address with SSL|Critical 🔴|Frontend 🖥, Security 🔒||
|The domain is redirected to the www subdomain|Critical 🔴|Frontend 🖥||
|The check on https://securityheaders.com/ gives at least a “B” grade|Critical 🔴|Frontend 🖥, Security 🔒||
|The backend is accessible via the client’s domain with SSL|Critical 🔴|Backend ⚙️, Security 🔒||
|The backend ⚙️ is accessible only from the client’s domains using CORS|Critical 🔴|Backend ⚙️, Security 🔒|Not possible with mobile apps|
|The JWT secret is safe and configured only on the server-side|Critical 🔴|Backend ⚙️, Security 🔒||
|The app has an error-monitoring system configured|Critical|Backend ⚙️, Frontend 🖥, Monitoring 👀|Recommended: https://sentry.io|
|The app is deployed via CI solution|Critical 🔴|Deployment 🚀, CI/CD 🤖||
|The app is hosted on production-grade cloud solution|Critical 🔴|Deployment 🚀, Security 🔒|Recommended: AWS, Digital Ocean, Fly.io|
|The database is hosted on production-grade solution|Critical 🔴|Deployment 🚀, Security 🔒|Recommended: AWS RDS, Digital Ocean Databases, Supabase, PlanetScale or similar|
|The database has backups enabled|Critical 🔴|Deployment 🚀, Security 🔒||
|CRON jobs should only be handled via one source of truth|Critical 🔴|Backend ⚙️, Deployment 🚀||
|All password related to the project should be shared via password manager with corresponding group|Critical 🔴|Security 🔒, Deployment 🚀|Do not share password, secrets etc. in messages nor host them on git|
|The app should have a risk management and disaster recovery plan written down and available at any point.|Critical 🔴|Monitoring 👀, Security 🔒, Deployment 🚀||
|The app has an uptime-monitoring system configured|Should have 🟡|Monitoring 👀, Backend ⚙️, Frontend 🖥|Leverage health checks. Recommended: https://instatus.com/ or https://betteruptime.com/|
|The app has a logging solution configured|Should have 🟡|Monitoring 👀, Backend ⚙️, Frontend 🖥|Recommended: AWS Cloudwatch or https://betterstack.com/logtail|
|The auto-scaling solution is enabled|Should have 🟡|Deployment 🚀, Backend ⚙️||
|The frontend should be checked periodically in terms of performance|Should have 🟡|Frontend 🖥|At least test Core Web Vitals via Chrome Lighthouse|
|Tests and audits should be run in CI/CD pipelines|Should have 🟡|CI/CD 🤖, Security 🔒|Audit packages to limit CVEs, use SNYK CLI to check production docker images|
|The app has an ability to quickly check and deploy hot-fixes to production.|Should have 🟡|Deployment 🚀, CI/CD 🤖||
|The error messages on client doesn’t include stack traces.|Nice to have 🟢|Deployment 🚀, Security 🔒, Frontend 🖥|Remove everything that can give attackers an attack surface.|
|The app has versioning system enabled and has a change log|Nice to have 🟢|Deployment 🚀||
