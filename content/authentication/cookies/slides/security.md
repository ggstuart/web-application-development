---
type: slide
title: security
classes: [one-two, burger, gap, tight-quotes, cookies]
---

> To harden up our security, we should set some options.

![just some cookies, chocolate chip](./images/cookies.png)

```js
import { setCookie } from "@std/http/cookie";

const headers = new Headers();

setCookie(headers, {
    name: "myCookie",
    value: "chocolateChip",
    path: "/",
    httpOnly: true,     // prevents JS access (XSS mitigation)
    secure: true,       // HTTPS only (but not suitable for us)
    sameSite: "Strict", // CSRF protection
    maxAge: 3600
});
```

> In development, we are serving over plain HTTP so we can't use `secure` cookies. 
