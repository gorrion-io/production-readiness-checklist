---
title: The app is hosted on a production-grade cloud solution
---

# The auto-scaling solution is enabled

## Description

Implementing auto-scaling ensures the application can handle varying loads by automatically adjusting resources based on demand.

- **Cloud Provider and Auto-Scaling Service**: Choose a cloud provider that supports auto-scaling, such as AWS, using AWS Auto Scaling.
- **Correct setup**: Define the resources to be auto-scaled, such as virtual machines, containers, or database instances.
- **Scaling Policies and Triggers**: Define scaling policies based on key metrics such as CPU utilisation, memory usage, request rates, or custom metrics that are relevant to your application’s performance. Configure the minimum and maximum number of instances or resources to ensure the application can scale appropriately while containing costs.
- **Real-Time Monitoring**: Utilise monitoring tools to track auto-scaling activities and resource utilisation.
- **Notifications**: Set up alerts to notify the operations team about scaling events, such as adding or removing instances, via preferred communication channels.
- **Testing and Optimisation**: Conduct load tests to validate the effectiveness of auto-scaling policies and ensure that the application can handle peak loads smoothly.
- **Cost Management**: Monitor and manage costs associated with auto-scaling to ensure that scaling activities do not lead to unexpected expenses.
- **Documentation and Maintenance**: Document all configurations, policies, and scaling procedures. Ensure that the documentation is accessible to development and operations teams for reference and troubleshooting. Regularly review and update scaling policies to adapt to changing workloads and business requirements.
- **Security Considerations**: Ensure that new instances or resources created during scaling comply with security policies and configurations, such as network security groups, firewalls, and access controls. Implement security best practices to protect auto-scaled resources from potential vulnerabilities.
