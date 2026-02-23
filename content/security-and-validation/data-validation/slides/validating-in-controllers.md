---
type: slide
title: Controllers need to validate data
---

> It is the responsibility of the controller to decide how to respond to the incoming request.

```js
export function itemsController() {
    const items = getItems();
    return render(itemsView, { items });
}

export async function createItemController({ request }) {
    const formData = await request.formData();
 
    // some kind of complex validation code goes here. 
    const { isValid, errors, validated } = validateSchema(formData, newItemSchema);

    // With this data, we can keep the code simple.
    if (!isValid) {
        const items = getItems();
        return render(itemsView, {items, errors}, 400);
    }
    createItem(validated);
    return redirect("/");
}
```

> If the request contains invalid data, we need to present the user with feedback.