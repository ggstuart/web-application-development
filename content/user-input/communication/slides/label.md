---
title: The label element
type: slide
classes: [two-in-middle]
order: 2
---

> For accessibility, `<input>` elements should have an associated `<label>` element.

```html
<form>
    <label for="username">User name:</label>
    <input id="username">
</form>
```

{{<iframe src="iframes/labels-1.html" width="600" height="200">}}{{</iframe>}}


```html
<form>
    <input aria-label="search">
    <button type="submit">Search</button>
</form>
```
{{<iframe src="iframes/labels-2.html" width="600" height="200">}}{{</iframe>}}

> In some use cases, you may not want/need a visible `<label>`.
In this case, you can use an `aria-label` attribute.
