---
title: The app has properly configured and validated deep linking
---
# The app has properly configured and validated deep linking

## Description

Deep linking enables users to quickly access specific content or features within your app, leading to enhanced user experience and increased engagement.

- **Apple App Site Association File**: ensure the `apple-app-site-association` file is accessible from the `.well-known` directory, has the proper Application ID and is returned as content-type `application/json`
- **Android Asset Links**:  ensure the `assentlinks.json` file is accessible from the `.well-known` directory, and has the proper package name and fingerprint taken from Google Play Console
- **Test on Device/Simulator**: Use tools like `adb` and `xcrun` to test deep linking locally.
- **Online validators**: Tools like [yURL](https://yurl.chayev.com/) can help you test your domain settings.
