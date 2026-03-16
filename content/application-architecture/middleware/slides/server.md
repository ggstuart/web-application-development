---
type: slide
title: Use it like this
classes: [even, burger, gap]
---

> We create an instance of our application and register some routes.

```js
import ApplicationRouter from "./tools/router.js";

const app = new ApplicationRouter();

app.get("*.(css|js)", staticController);
app.get("/register", registrationFormController);
app.post("/users", createUserController);
app.get("/login", loginFormController);
app.post("/sessions", loginController);
app.post("/logout", logoutController);

app.get("/", homeController);
app.get("/items", itemsController);
app.post("/items", createItemController);
app.post("/items/:itemId/delete", deleteItemController);

app.get("*", notFoundController);
app.post("*", notFoundController);

```
```js

export function server(request) {
    const path = new URL(request.url).pathname;
    const method = request.method;
    console.log("\n", method, path);

    const session = currentSession(request);
    const ctx = { request, session };

    return app.handle({request, session});
}
```

> The router handles all incoming requests.