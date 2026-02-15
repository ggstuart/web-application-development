---
title: Categorical data
type: slide
classes: [burger, three-two, gap]
---

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

{{<iframe src="examples/radio.html" width="600" height="200">}}{{</iframe>}}

> The `value` attribute will be submitted as the value of the `name` key.