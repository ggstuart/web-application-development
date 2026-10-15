---
title: Items as resources
type: exercise
weight: 2
---

In this exercise we will give each item in our list its own page, with its own URL.

<!--more-->

[HATEOAS] (Hypermedia as the Engine of Application State) is the idea that a client should be able to discover everything it can do by following the links and controls in the responses it receives.
For this to work, the things our application knows about need to be **resources**, each identified by a unique URL.

At the moment our items only exist as entries in a list on the */items* page.
We will convert each item into a resource with its own URL (e.g. */items/1*) and link to it from the list.

> We will identify our items using simple numeric ids.
> A slug (e.g. */items/apples*) would work equally well, the important thing is that each URL identifies exactly one resource.

Along the way we will meet the [URLPattern] API for extracting data from a URL, and we will start handling errors in a more structured way.

## Add a page for a single item

We will start by following the familiar pattern of creating a view and a controller and hooking them into our routing logic.
To begin with, the page will just show some placeholder content.

### Create a view

**views/item.js**

```JavaScript
export default function itemView(ctx) {
    return `
    <section>
        <h2>Item</h2>
        <p>This is an item</p>
        <p>
            <a href="/items">Back to items list</a>
        </p>
    </section>
    `
}
```

### Create a controller

Our new controller is closely related to the existing **itemsController**, so we will add it to the same file.

**controllers/items.js**

```JavaScript{hl_lines=[3, "12-15"]}
import { getItems } from "../models/items.js";
import render from "../tools/render.js";
import itemView from "../views/item.js";
import itemsView from "../views/items.js";

export function itemsController(ctx) { 
    ctx.data.items = getItems();
    ctx.view = itemsView;
    return render(ctx);
}

export function itemController(ctx) {
    ctx.view = itemView;
    return render(ctx);
}
```

### Update the routing logic

For now, we can use a simple string comparison to serve the page at */items/1*.

**main.js**

```JavaScript{hl_lines=[3, "29-31"]}
import { aboutController } from "./controllers/about.js";
import { homeController } from "./controllers/home.js";
import { itemController, itemsController } from "./controllers/items.js";
import { staticController } from "./controllers/static.js";
import { notFoundController } from "./controllers/notFound.js";
import layout from "./layout.js";

function server(request) {
    const url = new URL(request.url);
    const ctx = { request, url, layout, data: {} };
    console.log(url.pathname);

    if(url.pathname.startsWith("/assets/")) {
        return staticController(ctx);
    }

    if (url.pathname == "/") {
        return homeController(ctx)
    }

    if (url.pathname == "/about") {
        return aboutController(ctx);
    }

    if (url.pathname == "/items") {
        return itemsController(ctx);
    }

    if (url.pathname == "/items/1") {
        return itemController(ctx);
    }

    return notFoundController(ctx);
}

Deno.serve(server);
```

