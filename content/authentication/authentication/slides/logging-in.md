---
type: slide
title: Logging in
classes: [gap, burger, even]
---

Logging in involves creating a session record and passing the UUID PRIMARY KEY as a cookie in the response. 

> Create a session record and set a `sessionId` cookie.

> A UUID is generated for each new session record.

```js
import { createSession } from '../models/sessions.js';

export function login(headers, username) {
    
    // Create session record and get the sessionId
    const sessionId = createSession(username);

    // Add a session cookie to the response
    setCookie(headers, {
        name: "sessionId",
        value: sessionId,
        path: "/"
    });
}
```


```js
import { db } from '../tools/db.js';

export function createSession(username) {
    const sessionId = crypto.randomUUID(); // generate

    db.prepare(` 
        INSERT
        INTO sessions (id, username)
        VALUES (:sessionId, :username)`
    ).run({ sessionId, username });        // store

    return sessionId;                      // return
}
```

> this is `./tools/auth.js`

> this is `./models/sessions.js`


The UUID is not something a user can guess.
This should **only** happen when we have confirmed the credentials.