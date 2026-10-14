---
title: Categorical data
type: slide
classes: [burger, gap]
params:
    layout:
        cols: 1fr 3fr 1fr
        rows: auto auto auto auto
---

With categorical data we need to choose one value from multiple alternatives. 

> Radio buttons need to be grouped using the `name` attribute.

```html
<form>
    <fieldset>
        <legend>Colour</legend>
        <label for="red">Red: </label>
        <input type="radio" id="red" name="colour" value="red">
        <label for="green">Green: </label>
        <input type="radio" id="green" name="colour" value="green">
        <label for="blue">Blue: </label>
        <input type="radio" id="blue" name="colour" value="blue">
    </fieldset>
    <input type="submit">
</form>
```

{{<iframe src="/examples/hypermedia-controls/radio.html" width="600" height="200">}}{{</iframe>}}

> Select boxes have one `name` need nested options.


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

{{<iframe src="/examples/hypermedia-controls/select.html" width="600" height="200">}}{{</iframe>}}


The `value` attribute will be submitted as the value of the `name` key.