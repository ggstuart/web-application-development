---
title: Accessing input data with JavaScript
type: slide
classes: [two-in-middle]
order: 11
---

> Given input elements in the page, you will often want to access the user input via javascript.

```html
<form>
    <label for="myInput">Input: </label>
    <input id="myInput" value="some value">
    <label for="myCheckbox1">Option A: </label>
    <input id="myCheckbox1" type="checkbox" checked="1">
    <label for="myCheckbox2">Option B: </label>
    <input id="myCheckbox2" type="checkbox">
</form>
```

{{<iframe src="iframes/js.html" width="600" height="200">}}{{</iframe>}}

```js
console.log(myInput.value);       // "some value"
console.log(myCheckbox1.checked); // true
console.log(myCheckbox2.checked); // false
```
User input can be easily accessed and set with JavaScript.

> For most cases you will only need to access the `value` property or the `checked` property.
