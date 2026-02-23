---
type: slide
title: Cross site scripting
classes: [gap, burger, one-two, tight-quotes]
---

Cross site scripting in more detail.

> User enters data - we can't stop this.

```html
<form method="POST">
    <label for="data">A necessary danger: </label>
    <input id="data" name="unavoidable">
</form>
```

> We take the data from the request.

```js
const unavoidable = formData.get("unavoidable");
```

> The problem occurs when we construct our HTML code using the malicious data.

```js
// user data can be HTML containing malicious JavaScript.
const oops = `<script>alert('executing arbitrary code!');</script>`;

// We naively build it into our response.
const content = `<p>Username: ${oops}</p>`
```
> Add the [@std/html](https://jsr.io/@std/html/doc/~/escape) module

```powershell
deno add jsr:@std/html
```

> We can fix this by **escaping** the user provided data

```js
// The escape function will protect us
import { escape } from '@std/html';

const noProblem = `<script>alert('executing arbitrary code!');</script>`;

// escaping malicious user data makes it harmless.
const content = `<p>Username: ${escape(noProblem)}</p>`
```

Users are dangerous, don't trust them.