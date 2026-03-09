---
type: slide
title: Logging out
classes: [gap, one-three]
---


> The `logoutController` in `./controllers/sessions.js`.
```js{hl_lines=7}
import { logout } from "../tools/auth.js";
import { redirect } from "../tools/redirect.js";

export function logoutController(ctx) {
    const { session } = ctx;
    const headers = new Headers();
    if(session) logout(headers, session.id);
    return redirect("/", "logged out", headers);
}
```

> The `logout` function in `./tools/auth.js`.

```js{hl_lines=2}
export function logout(headers, sessionId) {
    deleteSession(sessionId);
    deleteCookie(headers, "sessionId", { path: "/" });
}
```

> The `deleteSession` function from `./models/sessions.js`.

```js
export function deleteSession(sessionId) {
    db.prepare(`DELETE FROM sessions WHERE id=:sessionId`).run({ sessionId });
}
```

