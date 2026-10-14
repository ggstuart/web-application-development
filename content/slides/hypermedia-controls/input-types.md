---
title: Input types
type: slide
classes: [tight-quotes, burger, gap]
params: 
    layout:
        cols: 3fr 2fr
        rows: auto 1fr 1fr 1fr auto
---


> `<input>` elements always submit text, but they can be modified with the `type` attribute for ergonomics.

```html
<form>
    <label for="number">number: </label>
    <input id="number" type="number" value="90">
</form>
```

{{<iframe src="/examples/hypermedia-controls/number.html" width="600" height="200">}}{{</iframe>}}


```html
<form>
    <label for="range">range: </label>
    <input id="range" type="range" value="75">
</form>
```
{{<iframe src="/examples/hypermedia-controls/range.html" width="600" height="200">}}{{</iframe>}}


```html
<form>
    <label for="color">color: </label>
    <input id="color" type="color" value="#bb0060">
</form>
```

{{<iframe src="/examples/hypermedia-controls/color.html" width="600" height="200">}}{{</iframe>}}

> There are many input field types available.