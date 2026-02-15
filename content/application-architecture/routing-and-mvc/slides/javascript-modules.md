---
type: slide
title: JavaScript Modules
classes: [burger, even, gap]
---

We can use **export** and **import** statements to break our project across multiple files.

> We can explicitly [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) variables, functions (and classes) from a module by adding the **export** keyword to the declaration.


```javascript
export function server() {
    return new Response("hello world");
}
```

> Alternatively, we can add an **export list** to the end of the file like this.
As long as the names we include exist, they will be exported.


```javascript
function server() {
    return new Response("hello world");
}

export { server };
```

> In another JavaScript module, we can use the [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) declaration to access exported variables, functions and classes from another module. 


```javascript
import { server } from './path/to/other-module.js';

Deno.serve(server);
```

In this lecture, we will be carefully considering how to structure our web server.