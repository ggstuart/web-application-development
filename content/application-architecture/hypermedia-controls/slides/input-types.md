---
title: Input types
type: slide
classes: [block-span-2, tight-quotes, three-two, burger, gap]
---


> By default `<input>` elements are generic text fields but they can be modified with the `type` attribute.

```html
<form>
    <label for="number">number: </label>
    <input id="number" type="number" value="90">
</form>
```

{{<iframe src="examples/number.html" width="600" height="200">}}{{</iframe>}}


```html
<form>
    <label for="range">range: </label>
    <input id="range" type="range" value="75">
</form>
```
{{<iframe src="examples/range.html" width="600" height="200">}}{{</iframe>}}


```html
<form>
    <label for="color">color: </label>
    <input id="color" type="color" value="#bb0060">
</form>
```

{{<iframe src="examples/color.html" width="600" height="200">}}{{</iframe>}}

> There are many input field types available. Some of these were introduced with HTML5.