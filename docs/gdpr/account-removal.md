---
title: Account removal by request
---
# Account removal by request
## Description

Ensuring that users can request the removal of their accounts and personal data is a key requirement of GDPR compliance.

- **Data removal or anonymisation**: All Personally Identifiable Information need to be removed or anonymised, including email address. The list of PIIs [should be documented](./pii-documentation.md).
- **UI for removal request should be accessible**: Ensure the UI is WCAG-compliant and can be easily found in the application, e.g. on the account settings page or profile details page.
- **Confirmation and Communication**: Inform users about the expected time frame for processing their account deletion request. Send a confirmation message or email to users once their account deletion request has been processed. Include details about what data has been deleted and offer contact information for further assistance if needed. The request should be processed without undue delay and, in any event, within one month of its receipt.
- **Logs**: Encrypt logs both in transit and at rest to protect against unauthorised access. Restrict access to logs containing PII to authorised personnel only. Ensure that logs containing PII can be anonymised or removed.

There are a couple of accessibility checkers in the form of Web Browser Extensions:
- EqualWeb Web Accessibility Checker
- axe DevTools