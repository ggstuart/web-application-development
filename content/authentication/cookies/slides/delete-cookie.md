---
type: slide
title: Deleting cookies
classes: [one-two, burger, gap, tight-quotes, cookies]
---

> We can delete a cookie from the browser by sending another header.

![just some cookies, chocolate chip](./images/cookies.png)

```js
import { deleteCookie } from "@std/http/cookie";

function someRequestHandler({request}) {

    // We need to create some headers for the response
    const headers = new Headers({
        "content-type": "text/html"
    });

    // The deleteCookie function adds a header with the necessary instructions
    deleteCookie(headers, "myCookie", { path: "/" });

    // The browser will respond by deleting the cookie.
    const html = `<p>This response deletes a cookie.</p>`;
    const headers = { "content-type": "text/html" };
    return new Response(html, {headers})
}
```

> In this way, our server can control the browser cookie state.
> Although users can clear their cookies.
