---
type: slide
title: Uploading files
classes: [burger, gap, one-two]
---

Uploading files requires a few tweaks to our forms.

> [multipart/form-data encoding](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype)` handles the binary content of the file.

```html {hl_lines=1}
<form enctype="multipart/form-data">

</form>
```

> Files will be ignored unless the form makes a `POST` request.
```html {hl_lines=1}
<form method="POST" action="/images" enctype="multipart/form-data">

</form>
```

> Use an input element with [type="file"](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file) to open a file browser to locate a file.

```html {hl_lines=3}
<form action="/images" enctype="multipart/form-data">
    <label for="image">File:</input>
    <input id="image" type="file" name="image">
</form>
```


> We can restrict which file types are allowed with the [accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/accept) attribute.
```html {hl_lines=3}
<form method="POST" action="/images" enctype="multipart/form-data">
    <label for="image">File:</input>
    <input id="image" type="file" name="image" accept="image/*">
</form>
```

With these in place, the user can pick a file to attach to the request.