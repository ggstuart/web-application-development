---
title: An example
type: slide
classes: []
order: 3
---

> This example removes background colour and sets all links to show their url when printing a document.

```css
@media print {

  body {
    background-color: #fff;
  }

  .no-print {
    display: none;
  }
  
  a[href^="http"]::after {
    content: " (" attr(href) ")";
  }

}
```

> It has no effect on a screen.