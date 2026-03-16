---
type: slide
title: A simple application router
classes: [tight-quotes, gap]
---

> The router [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) handles an array of routes.
> Each route matches a pattern and a method to a handler function.

```js
export default class ApplicationRouter { 
    constructor() { 
        this.routes = [];
    }

    register(method, pattern, handler) { 
        if (typeof pattern == "string") pattern = new URLPattern({ pathname: pattern });
        this.routes.push({ method, pattern, handler });
    }

    get(...args) { this.register("GET", ...args); }
    post(...args) { this.register("POST", ...args); }

    handle(ctx) { 
        const { request } = ctx;
        const finder = ({ method, pattern }) => request.method == method && pattern.test(request.url);
        const {pattern, handler} = this.routes.find(finder);
        ctx.params = pattern.exec(request.url).pathname.groups;
        return handler(ctx);
    }
}
```

> The **handle** function hands over to the first route that matches the request.