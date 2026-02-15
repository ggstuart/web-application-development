---
type: slide
title: controllers
classes: [even, gap, burger]
---

> Controllers are request handlers with more structure. 
> They are the primary decision-making code but they don't care about how data are stored or how the HTML is structured.
> Models and views should only be invoked from controllers (or possibly from tasks).

```javascript
import { loginForm } from '../views/auth.js';
import { render } from '../tools/render.js';

export function loginFormController(request) {
    return render(loginForm);
}
```

```js
import { createItem } from '../models/items.js';
import { redirect } from '../tools/redirect.js';

export async function createItemController(request) {
    const formData = await request.formData();
    const item = formData.get('item');
    createItem(item);
    return redirect("/items");
}
```


> Controllers access data from **models** and generate responses by either rendering **views** or redirecting the browser to another route.