---
title: The app should have a consistent versioning system
---
# The app should have a consistent versioning system

## Description

Implementing a consistent versioning system for your mobile application is crucial. It helps in tracking changes and maintaining transparency for users and store reviewers.

- **Update the build version on both platforms**: Keep the major version of the app in sync between the platforms.
- **Use subversions only in case of unsuccessful store push/review**: The subversion, i.e. `1.0.0 (1)` → `1.0.0 (2)` should only be used when the store push/review is unsuccessful.
- **Changelog and documentation**: Document the versioning system. Use the battle-tested solutions, e.g. semantic versioning. Keep the changelog, which you can then reuse in stores.