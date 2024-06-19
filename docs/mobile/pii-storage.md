---
title:
---
# The app securely stores user PII

## Description

Securely storing Personally Identifiable Information (PII) is critical for protecting user privacy and complying with regulations.

- **Data Encryption**: Use TLS (Transport Layer Security) to encrypt all data transmitted between the client and server. Ensure that API endpoints use HTTPS to protect data in transit.
- **Encryption at Rest**: Encrypt all sensitive user data stored on servers using strong encryption algorithms. Avoid storing sensitive PII directly on the device. If local storage is necessary, use secure storage solutions, like `react-native-mmkv`, `react-native-keychain` or `expo-secure-store`.
- **User Consent and data minimisation**: Obtain explicit consent from users before collecting their PII. Provide clear and transparent information about how their data will be used and stored. Collect only the minimal amount of PII required for the app’s functionality. Implement features to allow users to access, modify, and delete their PII.
- **Data Breach Response Plan**: Develop and document a data breach response plan to address potential security incidents promptly. Include procedures for notifying affected users and authorities as required by law.
- **Documentation**: Document the procedures for managing, storing and securing the users' PII.