---
type: slide
title: Examples of using the session
classes: [gap, one-three]
---


> We can pick up the session in our `server.js` and pass it in as context to all controllers.

```js {hl_lines="7-9"}
export function server(request) {
    const url = new URL(request);    
    const path = url.pathname;
    const method = request.method;
    console.log("\n", method, path);

    // Get the session and build it into a context object
    const session = currentSession(request);
    const ctx = { request, session };

    if(path == "/" && method == "GET") return homeController(ctx);
    if(path == "/register" && method == "GET") return registrationFormController(ctx);
    if(path == "/login" && method == "GET") return loginFormController(ctx);
    if(path == "/users" && method == "POST") return createUserController(ctx);
    if(path == "/sessions" && method == "POST") return loginController(ctx);
    if(path == "/logout" && method == "POST") return logoutController(ctx);
    return notFoundController(ctx);
}
```

> We can pass the entire context to the render function and optionally provide the session to the view function as data.

```js
export homeController(ctx) {
    const { session } = ctx;
    return render(homeView, {session}, ctx);
}
```

