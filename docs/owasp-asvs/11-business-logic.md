---
title: Ensure that the application processes business logic flows in the correct order
---

# Ensure that the application processes business logic flows in the correct order

## TLDR (must-haves)

  - Business logic flow in correct order
  - Limits on specific actions

## Business Logic Security
- Ensure that the application processes business logic flows in the correct order, step by step.
- Verify that all steps in a business process happen within a realistic timeframe, preventing actions from being submitted too quickly in a way that wouldn’t match human behavior.
- Implement limits on specific business actions or transactions, making sure these restrictions are properly enforced for each user.
- Protect against automated attacks by preventing excessive requests, such as mass data extraction, repeated business logic actions, file uploads, or DoS attempts.
- Apply business logic validation and limits to defend against potential risks and threats.
