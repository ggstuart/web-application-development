---
type: slide
title: Using route-based middleware
classes: [gap, tight-quotes]
---

> Middleware can now be passed to specific routes.

```js {hl_lines=["7-11", "14-16"]}
const app = new ApplicationRouter();

app.use(withLogs);
app.use(withSession);

app.get("*.(css|js)", staticController);
app.get("/register", registrationFormController, excludesSession);
app.post("/users", createUserController, validate(userSchema));
app.get("/login", loginFormController, excludesSession);
app.post("/sessions", loginController, excludesSession, validate(userSchema));
app.post("/logout", logoutController, requiresSession);

app.get("/", homeController);
app.get("/items", itemsController, requiresSession);
app.post("/items", createItemController, requiresSession, validate(newItemSchema));
app.post("/items/:itemId/delete", deleteItemController, requiresSession);

app.get("*", notFoundController);
app.post("*", notFoundController);

```

> Each route is defined as a chain of actions.