---
title: More complex forms
type: slide
classes: [gap, burger]
params:
  layout:
    cols: 3fr 2fr
---

> More complex forms are possible

```html
<form>
    <fieldset>
        <legend>User info</legend>
        <label for="username">Username: </label>
        <input id="username" name="username" required>
        <label for="password">Password: </label>
        <input id="password" name="password" type="password" required>
        <label for="confirm">Confirm: </label>
        <input id="confirm" type="password" required>
    </fieldset>
    <fieldset>
        <legend>Options</legend>
        <label for="colour">Colour:</label>
        <input id="colour" type="color" name="colour" required>
        <label for="ok">OK:</label>
        <input id="ok" type="checkbox" name="OK">
        <label for="when">When:</label>
        <input id="when" type="date" name="when" required>
        <label for="level">Level:</label>
        <input id="level" type="range" min="0" max="4" name="level">
    </fieldset>
    <button>Register</button>
</form>
```

{{<iframe src="/examples/hypermedia-controls/complex-form.html" width="600" height="200">}}{{</iframe>}}

> Use fieldsets to break them up visually