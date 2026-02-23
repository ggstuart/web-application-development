---
type: slide
title: SQL injection
classes: [gap, one-two, burger]
---

SQL injection in detail

>User enters data - we can't stop this.

```html
<form method="POST">
    <label for="data">A necessary danger: </label>
    <input id="data" name="unavoidable">
</form>
```

>We take the data from the request.

```js
const unavoidable = formData.get("unavoidable");
```

> The problem occurs when we construct our SQL code using the malicious data.

```js
const oops = "'); DELETE FROM items; --";

// BAD!
db.exec(`INSERT INTO items (label) VALUES ('${oops}')`);
```

> If we use **prepared statements** then the database engine will sanitise the inputs for us.

```js
const noProblem = "'); DELETE FROM items; --";

// SAFE!
db.prepare(`INSERT INTO items (label) VALUES (?)`).run(noProblem);
```

Protect the database. 
Use prepared statements!