---
title: The certificates and keystores are securely stored
---
# The certificates and keystores are securely stored

## Description

Ensuring that certificates and keystores are securely stored is crucial for the security and integrity of your mobile application.

- **Storage**: Whether you choose App Signing by Google Play or self-signing, keep your upload certificates and app signing certificates for Google Play, as well as distribution certificates, provisioning profiles, and push notification keys for App Store secure.
- **Environment-Specific Storage**: Store certificates and keystores separately for different environments (e.g., development, staging, production) to minimise risk. 
- **Expo**: If using Expo Application Services (EAS), Expo can manage the certificates for you, encrypting them using Google Cloud KMS.
- **Documentation**: Document the procedures for managing and securing certificates and keystores, including encryption, access control, and rotation policies.
- **Disaster recovery**: Develop and document a disaster recovery plan for restoring certificates and keystores in case of data loss or corruption. Ensure that the recovery process is tested regularly.