---
title: Events
type: slide
classes: [two-in-middle]
order: 12
---

> Two important events are the `input` and `change` events.


```js
inputInput.addEventListener('input', ev => {
    inputOutput.textContent = inputInput.value;
})
```
The `input` event is triggered when user interacts with an input element.

```js
changeInput.addEventListener('change', ev => {
    changeOutput.textContent = changeInput.value;
})
```
The `change` event is triggered when focus moves away and a new value is set.

```html
<form class="three">
    <label for="inputInput">Input event</label>
    <input type="range" id="inputInput">
    <output id="inputOutput">50</output>
    <label for="changeInput">Change event</label>
    <input type="range" id="changeInput">
    <output id="changeOutput">50</output>
</form>
```

{{<iframe src="iframes/events.html" width="600" height="200">}}{{</iframe>}}

> Using JavaScript is entirely optional in this module. 