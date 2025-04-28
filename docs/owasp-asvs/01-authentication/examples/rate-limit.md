Example rate limit middleware

```ts
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "node:crypto";

const rateLimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(5, "10 s"), // 5 requests in 10 seconds
});

const VISITOR_COOKIE = "visitor_id";

const getIdentifier = (req: NextApiRequest, res: NextApiResponse): string => {
  const ip = req.headers["x-forwarded-for"] ?? req.headers["x-real-ip"];

  const ipIdentifier = Array.isArray(ip) ? ip[0] : ip;

  if (ipIdentifier) {
    return `ip:${ipIdentifier}`;
  }

  // If no IP is found, use a custom cookie
  const cookies = req.cookies;
  if (cookies && cookies[VISITOR_COOKIE]) {
    return `cookie:${cookies[VISITOR_COOKIE]}`;
  }

  const visitorId = randomUUID();

  const cookieValue = `${VISITOR_COOKIE}=${visitorId}; HttpOnly; Path=/; Max-Age=${
    60 * 60 * 24 * 7
  }${process.env.NODE_ENV === "production" ? "; Secure; SameSite=strict" : ""}`;
  res.setHeader("Set-Cookie", cookieValue);

  return `cookie:${visitorId}`;
};

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;

// Custom rate limiting middleware
const loginRateLimit = (handler: Handler): Handler => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (process.env.NODE_ENV !== "production") {
      return handler(req, res);
    }

    const identifier = getIdentifier(req, res);

    const { success } = await rateLimit.limit(identifier);

    if (!success) {
      return res.status(429).json({ error: "Too Many Requests" });
    }

    return handler(req, res);
  };
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: "Login successful" });
};

export default loginRateLimit(handler);

// example script to test rate limiting
import http from "k6/http";

export const options = {
  // configuration for spike test
  stages: [
    { duration: "10s", target: 10 }, // traffic to 50 requests per second
    { duration: "1s", target: 0 }, // no traffic
  ],
};

export default () => {
  const urlRes = http.get(process.env.NEXT_PUBLIC_API_URL + "/api/login");
};
```
