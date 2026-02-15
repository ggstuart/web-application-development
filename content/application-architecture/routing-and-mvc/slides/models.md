---
type: slide
title: Models
classes: [burger, gap, two-one]
---

Models handle data.
They provide functions for controllers to use.

> Our model files encapsulate knowledge of the SQL table structure.
**There should be no SQL code in our controllers or views.**

> Inside the models folder, we will have modules for each aspect of our data.
This might mean one file per database table.


```js
import { db } from './db.js';

export function getItems() {
    return db.prepare("SELECT * FROM items;").all();
}

export function createItem(item) {
    return db.prepare(
        "INSERT INTO items (name) VALUES (?);"
    ).run(item);
}
```

```plaintext
MyApplication
    └── models
          ├── items.js
          ├── lists.js
          ├── sessions.js
          └── users.js
```

> This neutral interface means controllers don't need to know where or how the data are stored.
All they need to know is what functions to call.