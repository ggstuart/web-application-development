---
title: Select boxes
type: slide
classes: [two-in-middle]
order: 8
---

> Select boxes need nested options.

```html
<form>
    <label for="colour">Colour:</label>
    <select name="colour" id="colour">
        <option value="red" selected>Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
    </select>
</form>
```

{{<iframe src="iframes/select.html" width="600" height="200">}}{{</iframe>}}

> Only one option can be `selected`
