---
title: The label element
type: slide
classes: [burger, gap]
params:
    layout:
        cols: 1fr 2fr 2fr
        rows: auto 1fr 1fr auto
---

For accessibility, `<input>` elements should have an associated `<label>` element.


> `<label>` elements can contain associated `<input>` elements.

```html
<form>
    <label>
        User name:
        <input>
    </label>
</form>
```

{{<iframe src="/examples/hypermedia-controls/labels-1.html" width="600" height="200">}}{{</iframe>}}


> Alternatively (and preferably) set the `for` attribute to a matching `id`.

```html
<form>
    <label for="username">User name:</label>
    <input id="username">
</form>
```

{{<iframe src="/examples/hypermedia-controls/labels-1.html" width="600" height="200">}}{{</iframe>}}

> In some use cases, you may not want/need a visible `<label>`.
In this case, you can use an `aria-label` attribute.


```html
<form>
    <input aria-label="search">
    <button type="submit">Search</button>
</form>
```
{{<iframe src="/examples/hypermedia-controls/labels-2.html" width="600" height="200">}}{{</iframe>}}

Make sure you always label your affordances.