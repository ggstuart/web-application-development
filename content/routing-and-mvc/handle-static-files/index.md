---
type: exercise
title: Handling static files
weight: 230
---

In this exercise we will handle the incoming requests for static files and add a stylesheet and a favicon to the application.

<!--more-->



We have seen that our application induces the browser to make requests for both a **favicon.ico** icon and a **styles.css** stylesheet.
These are so-called static files. 
They are not generated dynamically by the server, they are stored on disk as complete files.


To handle these requests, all we need to do is grab the correct file and build it into a response. 


## Add a logo file to the site

> The **favicon.ico** file is being requested because the HTML standard says that if no icon is specified by a document, that the browser should make requests for **favicon.ico**. 
We will add an explicit icon to take control.

Update **layout.js** to include a linked icon at **href="/assets/icon.svg"** and move the stylesheet to **href="/assets/styles.css"**.


```JavaScript{hl_lines="7-8"}
export default function layout(content) {
    return`
<!DOCTYPE html>
<html>
<head>
    <title>My website</title>
    <link rel="stylesheet" href="/assets/styles.css">
    <link rel="icon" href="/assets/icon.svg">
</head>
<body>
    <header>
        <h1>My website</h1>
        <nav>
            <a href="/">home</a>
            <a href="/about">about</a>
        </nav>
    </header>
    <main>        
    ${content}
    </main>
    <footer>
        &copy; My website developers
    </footer>
</body>
</html>`;
}
```

Create a folder called **public** in which all static files can be stored.

Download [icon.svg](/images/icons/icon.svg) and save it in the folder.

> Notice that we are requesting "/assets/icon.svg" but the file is located at "public/icon.svg".
This difference will be handled properly whilst protecting our code from being accessed.

We can also create a stylesheet **public/styles.css**, using the code from the previous example.


```css
body {
    margin: 0;
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100dvh;
    background-color: orange;
    font-size: 1.4em;
    font-family: monospace;
    header, main, footer {
        padding: 1rem;
    }
    header {
        background-color: orangered;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            margin: 0;
        }
        nav a {
            color: inherit;
            text-decoration: none;
            padding: 0.25em 0.5em;
            border-radius: 1em;
            &:hover {
                backdrop-filter: brightness(0.9);
            }
            &.current {
                backdrop-filter: brightness(0.8);
            }
        }
    }
    footer {
        font-size: 0.7em;
        text-align: right;
    }
}
```

## Import the @std/http module from jsr

We will use the [serveDir](https://jsr.io/@std/http/doc/~/serveDir) function from the deno standard library.

We can add the [@std/http module](https://jsr.io/@std/http) into our application as a dependency using this command in the terminal.

```bash
deno add jsr:/@std/http
```

It should very quickly complete the download and you should see a change to the **deno.json** configuration file.

```json{hl_lines="6-8"}
{
    "tasks": {
        "serve": "deno --allow-net ./main.js",
        "dev": "deno --watch --allow-net ./main.js"
    },
    "imports": {
        "@std/http": "jsr:@std/http@^1.1.4"
    }
}
```

> A **deno.lock** file is also created. 
This contains the precise versions of all nested dependencies so the project can easily be installed on another machine.
It needs to be committed into version control along with **deno.json**.

## Give permission to read files from disk

We also need to give permissions to allow our script to read data from disk. 
In this case, we will constrain the permission to just the new public folder.

```json{hl_lines="3-4"}
{
    "tasks": {
        "serve": "deno --allow-net --allow-read=./public ./main.js",
        "dev": "deno --watch --allow-net --allow-read=./public ./main.js"
    },
    "imports": {
        "@std/http": "jsr:@std/http@^1.1.4"
    }
}
```

> Again, if you have given allow-all permissions, this is not necessary.

## Implement a staticController function

To add a new capability (serving static files) we will create a new controller.
The new controller will delegate the task to the **serveDir** function, passing the request and a configuration object which specifies
1. **fsRoot** - the location on the filesystem to look for the requested file.
1. **urlRoot** - the url root to remove from the path before looking.


**controllers/static.js**

```JavaScript
import { serveDir } from "@std/http";

export function staticController(ctx) { 
    const { request } = ctx;
    return serveDir(request, {
        fsRoot: "public",
        urlRoot: "assets"
    })
} 
```

## Route requests to the new controller

Finally, to actually pass requests to the new static controller, we need to check to see whether the pathname matches the required pattern.

```JavaScript{hl_lines=[3, "12-14"]}
import { aboutController } from "./controllers/about.js";
import { homeController } from "./controllers/home.js";
import { staticController } from "./controllers/static.js";
import { notFoundController } from "./controllers/notFound.js";
import layout from "./layout.js";

function server(request) {
    const url = new URL(request.url);
    const ctx = { request, url, layout };
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

    return notFoundController(ctx);
}

Deno.serve(server);
```

You should see that the site now has a stylesheet and icon as expected.

> Sometimes you might need to do a "hard refresh" in your browser with **Ctrl + Shift + R** to force a request for previously missing static files.

