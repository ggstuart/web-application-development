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
const itemToHTML = (item) => `<li>${item.label}</li>`;

export function itemList(items) {
    const listItems = items.map(itemToHTML);
    return `
    <section aria-labelledby="item-heading">
        <h2 id="item-heading">Items</h2>
        <ul>${listItems.join("")}</ul>
    </section>`;
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