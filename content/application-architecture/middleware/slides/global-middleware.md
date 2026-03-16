---
type: slide
title: Implementing global middleware
classes: [tight-quotes, gap]
---

> Middleware implementation relies on a recursive pattern

```js {class="small", hl_lines=[4, "9-11", "13-18", 25]}
export default class ApplicationRouter { 
    constructor() { 
        this.routes = [];
        this.middleware = [];
    }

    //...

    use(middlewareFn) {
        this.middleware.push(middlewareFn);
    }

    chain(ctx, middleware, handler) {
        if (middleware.length == 0) return handler(ctx);
        const [nextMiddleware, ...remainingMiddleware] = middleware;
        const next = (ctx) => this.chain(ctx, remainingMiddleware, handler);
        return nextMiddleware(ctx, next);
    }

    handle(ctx) { 
        const { request } = ctx;
        const finder = ({ method, pattern }) => request.method == method && pattern.test(request.url);
        const { pattern, handler } = this.routes.find(finder);
        ctx.params = pattern.exec(request.url).pathname.groups;
        return this.chain(ctx, this.middleware, handler);
    }
}
```

> calling the `use` method adds middleware to the chain.  