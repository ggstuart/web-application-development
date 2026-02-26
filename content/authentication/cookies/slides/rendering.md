---
type: slide
title: Display flash message when rendering
classes: [one-two, burger, gap, tight-quotes, cookies]
---

> When we render an HTML response, we can include (and delete) the flash message.

![just some cookies, chocolate chip](./images/cookies.png)

```js{class="small", hl_lines=[2, 8, 9, 20]}
import { escape } from "@std/html/entities";
import { getFlash } from "./flash.js";

export default function render(viewFn, data, request, status=200) { 
    const headers = new Headers({"content-type": "text/html"});
    const content = viewFn(data);

    const msg = getFlash(request.headers, headers);
    const flash = `<aside id="flash"><p>${escape(msg)}</p></aside>`;

    const html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>My web application</title>
            </head>
            <body>
                <header><h1>My web application</h1></header>
                <main>
                    ${msg ? flash : ""}
                    ${content}
                </main>
                <footer><p>&copy; application developers</p></footer>
            </body>
        </html>`
    return new Response(html, { headers, status });
}
```

> If there is no message, nothing is included.