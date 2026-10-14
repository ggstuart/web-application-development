---
type: slide
title: Checkboxes for boolean data
classes: [gap, burger]
params:
    layout: 
        cols: 1fr 1fr

---

> Boolean data can be expressed as a checkbox

```html
<form>
    <fieldset>
        <legend>Options</legend>

        <label for="a">Option A:</label>        
        <input id="a" type="checkbox" checked>

        <label for="b">Option B:</label>
        <input id="b" type="checkbox">
        
        <label for="c">Option C:</label>
        <input id="c" type="checkbox" checked>
        
        <label for="d">Option D:</label>
        <input id="d" type="checkbox">
    </fieldset>
</form>
```

{{<iframe src="/examples/hypermedia-controls/boolean.html" width="600" height="200">}}{{</iframe>}}

> Each option can be either true or false