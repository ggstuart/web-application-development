---
title: Input types
type: slide
classes: [two-in-middle]
order: 4
---


> By default `<input>` elements are generic text fields but they can be modified with the `type` attribute.

```html
<form>
    <label for="number">number: </label>
    <input id="number" type="number" value="90">
</form>
```

{{<iframe src="iframes/number.html" width="600" height="200">}}{{</iframe>}}


```html
<form>
    <label for="range">range: </label>
    <input id="range" type="range" value="75">
</form>
```
{{<iframe src="iframes/range.html" width="600" height="200">}}{{</iframe>}}


```html
<form>
    <label for="color">color: </label>
    <input id="color" type="color" value="#bb0060">
</form>
```

{{<iframe src="iframes/color.html" width="600" height="200">}}{{</iframe>}}

> There are many input field types available. Some of these were introduced with HTML5.