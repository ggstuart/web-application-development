---
title: Linking scripts
type: slide
classes: [even, block-burger]
---

> Linking scripts into your document should be simple.

- Include a `<script>` element in your document.
- Place it in the `<head>` element.
- Set the `type` attribute to `"module"`
- Set the `src` attribute to the file where the code lives.


```html {hl_lines=6}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Page with a script</title>
    <script src="my-module.js" type="module"></script>
  </head>
  <body>
      <!-- your page content is here -->
  </body>
</html>
```


```js
// my-module.js
console.log("hello world!");
console.log(document.body);
```

Your code will be executed *after* the DOM is fully loaded.

> Add `console.log` statements to check it's properly linked.