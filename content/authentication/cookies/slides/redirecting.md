---
type: slide
title: Set flash message on redirect
classes: [one-two, burger, gap, tight-quotes, cookies]
---

> When we redirect, we can optionally pass a flash message to the browser

![just some cookies, chocolate chip](./images/cookies.png)


```js
import { setFlash } from "./flash.js";

export default function redirect(headers, location, flash) { 
    if(flash) setFlash(headers, flash);
    headers.set('location', location);
    return new Response(null, { headers, status: 303 });
}
```

> The message will be passed back as a cookie in the next response.