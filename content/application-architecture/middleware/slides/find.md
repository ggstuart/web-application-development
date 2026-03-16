---
type: slide
title: Array.prototype.find
classes: [tight-quotes, gap]
---

> Arrays have a [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method which returns the first element that returns true from the given callback function.

```js
const items = ['apples', 'bananas', 'cherries'];
items.find(item => item.length > 6); // 'bananas'
items.find(item => item[1] == "h"); // 'cherries'
```

> Our routing logic can use this same pattern to find a matching route.

```js
const routes = [
    {path: "/", method: "GET", handler: homeController}, 
    {path: "/items", method: "GET", handler: itemsController}, 
    {path: "/items", method: "POST", handler: addItemController}, 
];

function server(request) {
    const path = new URL(request.url).pathname;
    const route = routes.find(route => {
        route.path == path && route.method = request.method
    });
    return route.handler(request) // passing request to correct controller
}
```

> To implement this, we need to maintain an array of routes..