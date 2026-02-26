---
type: slide
title: Reading cookie data
classes: [one-two, burger, gap, tight-quotes, cookies]
---

> A cookie header will be included with every subsequent request.

![just some cookies, chocolate chip](./images/cookies.png)

```js
import { getCookies } from "@std/http/cookie";

function someRequestHandler({request}) {

    // We can read the cookie header from the request
    const cookies = getCookies(request.headers);

    // The getCookies function turns it into a nice object
    console.log(cookies);   // { myCookie: "chocolateChip" }    

    // Extracting individual cookies is easy
    const myCookie = cookies.myCookie;

    // We can include the data in the response or do anything we want with it.
    const html = `<p>Your cookie is ${myCookie}</p>`;
    const headers = { "content-type": "text/html" };
    return new Response(html, {headers})
}
```

> This allows the browser to maintain state.
