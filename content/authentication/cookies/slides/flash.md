---
type: slide
title: Flash messages
classes: [one-two, burger, gap, tight-quotes, cookies]
---

> Cookies are somewhat limited because they have a specific format.

![just some cookies, chocolate chip](./images/cookies.png)


```js
import { deleteCookie, getCookies, setCookie } from "@std/http/cookie";
import { encodeBase64Url, decodeBase64Url } from "@std/encoding";

export function setFlash(headers, message) { 
    setCookie(headers, {
        name: "flash",
        value: encodeBase64Url(message),
        path: "/",
        httpOnly: true,
        secure: true,       // false for development  
        sameSite: "Strict",
        maxAge: 3600
    });
}

export function getFlash(requestHeaders, responseHeaders) { 
    const { flash } = getCookies(requestHeaders);
    if (flash) {
        deleteCookie(responseHeaders, "flash", { path: "/" });
        return new TextDecoder().decode(decodeBase64Url(flash));       
    }
}

```

> Encoding data allows us to add arbitrary messages into cookies.