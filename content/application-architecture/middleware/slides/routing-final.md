---
type: slide
title: Routing multiple controllers
classes: [gap, tight-quotes]
---

> We can add controllers as middleware.

```js {hl_lines=[8, 10, 15]}
const app = new ApplicationRouter();

app.use(withLogs);
app.use(withSession);

app.get("*.(css|js)", staticController);
app.get("/register", registrationFormController, excludesSession);
app.post("/users", registrationFormController, validate(userSchema), createUserController);
app.get("/login", loginFormController, excludesSession);
app.post("/sessions", loginFormController, excludesSession, validate(userSchema), loginController);
app.post("/logout", logoutController, requiresSession);

app.get("/", homeController);
app.get("/items", itemsController, requiresSession);
app.post("/items", itemsController, requiresSession, validate(newItemSchema), createItemController);
app.post("/items/:itemId/delete", deleteItemController, requiresSession);

app.get("*", notFoundController);
app.post("*", notFoundController);
```

> Now our application configuration determines the overall behaviour of our application.