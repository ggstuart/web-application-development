---
type: slide
title: cookies
classes: [one-two, burger, gap, tight-quotes, cookies]
---

> Cookies are a mechanism for passing name, value pairs to the browser via a header.

![just some cookies, chocolate chip](./images/cookies.png)

```js
import { setCookie } from "@std/http/cookie";

function someRequestHandler(request) {

    // We need to create some headers for the response
    const headers = new Headers({
        "content-type": "text/html"
    });    

    // We can set a cookie on the headers
    // The setCookie function does all the work.
    setCookie(headers, {
        name: "myCookie",
        value: "chocolateChip",
        path: "/"
    });

    // We can then just include it with the response.
    const html = "<p>This response sets a cookie.</p>";
    return new Response(html, { headers });
}
```

> The browser will store the data and send it back in every request under the given `path`.
