---
type: slide
title: Tooling
classes: [even, gap, burger]
---

> Convenience functions can be reused by many controllers.
e.g. for generating HTML or redirect responses.

```js
export function render(viewFn, data={}, status=200) {
    const content = viewFn(data);
    const html = `
    <!doctype html>
    <html>
        <head><title>My Application</title></head>
        <body>
            <header><h1>My Application</h1></header>
            <main>${content}</main>
        </body>
    </html>
    `
    const headers = new Headers();
    headers.set("content-type", "text/html");
    return new Response(html, { headers, status })
}
```

```javascript
export function redirect(location) {
    const status = 303;
    const headers = new Headers();
    headers.set("location", location);
    return new Response(null, { headers, status });
}
```

> These can get more complex as necessary as your application grows.