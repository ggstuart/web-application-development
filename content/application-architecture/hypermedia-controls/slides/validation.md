---
title: Input validation
type: slide
classes: [burger, three-two, gap]
---

> Validation used to be really annoying, now its easy.
Inputs with `type="tel"`, `type="url"` and `type="email"` provide basic checking which is detected by the pseudo-classes `:valid` and `:invalid`.
We can also add the `required` attribute to activate the `:invalid` state on empty values.

```html
<form class="validation-demo">
    <label for="phone">Tel:</label>
    <input type="tel" id="phone" name="phone" 
      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
    <label for="email">email: </label>
    <input id="email" type="email" required>
    <input type="submit">
</form>
```

{{<iframe src="examples/validation.html" width="600" height="200">}}{{</iframe>}}

> Forms will only submit when all inputs are valid.
They also have the same pseudo-classes so can also be styled.
