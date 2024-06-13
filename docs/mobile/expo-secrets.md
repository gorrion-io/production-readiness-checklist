---
title: Do not rely on Expo Secrets
---
# Do not rely on Expo Secrets

## Description

When using the Expo-managed workflow, it's important to avoid storing environment variables in Expo Secrets. Instead, you should use the standard `.env` file. If you're using EAS Update, the variables will be fetched from the `.env` file, not from Expo Secrets. If the variables exist only in EAS Secrets, they will be empty during the update process, which could potentially lead to discrepancies.