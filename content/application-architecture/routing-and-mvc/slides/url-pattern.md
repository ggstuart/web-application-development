---
type: slide
title: URL Pattern API
classes: [burger, one-two, gap]
---

We need to distinguish between collections (e.g. **/items**) and individual resources (e.g. **/items/123**) with dynamic values.

> The [URLPattern](https://developer.mozilla.org/en-US/docs/Web/API/URLPattern) API allows us to create patterns that match our application routes.

```js
const itemsPattern = new URLPattern({ pathname: "/items" });
const itemPattern = new URLPattern({ pathname: "/items/:itemId" });
```

> We can test the patterns against URLs.

```js
// check to see if our url matches
itemsPattern.test("http://localhost:8000/items");    // true
itemsPattern.test("http://localhost:8000/items/25"); // false
itemPattern.test("http://localhost:8000/items");     // false
itemPattern.test("http://localhost:8000/items/25");  // true
```

> We can extract the (so-called **named groups**) from URLs.

```js
// extract matching groups
const match = itemPattern.exec("http://localhost:8000/items/25");
const { itemId } = match.pathname.groups; // "25"
```

This gives us our primary key data and allows us to create a URL for each individual record. 