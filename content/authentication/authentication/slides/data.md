---
type: slide
title: Authentication data
classes: [burger, gap, one-three]
---

We need to store our users and our sessions.


> Our user interface gathers credentials.

```js
import { maxLength, minLength, required } from "../tools/validation.js";

export const userSchema = {
    username: {
        validators: [required, minLength(4), maxLength(20)],
    },
    password: {
        validators: [required, minLength(6), maxLength(20)]
    }
}

```

> The users table has a *username* and a *hashedPassword*.
We don't store passwords directly.

```sql
CREATE TABLE users (
    username TEXT PRIMARY KEY,
    hashedPassword TEXT NOT NULL
);
```

> When a user logs in, we create a session record for the user with a unique id.

```sql
CREATE TABLE sessions (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    FOREIGN KEY (username) REFERENCES users(username)
) 
```

These simple tables can be extended (e.g. adding an *isAdmin* or *role* column to the user table)