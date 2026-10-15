---
title: Post requests
type: exercise
weight: 3
---

In this exercise we will update our server to handle POST requests which the user can issue by submitting a simple form.

<!--more-->

At the end of the previous exercise, each item in our list was a resource with its own URL.
Now we will allow users to create new items.
When a new item is created, the server will direct the browser to the new resource.

## Update our model to allow items to be created

Our model only has functions that allow data to be read. 
Let's add a simple function that allows an item to be added to the list.

Each new item needs a unique id.
We will keep a simple counter, `nextId`, which starts after the last of our example items and increases every time an item is created.

**models/items.js**

```JavaScript{hl_lines=[7, "17-22"]}
const items = [
    { id: 1, label: "apples" },
    { id: 2, label: "bananas" },
    { id: 3, label: "cherries" }
];

let nextId = items.length + 1;

export function getItems() { 
    return items;
}

export function getItemById(id) {
    return items.find(item => item.id === id);
}

export function createItem(label) {
    const item = { id: nextId, label };
    nextId += 1;
    items.push(item);
    return item;
}
```

> The function returns the new item so that whoever calls it knows the new item's id.

Our task is to provide the user with the ability to give us a label for a new item and we must pass it into this function.

## Create a form for the user interaction

We need a hypermedia control to allow the user to make a POST request to the server with the label of the new item.

> Using a POST request implies a change of state, we are sending data to be processed by the server. 

### Create the basic form with an input

Since we want a [POST][post] request, we need a [form]. 
We can test the form in GET mode (the default) before we change it to POST.

At a minimum, we need a form with an input and a button (to submit the form).

**views/items.js**

```JavaScript{hl_lines=["7-10"]}
export default function itemsView(ctx) { 
    const { data: { items } } = ctx;
    return `
    <section>
        <h2>Items list</h2>

        <form>
            <input>
            <button>create</button>
        </form>

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

You should see a form, but it isn't obvious what it does, especially for assistive technology.

### Add labelling to the input

We can add a label and link it to the input.

> The button already has content inside. 
> If you think it needs more explanation then add an aria-label attribute to the button.

**views/items.js**

```JavaScript{hl_lines=["8-9"]}
export default function itemsView(ctx) { 
    const { data: { items } } = ctx;
    return `
    <section>
        <h2>Items list</h2>

        <form>
            <label for="new">New item</label>
            <input id="new">
            <button>create</button>
        </form>

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

Notice that submitting the form does nothing but add a question mark (?) to the url. 
This is because we are not sending any data with the request.

### Add a name attribute to the data we want to send

If we want to attach data to the request, we need to use the [name][input name] attribute.

**views/items.js**

```JavaScript{hl_lines=[9]}
export default function itemsView(ctx) { 
    const { data: { items } } = ctx;
    return `
    <section>
        <h2>Items list</h2>

        <form>
            <label for="new">New item</label>
            <input id="new" name="label">
            <button>create</button>
        </form>

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

Now submitting the form should add the data into the URL as part of the GET request (e.g. `/items?label=kiwi`).

### Set the request method to POST

Finally, we need to update the request method to POST.
This will cause the data to be passed in the request body.

**views/items.js**

```JavaScript{hl_lines=[7]}
export default function itemsView(ctx) { 
    const { data: { items } } = ctx;
    return `
    <section>
        <h2>Items list</h2>

        <form method="POST">
            <label for="new">New item</label>
            <input id="new" name="label">
            <button>create</button>
        </form>

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

The final version of the form is now sending data to the server.
The problem now is that the server is ignoring it.

## Handle the POST request

When the `POST /items` request comes into the server, we are currently handling it with the **itemsController** function.
We need to expand our server logic to react differently depending on whether the request is `GET /items` or `POST /items`.

First, can we detect the request method?

**controllers/items.js**

