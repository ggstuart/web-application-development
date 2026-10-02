---
title: Void elements
type: slide
classes: [gap, p-burger]
params:
    layout:
        cols: 2fr 3fr
        rows: auto 1fr 1fr 1fr auto 1fr 1fr auto
---

Void elements are not allowed to contain content and do not require closing tags.

> line breaks crete gaps in content

```html
<br> 
```

> images require 'src' and 'alt' attributes

```html
<img src="path/to/image" alt="alternative text">
```

> inputs have many optional attributes to control their operation
```html
<input type="text" value="default">
```

Some common void elements that live in the `<head>` element

> `<link>` elements connect files to a document

```html
<head>
    <link rel="stylesheet" href="path/to/styles.css">
</head>
```

> `<meta>` elements add meta-data to the document

```html
<head>
    <meta charset="utf-8">
</head>
```

There is no clear rule.
You will need to learn some of this. 
