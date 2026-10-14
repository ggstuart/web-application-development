---
type: slide
title: routing
classes: [gap]
params:
    layout:
        rows: auto 1fr auto
---

> In web development a route is a request (e.g. `GET /hello/world`) that maps to a specific request handler function on the server.


```js{hl_lines=[9, 13, 17]}
import { helloWorld } from './handlers/helloWorld.js';
import { helloHTML } from './handlers/helloHTML.js';
import { helloName } from './handlers/helloName.js';
import { notFound } from './handlers/notFound.js';

function server(request) {
    const { pathname } = new URL(request.url);
    
    if(pathname == "/hello/world" && request.method == "GET") {
        return helloWorld(request)
    };
    
    if(pathname == "/hello/html" && request.method == "GET") { 
        return helloHTML(request);
    }
    
    if(pathname == "/hello/name" && request.method == "GET") { 
        return helloName(request);
    }
    return notFound(request);
}
```

>Routing is the mechanism that matches an incoming request (method and path) to an existing route and passes the request on to the appropriate route handler function. 