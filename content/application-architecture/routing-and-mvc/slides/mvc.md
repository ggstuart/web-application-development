---
type: slide
title: The MVC pattern
classes: [one-two, gap, burger]
---

The model, view, controller pattern is a tried and tested approach to maintain a separation of concerns between different aspects of our application.

> Models are responsible for interfacing with the data persistence mechanism.

```js
import { db } from './db.js';
export function getItems() {
    return db.prepare("SELECT * FROM items;").all();
}
```

> Views are responsible for generating the user interface.
In this case that means functions that return HTML strings.

```js
const itemToHTML = (item) => `<li>${item.label}</li>`;

export function itemList(items) {
    const listItems = items.map(itemToHTML);
    return `<ul>${listItems.join("")}</ul>`;
}
```

> Controllers make decisions to generate a response.
They mediate between the model and the view. 

```js
import { getItems } from '../models/items.js';
import { itemsList } from '../views/items.js';

export function itemsController(request) {
    const items = getItems();
    const html = itemsList(items);
    const headers = {"content-type": "text/html"};
    return new Response(html, { headers })
}

```

Controllers are request handlers with a bit more structure.
They respond to user interaction (i.e. requests) and decide how to generate a response.
They are supported by models and views which handle the details.