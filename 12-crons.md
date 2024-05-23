# CRON jobs should only be handled via one source of truth

## Description

Managing CRON jobs from a single source of truth ensures consistency, reliability, and easier management across environments.

- **Centralised Management**: Use a centralised CRON management tool or service to handle all CRON jobs.
- **Configuration Management**: Store configuration, schedules, commands, and environment-specific settings in version-controlled settings/configuration files.
- **Deployment Integration**: Integrate CRON job configurations with your CI/CD pipelines to automatically deploy and update jobs as part of your application deployment process.
- **Environment Separation**: Clearly separate CRON jobs for different environments within the configuration to prevent cross-environment interference.
- **Monitoring and Alerts**: Implement monitoring for CRON job execution, failures, and performance. Use logging and alerting mechanisms to notify relevant teams in case of issues.
- **Documentation**: Document all CRON jobs, including their schedules, purposes, commands, and any environment-specific considerations. Ensure this documentation is accessible to the entire team. Include troubleshooting guidelines and common issues to help team members quickly resolve problems.
- **Security and Access Control**: Restrict access to the CRON job management system to authorised staff only. Ensure that sensitive information used by CRON jobs are securely stored using environment variables or secrets management services.
- **Auditing and Compliance**: Regularly audit CRON job configurations and executions to ensure compliance with internal policies and regulatory requirements. Maintain logs of all CRON job changes and executions for accountability and troubleshooting.

## Proposed options

### Option 1: Cloud-native solution like AWS Scheduler
### Option 2: Separately deployed service with autoscaling options turned off