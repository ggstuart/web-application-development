---
title: Void elements
type: slide
order: 4
classes: ['simple']
---

Void elements such as `<br>`, `<img>` and `<input>` are not allowed to contain content. 
These elements do not require closing tags.

```html
<!-- line breaks are very simple -->
<br>

<!-- images require 'src' and 'alt' attributes -->
<img src="path/to/image" alt="alternative text">

<!-- inputs have many optional attributes to control their operation -->
<input type="text" value="default">
```

The link and meta elements are also void
```html
<head>
    <link rel="stylesheet" href="path/to/styles.css">
    <meta charset="utf-8">
</head>
```