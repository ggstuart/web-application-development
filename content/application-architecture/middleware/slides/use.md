---
type: slide
title: Using global middleware
classes: [gap]
---

> Using global middleware is simple.
> We just pass our functions into the `use` method.

```js {hl_lines="3-4"}
const app = new ApplicationRouter();

app.use(withLogs);
app.use(withSession);

app.get("*.(css|js)", staticController);

//...
// more routes here
//...

app.get("*", notFoundController);
app.post("*", notFoundController);

export function server(request) {
    return app.handle({ request });
}
```

> However, we can't require a session on every request.