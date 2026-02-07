---
title: Some more examples
type: slide
classes: []
order: 5
---

>CSS declarations can have multiple values, typically separated by spaces or commas.

```css
body {
    font-family: Tahoma, Helvetica, sans-serif;
}
```

>Some properties are *shorthand* properties provided for convenience.

```css
p {
    border: 3px solid blue;
}

p {
    border-width: 3px;
    border-style: solid;
    border-color: blue;
}
```
>The `border` property is shorthand for setting `border-width`, `border-style` and `border-color` simultaneously.