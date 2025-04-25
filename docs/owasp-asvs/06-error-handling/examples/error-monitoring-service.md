```ts
import * as Sentry from "@sentry/nextjs";

// Initialize Sentry as error monitoring service
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```
