---
title: Limit the access to production DB for the team.
---
# Limit the access to production DB for the team.
## Description
- Ensure that team members are granted the minimum level of access necessary to perform their job functions. This principle, known as the principle of least privilege, minimises the risk of unauthorised access to personal data.
- Implement role-based access control to define and manage access permissions based on job roles. Each role should have access only to the data and resources required for their specific tasks.
- Regularly review access permissions to ensure they are still appropriate and necessary. Remove access for users who no longer need it.
- Implement auditing and logging to track access to the production database. Regularly review logs to detect and respond to any unauthorised access attempts.
- Maintain separate environments for development, testing, and production. Developers and testers should not have direct access to the production database.
- Use secure access methods, such as VPNs and/or secure shell (SSH) connections, to access the production database. Avoid using insecure methods like plain text connections.
- Prepare a "break-a-glass" procedure for accessing the production database in terms of errors.