---
type: slide
title: HTTP Headers
---

> We have used a few different HTTP response [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers).

| header | example values | Purpose |
|:-------|---------------|---------|
| "Content-Type" | "text/html", "text/plain" | Specifies the media type of the response body. |
| "Content-Length" | "1024", "0" | Indicates the size of the response body in bytes. |
| "Location" | "/", "/login" | Provides the URL for redirection (used with 3xx codes). |
| "Set-Cookie" | "sessionId=abc123; Path=/", "theme=dark; Max-Age=3600" | Instructs the client to set a cookie. |

> Make sure you understand what each of these are for.