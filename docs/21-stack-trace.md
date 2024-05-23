---
title: The error messages on client don’t include stack traces
---

# The error messages on client don’t include stack traces

## Description

Ensuring that error messages on the client side do not include stack traces is important for security and user experience.

- **Generic Error Messages**: Display user-friendly and non-technical error messages to users that do not expose internal details of the application.
- **Logging Details Internally**: Log detailed error information, including stack traces, internally (e.g., to the console, or a logging service) for developer debugging without exposing them to the end-users.
- **Graceful Error Handling**: Ensure that the application gracefully handles errors, displays appropriate feedback, and provides options for users to recover or seek support.
