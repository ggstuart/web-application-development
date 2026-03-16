---
type: slide
title: Controllers can also be middleware
classes: [gap]
---

> Our post handlers can be simplified by adding them to the middleware chain.

```js {hl_lines=[2, 4, 7, 9]}
export function itemsController(ctx) {
    const { session, errors } = ctx;
    const items = getItems(session.username);
    return render(itemsView, { items, errors, session }, ctx);
}

export function createItemController(ctx, next) {
    const { session, headers, isValid, validated } = ctx;
    if (!isValid) return next(ctx);
    createItem({...validated, username: session.username});
    return redirect("/items", `item '${validated.label}' created`, headers);
}
```

> The `createItemController` checks validation data and if validation fails, it simple hands over to the next middleware to render the errors in the form.
If validation passes, it performs the action and returns a redirect.