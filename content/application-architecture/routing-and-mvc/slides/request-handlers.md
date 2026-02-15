---
type: slide
title: Request Handlers
classes: [one-three, burger, gap]
---

A request handler is a function that takes a request and returns a response.
In these cases, we are exporting them from their own modules.

> A simple example ignores the request.

```js
export function helloWorld(request) {
    return new Response("Hello world");
}
```

> More commonly, return an HTML response.

```js
export function helloHTML(request) {
    const headers = { "content-type": "text/html" }
    return new Response("<p>Hello world</p>", { headers });
}
```

> A handler might also be dynamic, responding to the request more directly

```js
export function helloName(request) {
    const headers = { "content-type": "text/html" }
    const myName = new URL(request.url).searchParams.get('name') || "world";
    return new Response(`<p>Hello ${myName}</p>`, { headers });
}
```

> Its common to create a fallback handler for requests which don't match anything we have

```js
export function notFound(request) {
    const headers = { "content-type": "text/html" }
    const path = new URL(request.url).pathname;
    return new Response(`<p>${path} not found</p>`, { headers, status: 404 });
}
```

Request handlers MUST return a response.
In deno, if your code crashes, as 500 response is automatically returned.