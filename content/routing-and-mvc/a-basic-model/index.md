---
title: Adding a simple model
type: exercise
---

In this exercise we will complete the MVC pattern by adding a simple model and rendering data in a view.

<!--more-->

As a very simple example, we will work with an extremely simple list of items.

## Add a new page

The first thing we will do is add a new page into which we can render our simple model data. 
We can follow the familiar pattern of creating a view, a controller and then hooking the controller into the routing logic and adding a link into our page layout so we can access the new page.

### Create a view

Create a simple view ready to include some data.
As usual, a view just returns a static HTML string. 
We will update this later to make it dynamic.

**views/items.js**
```JavaScript
export default function itemsView() { 
    return `
    <section>
        <h2>Items list</h2>
    </section>
    `;
}
```

### Create a controller

Create a standard controller, just like the home and about controllers.
All it does is render the new view.
We will update this later to interact with the model.

**controllers/items.js**

```JavaScript
import render from "../tools/render.js";
import itemsView from "../views/items.js";

export function itemsController(ctx) { 
    ctx.view = itemsView;
    return render(ctx);
}
```

### Update the routing logic 

Import the controller into **main.js** and add a conditional block to serve the new page at */items*.

```JavaScript{hl_lines=[3, "25-27"]}
import { aboutController } from "./controllers/about.js";
import { homeController } from "./controllers/home.js";
import { itemsController } from "./controllers/items.js";
import { notFoundController } from "./controllers/notFound.js";
import { staticController } from "./controllers/static.js";
import layout from "./layout.js";

function server(request) {
    const url = new URL(request.url);
    console.log(url.pathname);
    const ctx = { request, url, layout, data: {} };
    
    if (url.pathname.startsWith("/assets")) {        
        return staticController(ctx);
    }

    if (url.pathname == "/") {
        return homeController(ctx);
    }

    if (url.pathname == "/about") {
        return aboutController(ctx);
    }

    if (url.pathname == "/items") {
        return itemsController(ctx);
    }

    return notFoundController(ctx);

}

Deno.serve(server);
```

### Add a link into the page layout

Finally, we can update the page layout to include a new link.

```JavaScript{hl_lines=16}
export default function layout(content) { 
    return `
<!DOCTYPE html>
<html>
    <head>
        <title>My Website</title>
        <link rel="icon" href="/assets/icon.svg">
        <link rel="stylesheet" href="/assets/styles.css">
    </head>
    <body>
        <header>
            <h1>My Website</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/items">Items</a>
            </nav>
        </header>
        <main>
        ${content}
        </main>
        <footer>
            <p>&copy; the developers</p>
        </footer>
    </body>
</html>
`;
}
```

You should now be able to see the new page in the browser.
Nothing unusual so far.

## Create a model

Now we need to create a model so we can integrate some data into the new view.
We will use a very basic model to demonstrate the principle, just an array of simple strings.

Create a new folder **models** containing a file **items.js**.

**models/items.js**

```JavaScript
const items = [
    "apples",
    "bananas",
    "cherries"
];

export function getItems() { 
    return [...items];
}
```

We have initialised some very simple example data and exported a function which gives us access to a copy of the data (preventing users of the function from editing the raw data).


## Integrate the view data

To access the data and pass it into our view, we need to update the whole execution path from the context, the controller, the render function and our view function.

### Update our context with a data property

First, we will add a data property onto the context object.
This is where our controllers can put data.
It will be where our views will find data. 

Initialise it with an empty object.

**main.js**

```JavaScript{hl_lines=11}
import { aboutController } from "./controllers/about.js";
import { homeController } from "./controllers/home.js";
import { itemsController } from "./controllers/items.js";
import { notFoundController } from "./controllers/notFound.js";
import { staticController } from "./controllers/static.js";
import layout from "./layout.js";

function server(request) {
    const url = new URL(request.url);
    console.log(url.pathname);
    const ctx = { request, url, layout, data: {} };
    
    if (url.pathname.startsWith("/assets")) {        
        return staticController(ctx);
    }

    if (url.pathname == "/") {
        return homeController(ctx);
    }

    if (url.pathname == "/about") {
        return aboutController(ctx);
    }

    if (url.pathname == "/items") {
        return itemsController(ctx);
    }

    return notFoundController(ctx);

}

Deno.serve(server);
```

### Grab the data in the controller

We can now update our controller to use the **getItems** function and save the result onto the context data.


```JavaScript{hl_lines=[1, 6]}
import { getItems } from "../models/items.js";
import render from "../tools/render.js";
import itemsView from "../views/items.js";

export function itemsController(ctx) { 
    ctx.data.items = getItems();
    ctx.view = itemsView;
    return render(ctx);
}
```

> Accessing nested properties like this is a code smell.
> If you prefer, you could destructure the data object out from the context and set **data.items** in two lines of code. 
> ```JavaScript
> const { data } = ctx;
> data.items = getItems();
> ```
> The result is the same.

### Pass the data into the view

Now, the context has the necessary data attached but our **render** function doesn't pass the context to the view.
It's easy to update the function.

**tools/render.js**

```JavaScript{hl_lines=4}
export default function render(ctx) { 
    const { view, layout, status } = ctx;
    const headers = new Headers({ "content-type": "text/html" });    
    const content = view(ctx);
    const html = layout(content);
    return new Response(html, { headers, status });
}
```

Now every view function has access to the full context.
All we need to do is update our new view to render the attached data.

### Use the data from within the view

In our items view we extract the items array from the context with a nested destructuring and use the **itemToHTML** helper function to map each item string to an `<li>` element.
The resulting array is joined with some spacing and inserted into a `<ul>` element in the result.


**views/items.js**
```JavaScript{hl_lines=["6-8", "13-15"]}
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
    return `<li>${item}</li>`;
}
```

> This is a simple example of the kind of string manipulation we will use all the time to generate repeated chunks of similar HTML.

With this in place, you should see that the items page now includes a list of items generated from the data.

## Conclusions

We have added an important capability to our application. 
We updated the context with a slot for view data and our render function now passes the context through into views so we have a general purpose infrastructure for designing views which can build HTML around our application data.

We have seen how we can create a model to provide access to data from within our controllers.
Its relatively easy to build a new page which relies on some kind of data.
However, the simple model we built doesn't allow the user to add, edit or delete items. 

In the next exercise we will look at how to get user input into the application so we can trigger these kinds of actions.

> We are taking it one step at a time.
> Eventually, we will connect this simple model with an SQLite database.
