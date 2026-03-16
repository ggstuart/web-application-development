---
type: slide
title: An example middleware function
classes: [burger, gap, auto-one]
---

> Middleware functions receive a context object and a next function.

```js
export async function withLogs(ctx, next) {
    const { request } = ctx;

    // extract the information we need from the request
    const path = new URL(request.url).pathname;
    const method = request.method;    

    // log the request information
    console.log("\n", method, path);

    // complete the request handling to generate a response
    const response = await next(ctx);

    // log the response information
    console.log("status:", response.status);

    // return the response
    return response;    
}
```

```plaintext {linenos=false}
GET /items
logged in as: myUsername
Access granted to protected route
status: 200

GET /styles.css
logged in as: myUsername
[2026-03-15 16:25:50] [GET] /styles.css 304
status: 304

GET /favicon.ico
logged in as: myUsername
Not found!
status: 404
```

> They always return the result of passing the context into the next function.