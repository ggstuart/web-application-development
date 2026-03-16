---
type: slide
title: Route-based middleware
classes: [gap]
---

> To apply middleware selectively we need to pass functions when we register routes.

```js {hl_lines=[5, 7, 15, 17]}
export default class ApplicationRouter { 

    //...

    register(method, pattern, handler, ...middleware) { 
        if (typeof pattern == "string") pattern = new URLPattern({ pathname: pattern });
        this.routes.push({ method, pattern, handler, middleware });
    }

    //...

    handle(ctx) { 
        const { request } = ctx;
        const finder = ({ method, pattern }) => request.method == method && pattern.test(request.url);
        const { pattern, handler, middleware } = this.routes.find(finder);
        ctx.params = pattern.exec(request.url).pathname.groups;
        const chain = [...this.middleware, ...middleware]
        return this.chain(ctx, chain, handler);
    }
}
```

> Combining the global middleware with the route-based middleware gives a flexible system.