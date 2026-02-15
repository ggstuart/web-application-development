---
title: Fieldsets and required fields
type: slide
classes: [three-two, gap, block-span-2]
order: 6
---



```html
<form action="/login" method="post">
  <fieldset>
    <legend>Sign in</legend>
    <label for="username">Username: </label>
    <input id="username" name="username" required>
    <label for="password">Password: </label>
    <input id="password" name="password" type="password" required>
    <input type="submit">
  </fieldset>
</form>
```

{{<iframe src="examples/forms.html" width="600" height="200">}}{{</iframe>}}


```html
<form>
  <fieldset>
    <legend>Options</legend>
    <label for="a">Option A:</label> <input id="a" type="checkbox">
    <label for="b">Option B:</label> <input id="b" type="checkbox">
    <label for="c">Option C:</label> <input id="c" type="checkbox" checked="1">
    <label for="d">Option D:</label> <input id="d" type="checkbox">
  </fieldset>
</form>
```

{{<iframe src="examples/boolean.html" width="600" height="200">}}{{</iframe>}}


> We can use `<fieldset>` elements to organise `<inputs>` into groups.