---
type: slide
title: web APIs
classes: [one-two, burger, gap]
---

Web APIs are defined by W3C/WHATWG as standard interfaces built on top of the ECMAScript core language.

> The URL API allows us to conveniently and accurately parse data from the URL

```Javascript
const url = new URL("https://www.dmu.ac.uk/study/courses/courses.aspx");

console.log(url.protocol) // https:
console.log(url.host)     // www.dmu.ac.uk
console.log(url.pathname) // /study/courses/courses.aspx
```

> With the **Headers** and **Response** APIs we can create HTTP responses with custom content, headers and status code.

```JavaScript
const content = `
<!doctype html>
<html>
    <head><title>My App</title></head>
    <body><h1>hello world</h1></body>
</html>`
const headers = new Headers({"content-type": "text/html"});
const status = 200
const response = new Response(content, {headers, status});
```

Browsers and JavaScript runtimes implement these APIs.