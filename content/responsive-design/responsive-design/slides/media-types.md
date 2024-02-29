---
title: CSS media queries
type: slide
classes: []
order: 2
---

> Media queries allow you to detect different **media types**.

```CSS

@media screen {
  /* styles for devices with screens */
}

@media print {
  /* styles for printers - i.e. on paper */
}

@media speech {
  /* styles for text-to-speech screen readers - i.e. audio styles */
}
```

> Rulesets added into these media queries will be conditionally applied.