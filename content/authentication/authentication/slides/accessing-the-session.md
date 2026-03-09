---
type: slide
title: Accessing the session
classes: [gap, burger, one-three]
---

We need a function to extract the sessionId from the request cookies and a function to find the appropriate session record.

> Overall we are extracting the cookie and grabbing the session record. 
We can do this in `/tools/auth.js`.

```js
import { getCookies } from '@std/http';
import { getSession } from '../models/sessions.js';


export function currentSession(request) {
    const { sessionId } = getCookies(request.headers);
    return sessionId && getSession(sessionId)
}
```

> A model function for performing the query in `/models/sessions.js`.

```js
import { db } from '../tools/db.js';

export function getSession(sessionId) {
    return db.prepare(`
        SELECT * FROM sessions
        WHERE id=:sessionId
    `).get({sessionId});    
}
```

This allows our controllers to know if a user is logged in and if so, to know which user.