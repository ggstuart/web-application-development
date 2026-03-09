---
type: slide
title: routing
classes: [gap, burger]
---

> Plumbing the core set of controllers is pretty simple.

```js
import { loginFormController, loginController, logoutController } from './controllers/sessions.js';
import { registrationFormController, createUserController } from './controllers/users.js';

export function server(request) {
    const url = new URL(request);    
    const path = url.pathname;
    const method = request.method;
    console.log("\n", method, path);

    // users
    if (path == "/register" && method == "GET") return registrationFormController(ctx);
    if (path == "/users" && method == "POST") return createUserController(ctx);

    // sessions
    if (path == "/login" && method == "GET") return loginFormController(ctx);
    if (path == "/logout" && method == "POST") return logoutController(ctx);
    if (path == "/sessions" && method == "POST") return loginController(ctx);

}

```

> We need some custom logic to implement this properly.