Visit [http://localhost:8000/items/1][item 1] and you should see the placeholder page.

> Try visiting */items/2*. 
> You will get the **Not Found** page because our routing logic only matches */items/1*.
> We clearly can't add a conditional block for every item.

## Match item URLs with URLPattern

We need to match any URL of the form */items/something* and extract the "something" so our controller knows which item was requested.
This is exactly what the [URLPattern] API is for.

We create a pattern once, as a module-level variable, and use it inside our conditional block.

**main.js**

```JavaScript{hl_lines=[8, "31-34"]}
import { aboutController } from "./controllers/about.js";
import { homeController } from "./controllers/home.js";
import { itemController, itemsController } from "./controllers/items.js";
import { staticController } from "./controllers/static.js";
import { notFoundController } from "./controllers/notFound.js";
import layout from "./layout.js";

const itemPattern = new URLPattern({ pathname: "/items/:itemId" });

function server(request) {
    const url = new URL(request.url);
    const ctx = { request, url, layout, data: {} };
    console.log(url.pathname);

    if(url.pathname.startsWith("/assets/")) {
        return staticController(ctx);
    }

    if (url.pathname == "/") {
        return homeController(ctx)
    }

    if (url.pathname == "/about") {
        return aboutController(ctx);
    }

    if (url.pathname == "/items") {
        return itemsController(ctx);
    }

    if (itemPattern.test(url)) {
        ctx.params = itemPattern.exec(url).pathname.groups;
        return itemController(ctx);
    }

    return notFoundController(ctx);
}

Deno.serve(server);
```

The pattern `/items/:itemId` contains a named group (`:itemId`) which will match any single path segment.

- The `test()` method returns `true` if the [URL] matches the pattern.
- The `exec()` method returns an object describing the match. 
The `pathname.groups` property contains the values of our named groups, e.g. `{ itemId: "1" }`.

We add these values to the context as `ctx.params` before passing it on to the controller.
The controller (and the view) can then access them just like any other data in the context.

> Notice that `main.js` is responsible for extracting generic data from the URL.
> It doesn't need to know what the controller will do with it.

Update the view to show the `itemId` on the page.

**views/item.js**

```JavaScript{hl_lines=[2, 6]}
export default function itemView(ctx) {
    const { params: { itemId } } = ctx;
    return `
    <section>
        <h2>Item</h2>
        <p>This is item ${itemId}</p>
        <p>
            <a href="/items">Back to items list</a>
        </p>
    </section>
    `
}
```

Now try [/items/1][item 1], */items/2* and even */items/abc*.
Every one of these URLs is matched and the page shows the requested `itemId`.

> The value extracted from the URL is always a string.
> We will need to remember this when we look up the item.

## Give our items explicit ids

Our items are currently simple strings, they have no ids.
We could use the array index as an id, but that would be fragile (e.g. deleting an item would change the ids of other items).
Instead, let's convert each item into an object with an explicit `id` and a `label`.

**models/items.js**

```JavaScript{hl_lines=["2-4"]}
const items = [
    { id: 1, label: "apples" },
    { id: 2, label: "bananas" },
    { id: 3, label: "cherries" }
];

export function getItems() { 
    return items;
}
```

Our list view expects strings, so we need to update it in the same step or it will render `[object Object]`.

**views/items.js**

```JavaScript{hl_lines=[14]}
export default function itemsView(ctx) { 
    const { data: { items } } = ctx;
    return `
    <section>
        <h2>Items list</h2>
        <ul>
            ${items.map(itemToHTML).join("\n\t\t\t")}
        </ul>
    </section>
    `;
}

function itemToHTML(item) {
    return `<li>${item.label}</li>`;
}
```

The items page should look exactly the same as before.

## Link the list to the item pages

This is where HATEOAS starts to pay off.
Rather than expecting the user to know (or guess) the URL for each item, we include a link to each item resource in the list.

**views/items.js**

```JavaScript{hl_lines=["14-16"]}
export default function itemsView(ctx) { 
    const { data: { items } } = ctx;
    return `
    <section>
        <h2>Items list</h2>
        <ul>
            ${items.map(itemToHTML).join("\n\t\t\t")}
        </ul>
    </section>
    `;
}

function itemToHTML(item) {
    return `<li>
    <a href="/items/${item.id}">${item.label}</a>
    </li>`;
}
```

Visit the items page and click the links.
The client only needs to know about */items*, everything else can be discovered by following links.

## Load the item from the model

Now we can render the real item data.
First, add a function to the model to retrieve a single item by its id.
We use the array [find][Array.find] method which returns the first matching element, or `undefined` if there is no match.

**models/items.js**

```JavaScript{hl_lines=["11-13"]}
const items = [
    { id: 1, label: "apples" },
    { id: 2, label: "bananas" },
    { id: 3, label: "cherries" }
];

export function getItems() { 
    return items;
}

export function getItemById(id) {
    return items.find(item => item.id === id);
}
```

Now update the controller to extract the `itemId` from the params, look up the item and add it to the view data.
Since our ids are numbers, we convert the string from the URL using [Number].

**controllers/items.js**

```JavaScript{hl_lines=[1, "13-15"]}
import { getItemById, getItems } from "../models/items.js";
import render from "../tools/render.js";
import itemView from "../views/item.js";
import itemsView from "../views/items.js";

export function itemsController(ctx) { 
    ctx.data.items = getItems();
    ctx.view = itemsView;
    return render(ctx);
}

export function itemController(ctx) {
    const { params: { itemId } } = ctx;
    const item = getItemById(Number(itemId));
    ctx.data.item = item;
    ctx.view = itemView;
    return render(ctx);
}
```

Finally, update the view to render the item.

**views/item.js**

```JavaScript{hl_lines=[2, "5-6"]}
export default function itemView(ctx) {
    const { data: { item } } = ctx;
    return `
    <section>
        <h2>${item.label}</h2>
        <p>This is item ${item.id}</p>
        <p>
            <a href="/items">Back to items list</a>
        </p>
    </section>
    `
}
```

Visit [/items/2][item 2] and you should see **bananas**.

## Handle missing items

Try visiting [/items/99][item 99].
The server responds with a **500** error and you should see an error in the terminal because `item` is `undefined` and we tried to read `item.label`.

A request for a resource that doesn't exist should get a **404 Not Found** response.
Our controller is the place where we discover that the item doesn't exist, but our **main.js** module is responsible for deciding which controller handles the request.
We can connect the two by raising an error in the controller and handling it in **main.js**.

### Create a custom error

Create a new module with a custom error class.

**tools/errors.js**

```JavaScript
export class NotFoundError extends Error {}
```

> This is a [class] declaration.
> The `extends` keyword means our **NotFoundError** is a special kind of [Error], it behaves exactly like a normal error but it has its own type.
> This means we can distinguish it from other errors when we catch it.

### Throw the error in the controller

**controllers/items.js**

```JavaScript{hl_lines=[2, "16-18"]}
import { getItemById, getItems } from "../models/items.js";
import { NotFoundError } from "../tools/errors.js";
import render from "../tools/render.js";
import itemView from "../views/item.js";
import itemsView from "../views/items.js";

export function itemsController(ctx) { 
    ctx.data.items = getItems();
    ctx.view = itemsView;
    return render(ctx);
}

export function itemController(ctx) {
    const { params: { itemId } } = ctx;
    const item = getItemById(Number(itemId));
    if (!item) {
        throw new NotFoundError(`Item ${itemId} not found`);
    }
    ctx.data.item = item;
    ctx.view = itemView;
    return render(ctx);
}
```

> The [throw] statement stops the function immediately and passes the error back up to whoever called it.

### Catch the error in main.js

Wrap the routing logic in a [try...catch] block.
If a **NotFoundError** is thrown, we return the **Not Found** page. 
Any other error is rethrown, since we don't know how to handle it.

**main.js**

```JavaScript{hl_lines=[7, 16, "37-42"]}
import { aboutController } from "./controllers/about.js";
import { homeController } from "./controllers/home.js";
import { itemController, itemsController } from "./controllers/items.js";
import { staticController } from "./controllers/static.js";
import { notFoundController } from "./controllers/notFound.js";
import layout from "./layout.js";
import { NotFoundError } from "./tools/errors.js";

const itemPattern = new URLPattern({ pathname: "/items/:itemId" });

function server(request) {
    const url = new URL(request.url);
    const ctx = { request, url, layout, data: {} };
    console.log(url.pathname);

    try {
        if(url.pathname.startsWith("/assets/")) {
            return staticController(ctx);
        }

        if (url.pathname == "/") {
            return homeController(ctx)
        }

        if (url.pathname == "/about") {
            return aboutController(ctx);
        }

        if (url.pathname == "/items") {
            return itemsController(ctx);
        }

        if (itemPattern.test(url)) {
            ctx.params = itemPattern.exec(url).pathname.groups;
            return itemController(ctx);
        }
    } catch (error) {
        if (error instanceof NotFoundError) {
            return notFoundController(ctx);
        }
        throw error;
    }

    return notFoundController(ctx);
}

Deno.serve(server);
```

> The [instanceof] operator checks whether the error is a **NotFoundError**.
>
> Most of the changes in **main.js** are just indentation.

Now [/items/99][item 99] and */items/abc* should both show the **Not Found** page with a 404 status code.

## Conclusions

Each item in our application is now a resource with its own URL and the items list links to each of them.
A user (or any other client) can navigate the application simply by following the links in our responses.

We used the [URLPattern] API to match a family of URLs with a single pattern and to extract the `itemId`.
Our **main.js** adds this to the context as generic data before passing it on to the controller.

We also introduced a simple pattern for handling errors.
The controller decides *that* something has gone wrong by throwing an error, and **main.js** decides *how* to respond.
We will use this same pattern again when we build a router.

In the next exercise we will add a form so users can create new items.

[HATEOAS]: https://en.wikipedia.org/wiki/HATEOAS
[URLPattern]: https://developer.mozilla.org/en-US/docs/Web/API/URLPattern
[URL]: https://developer.mozilla.org/en-US/docs/Web/API/URL
[Array.find]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
[class]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[Error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[throw]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
[try...catch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
[instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[item 1]: http://localhost:8000/items/1
[item 2]: http://localhost:8000/items/2
[item 99]: http://localhost:8000/items/99
