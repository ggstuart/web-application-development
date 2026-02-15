---
type: slide
title: Views
classes: [burger, gap, two-one]
---

Views handle HTML.
They also provide functions for controllers to use.

> Our user interface will be built on the server as HTML strings.
Our view files encapsulate knowledge of the user interface structure.
**There should be no HTML code in our controllers or models.**

> Inside the views folder, we will have modules for each aspect of our user interface.
This might mean one file per URL.

```js
export function loginForm() {
    return `
    <form action="/login" method="POST">
        <label for="username">Username: </label>
        <input id="username" name="username" required minlength="8">
        <label for="password">Password: </label>
        <input id="password" 
            name="password"
            type="password"
            required
            minlength="12">
        <button>login</button>
    </form>`;
}
```

```plaintext
MyApplication
    └── views
          ├── items.js
          ├── lists.js
          └── auth.js
```

> This neutral interface means controllers don't need to know how the user interface works.
All they need to know is what functions to call.