---
type: slide
title: routing
classes: [gap]
---

> In web development a route is a URL path (e.g. **/hello/world**) that maps to a specific request handler function on the server.


```js
import { helloWorld } from './handlers/helloWorld.js';
import { helloHTML } from './handlers/helloHTML.js';
import { helloName } from './handlers/helloName.js';
import { notFound } from './handlers/notFound.js';

function server(request) {
    const path = new URL(request.url).pathname;
    const method = request.method;
    if(path == "/hello/world" && method == "GET") return helloWorld(request);
    if(path == "/hello/html" && method == "GET") return helloHTML(request);
    if(path == "/hello/name" && method == "GET") return helloName(request);
    return notFound(request);
}
```

>Routing is the mechanism that matches an incoming request (URL and method) to an existing route and passes the request on to the appropriate route handler function. 