---
type: slide
title: Danger points
classes: [one-two, gap, burger]
---

So, how can data do harm to my application?

> SQL injection is where users are able to execute arbitrary SQL code on our database.
This can lead to data being lost or stolen, including potentially sensitive user data.

```js
// user data can be malicious SQL fragments like this
const malicious = "'); DELETE FROM items; --";

// If we execute the code, we lose our data.
const query = `INSERT INTO items (label) VALUES ('${malicious}');`;
db.exec(query);
```

> Cross-site scripting is where users are able to inject arbitrary HTML code into the response.
> This potentially allows for user-submitted JavaScript code to be executed on user machines.

```js
// user data can be HTML containing malicious JavaScript.
const malicious = `<script>alert('executing arbitrary code!');</script>`;

// We naively build it into our response.
const content = `<p>Username: ${malicious}</p>`

// If we return an HTML response, it will execute on the users machine.
const headers = new Headers({"content-type": "text/html"});
return new Response(content, { headers });
```

We need to protect our application from malicious code.