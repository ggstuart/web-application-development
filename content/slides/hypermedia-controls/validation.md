---
title: Input validation
type: slide
classes: [burger, three-two, gap]
params:
  layout:
    cols: 3fr 2fr
    rows: auto 1fr auto auto
---

> Forms will only submit when all inputs are valid.

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

{{<iframe src="/examples/hypermedia-controls/validation.html" width="600" height="200">}}{{</iframe>}}

> Adding the `required` attribute means empty fields are considered invalid.

> Inputs with `type="tel"`, `type="url"` and `type="email"` provide basic checking.

> Validity is reflected by the pseudo-classes `:user-valid` and `:user-invalid`.
