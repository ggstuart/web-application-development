---
type: slide
title: context object
classes: [tight-quotes]
---

> The **routing context** object allows for a more general purpose controller interface.

```js
import { itemsController, itemController, createItemController } from './controllers/items.js';
import { notFoundController } from './controllers/notFound.js';

const itemsPattern = new URLPattern({pathname: "/items"});
const itemPattern = new URLPattern({pathname: "/items/:itemId"});

function server(request) {
    const { method, url } = request;
    
    if(itemsPattern.test(url) && method == "GET") return itemsController({ request });
    
    if(itemsPattern.test(url) && method == "POST") return createItemController({ request });

    if(itemPattern.test(url) && method == "GET") {
        const { itemId } = itemPattern.exec(url).pathname.groups;
        return itemController({ request, itemId });
    };
    
    return notFound(request);
}
```

>Rather than taking a request as an argument, controllers (and eventually our router and middleware) can take an object which has the request as a property.