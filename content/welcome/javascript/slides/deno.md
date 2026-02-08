---
type: slide
title: Deno
classes: [contain, auto-one, burger, img-25vh, gap]
---

> [Deno](https://deno.com) is a modern (2018) open-source, standards-compliant runtime environment for executing JavaScript without a web browser.

![Ryan Dahl](./images/ryan-dahl.png)


```JavaScript
// Run a web server by passing a server function to the non-standard Deno.serve API

Deno.serve(server)

// A server function
// - accepts a request object as an argument (here we are extracting the url from the request)
// - always returns a response object (in this case, we have two different responses)

```


![New Deno logo](https://upload.wikimedia.org/wikipedia/commons/c/c3/Deno_Logo_2024.svg)

```Javascript
function server(request) {
    const url = new URL(request.url);
    const headers = new Headers();
    headers.set("content-type", "text/html");
    if(url.pathname == "/") return new Response("<h1>Home page</h1>", { headers });
    return new Response("<h1>Not found</h1>", { headers, status: 404 })
}
```

> Deno was created by Ryan Dahl as a response to his [Node.js design regrets](https://youtu.be/M3BM9TB-8yA?si=nhyqYFcVosyzrevs), .

<!-- ![Old Deno logo](https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg) -->

