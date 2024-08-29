---
title: Limit the access to production DB for the team.
---
# Limit the access to production DB for the team.
## Description
- Ensure that team members are granted the minimum level of access necessary to perform their job functions. This principle, known as the least privilege principle, minimises the risk of unauthorised access to personal data. This point is applicable for all the 3rd party services, Cloud Service Provider accounts, but also to the production database.
- Implement role-based access control to define and manage access permissions based on job roles. Each role should have access only to the data and resources required for their specific tasks.
- Regularly review access permissions to ensure they are still appropriate and necessary. Remove access for users who no longer need it.
- Implement auditing and logging to track access to the production database. Regularly review logs to detect and respond to any unauthorised access attempts.
- Maintain separate environments for development, testing, and production. Developers and testers should not have direct access to the production database.
- Use secure access methods, such as VPNs and/or secure shell (SSH) connections, to access the production database. Avoid using insecure methods like plain text connections.
- Prepare a "break-a-glass" procedure for accessing the production database in terms of errors.

The auditing and logging, limiting the DB access and "break-a-glass" procedure are the part of the guidelines that will be an ideal solution from the perspective of GDPR.

In real world, development teams can be really small and from the business continuity perspective, every member of the team should have access to production database.

If the client requests full security in this matter, the "break-a-glass" procedure can be scripted as follows:
1. Create a key pair.
2. Using IaC, spin up a bastion instance with SSH access using the created key pair.
3. The bastion instance should be only accessible from a single IP address and only on an SSH port (22).
4. The bastion instance should be configured to access the production database.
5. The SSH tunnel should be created to access the production DB instance.
6. After the necessary operations are performed on the production DB instance, the instance and key pair should be removed as quickly as possible.
7. There should be a CRON job that cleans up the bastion instances and key pairs after some inactivity period.