```JavaScript{hl_lines=["8-9"]}
import { getItemById, getItems } from "../models/items.js";
import { NotFoundError } from "../tools/errors.js";
import render from "../tools/render.js";
import itemView from "../views/item.js";
import itemsView from "../views/items.js";

export function itemsController(ctx) { 
    const { request } = ctx;
    console.log(request.method);
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

You should see, if you click the **items** link in the menu, that the terminal shows "GET" and if you submit the form, the terminal shows "POST".

### Log the incoming data

We can adapt the function to detect the POST request and extract the [form data][Request.formData] from the incoming request.

> Notice the [async]/[await] keywords here.
> Don't worry too much about these. 
> By default the server only consumes the first line of the request. 
> In order to access the request body we must **await** it being fully consumed.
> This task is performed asynchronously because a request body can, in principle, include gigabytes of data and should not block the server.
> Therefore, we need to mark the function as an asynchronous function using the **async** keyword. 

**controllers/items.js**

```JavaScript{hl_lines=[7, "9-12"]}
import { getItemById, getItems } from "../models/items.js";
import { NotFoundError } from "../tools/errors.js";
import render from "../tools/render.js";
import itemView from "../views/item.js";
import itemsView from "../views/items.js";

export async function itemsController(ctx) { 
    const { request } = ctx;
    if (request.method == "POST") {
        const formData = await request.formData();
        console.log(formData);
    }
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

Submit the form in the browser and you should see the formData object is logged.

```plaintext {linenos=false}
FormData { label: "kiwi" }
```

### Add the new item to our model

We can also extract the specific value we want using the [FormData][formdata] API.
Specifically we will use the [get][FormData.get] method.

So, let's pass the value directly into the new **createItem** function.

**controllers/items.js**

```JavaScript{hl_lines=[1, 11]}
import { createItem, getItemById, getItems } from "../models/items.js";
import { NotFoundError } from "../tools/errors.js";
import render from "../tools/render.js";
import itemView from "../views/item.js";
import itemsView from "../views/items.js";

export async function itemsController(ctx) { 
    const { request } = ctx;
    if (request.method == "POST") {
        const formData = await request.formData();
        createItem(formData.get("label"));
    }
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

When handling a POST request, we now call **createItem** and then call **getItems**, so we should see the new item added to the resulting HTML page.
The new item links to its own page (e.g. */items/4*), just like the others.

> ### Idempotency
> At this point it is crucial to understand why we have introduced a problem.
When a user reloads a webpage in the browser (e.g. using **CTRL + R**) the browser reissues the last request.
This is fine if the request is a GET request. 
This is what we mean by [idempotent].
It doesn't matter if a GET request is repeated multiple times, the result is the same.
>
> A POST request is not guaranteed to be idempotent. 
> In particular, a successful POST request that succeeds in changing the server state is very likely to change the state every time it is issued.
> This is the situation we are currently in.
>
> The solution is simple and you should make sure you understand it.


Look in the developer tools network tab and consider what is happening. 
When the POST request is issued, the new item is successfully added to our items array.
The response that comes back is an HTML response with the new data.
If the user then reloads the page, the same request is issued with the same data in the request body.
A new item is added every time we do this because we are POSTing to the collection, this makes sense.
 
### Return a redirect response

To fix the problem, we must avoid returning an HTML response when we update our items model with the new item.
Rather, we should return a response with a [**303**][303] status code. 
The 303 status means "See Other" and is associated with a [**Location**][location] header which points to a location where the result of the operation can be seen.

> When the web browser receives a response with a 303 status code, it will look for the location header and make a GET  request to the specified resource.

In practice, this means we need a **redirect** helper function we can call whenever we want to return a 303 response with a location header.

**tools/redirect.js**

```JavaScript
export default function redirect(location) { 
    const headers = new Headers({ location });
    return new Response(null, { headers, status: 303 });
}
```

The new function accepts a single argument which is added as the value of the location header.

Where should we redirect the browser?
Our new item is a resource with its own URL, so the obvious place is the new item's page.
This is why **createItem** returns the new item, we can use its id to build the URL.

**controllers/items.js**

```JavaScript{hl_lines=[3, "12-13"]}
import { createItem, getItemById, getItems } from "../models/items.js";
import { NotFoundError } from "../tools/errors.js";
import redirect from "../tools/redirect.js";
import render from "../tools/render.js";
import itemView from "../views/item.js";
import itemsView from "../views/items.js";

export async function itemsController(ctx) { 
    const { request } = ctx;
    if (request.method == "POST") {
        const formData = await request.formData();
        const item = createItem(formData.get("label"));
        return redirect(`/items/${item.id}`);
    }
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

> This is HATEOAS in action. 
> The response to our POST request tells the browser where the new resource can be found.

You should now see, in the network panel of the developer tools, that there are two requests.
The first is for `POST /items` and it carries the form data in the body.
The server responds with a `303` redirecting to the new item (e.g. `/items/4`).
So the browser then makes a second request for `GET /items/4` and the server provides the HTML response which is rendered in the viewport. 

Try reloading the page in the browser. 
You should see the issue has been resolved because we are just reissuing the harmless (and idempotent) `GET /items/4` request.

## Create a new controller for the new action

To clean up the code a bit we can split the controller into two operations, one for displaying the list of items and one for adding a new item to the list. 

**controllers/items.js**

```JavaScript{hl_lines=["8-13"]}
import { createItem, getItemById, getItems } from "../models/items.js";
import { NotFoundError } from "../tools/errors.js";
import redirect from "../tools/redirect.js";
import render from "../tools/render.js";
import itemView from "../views/item.js";
import itemsView from "../views/items.js";

export async function createItemController(ctx) { 
    const { request } = ctx;
    const formData = await request.formData();
    const item = createItem(formData.get("label"));
    return redirect(`/items/${item.id}`);
}

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

This will also help us to move all the routing logic into **main.js** where it belongs.
We can simply interrogate the method property of the incoming request.

**main.js**

```JavaScript{hl_lines=[3, "30-35"]}
import { aboutController } from "./controllers/about.js";
import { homeController } from "./controllers/home.js";
import { createItemController, itemController, itemsController } from "./controllers/items.js";
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
            if (request.method == "GET") {
                return itemsController(ctx);
            }
            if (request.method == "POST") {
                return createItemController(ctx);
            }
        }

        if (itemPattern.test(url)) {
            ctx.params = itemPattern.exec(url).pathname.groups;
            return itemController(ctx);
        }

        throw new NotFoundError();
    } catch (error) {
        if (error instanceof NotFoundError) {
            return notFoundController(ctx);
        }
        throw error;
    }
}

Deno.serve(server);
```

> Any other request method on */items* falls through to the `throw new NotFoundError();` at the end of the try block, just like any other unmatched request.

## Conclusions

We have seen how form elements can be used to allow users to submit data to our application.
A simple pattern is emerging whereby we create a new controller function to handle each interaction we want to enable. 
In this case we added the ability to submit a new item to our list.
We needed to extract the form data from the request, pass it into our model and return a `303: See Other` response using our new **redirect** function to direct the browser to the newly created resource.

> We are trusting the user completely.
> Try submitting an empty label, or a label containing some HTML such as `<b>hello</b>`.
> The label is inserted directly into our HTML, which is a serious security problem known as cross-site scripting (XSS).
> We will deal with validation and XSS in the next unit.

[post]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST
[form]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form
[input name]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#name
[async]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
[await]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
[Request.formData]: https://developer.mozilla.org/en-US/docs/Web/API/Request/formData
[formdata]: https://developer.mozilla.org/en-US/docs/Web/API/FormData
[FormData.get]: https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
[idempotent]: https://developer.mozilla.org/en-US/docs/Glossary/Idempotent
[303]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/303
[location]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Location
