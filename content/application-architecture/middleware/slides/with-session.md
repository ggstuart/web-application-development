---
type: slide
title: Upgrading the context
classes: [gap, even, burger, merge-first-code]
---

> Middleware functions can add information to the context.
Here we add the session to the context.

```js
export function withSession(ctx, next) { 
    const { request } = ctx;
    ctx.session = currentSession(request);
    console.log(ctx.session ? `logged in as: ${ctx.session.username}` : "Not logged in");
    return next(ctx);
}
```

```js
export function requiresSession(ctx, next) { 
    const { session } = ctx;
    if (!session) {
        console.log("Access denied to protected route");
        const errors = {
            credentials: "Login to access this page"
        }        
        return render(loginFormView, {errors}, ctx, 401);
    }
    console.log("Access granted to protected route");        
    return next(ctx);
}
```

```js
export function excludesSession(ctx, next) {
    const { session, headers } = ctx;
    if (session) {
        console.log("Access denied to protected route");        
        return redirect("/", "log out first", headers);
    }
    console.log("Access granted to protected route");
    return next(ctx);
}
```

> They can also shortcut the request and return a response early.