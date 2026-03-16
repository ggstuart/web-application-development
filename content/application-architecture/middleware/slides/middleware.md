---
type: slide
title: middleware
classes: [contain, burger, gap, even, tight-quotes]
---

> Middleware functions wrap around the request handler.

![Middleware are shown as concentric rings around the handler](./images/middleware.svg)

```js
// middleware functions look like this
// The next function will execute the rest of the chain to generate a response
// We always return a response
export async function myMiddleware1(ctx, next) {
    // do things here
    const response = await next(ctx);
    // do things here
    return response;
}

// this one just logs
export function myMiddleware2(ctx, next) {
    console.log("middleware!!");    
    return next(ctx);
}

// This one upgrades the ctx object
export function myMiddleware3(ctx, next) {
    ctx.message = "middleware!!!";
    return next(ctx);
}
```

> Middleware can execute code before and after the request handler completes.