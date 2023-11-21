---
title: Void elements
type: slide
order: 4
classes: []
---

>Void elements such as `<br>`, `<img>` and `<input>` are not allowed to contain content. 
These elements do not require closing tags.

```html
<br> <!-- line breaks are very simple -->

<!-- images require 'src' and 'alt' attributes -->
<img src="path/to/image" alt="alternative text">

<!-- inputs have many optional attributes to control their operation -->
<input type="text" value="default">
```

>The `<input>` element has a value attribute rather than content.

```html
<head>
    <link rel="stylesheet" href="path/to/styles.css">
    <meta charset="utf-8">
</head>
```
>The `<link>` and `<meta>` elements are also void