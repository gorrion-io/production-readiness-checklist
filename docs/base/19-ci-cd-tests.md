---
title: Tests and audits should run in CI/CD pipelines
---

# Tests and audits should run in CI/CD pipelines

## Description

Integrating tests and audits into the CI/CD pipeline is crucial for maintaining code quality, performance, and security.

- **Unit Testing**: Verify that individual components of the application work as expected.
- **Integration Testing**: Ensure that different modules or services work together as expected.
- **End-to-End Testing**: Simulate real user scenarios to ensure the application works as expected in a production-like environment.
- **Static Code Analysis**: Identify potential issues in the codebase such as code smells, bugs, and vulnerabilities.
- **Security Audits**: Identify security vulnerabilities in the codebase or dependencies.
- **Documentation**: Ensure that team members are familiar with testing and auditing processes, and provide documentation and training as needed.

## Proposed tools

### Testing framework
Vitest, Jest
### End-to-end testing
Playwright, Cypress
### Static code analysis
ESLint, Biome, SonarQube
### Security audits
Socket.dev, Snyk, OWASP ZAP, dependency-check
