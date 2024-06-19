---
title: The backend is accessible only from the client’s domains using CORS
---

# The backend is accessible only from the client’s domains using CORS

## Description

To enhance security by restricting backend access to only the client’s domains, use Cross-Origin Resource Sharing (CORS).

* Specify allowed origins in the server configuration to restrict who can access the resources.
* Define allowed HTTP methods and headers that clients can use to interact with the backend.
* **Testing and Validation**: Verify that the CORS headers are correctly set by testing from both allowed and disallowed origins.
* **Monitoring and Alerts**: Continuously monitor CORS configurations to ensure they remain effective and secure. Implement alerts for any unauthorised CORS attempts or configuration changes.

## Examples

### NestJS

```Typescript
const app = await NestFactory.create(AppModule);
app.enableCors({
  origin: [/<domain.com>$/],
});
```

### Elysia

```Typescript
import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

new Elysia()
  .use(
    cors({
      origin: [/<domain.com>$/],
    })
  )
  .listen(3000);
```

### Hono

```Typescript
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();
app.use(
  "/api/*",
  cors({
    origin: (origin, c) => {
      return origin.endsWith(".domain.com") ? origin : "https://domain.com";
    },
  })
);
```
