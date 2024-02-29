---
title: Media features
type: slide
classes: []
order: 4
---

> There are also filters that can be applied based on **media features** such as `aspect-ratio`, `orientation`, `color`, `hover` and (crucially) `width`.


```css
/* default styles always apply */
nav {
  display: flex;
  flex-direction: column;
}

/* applied only when screen orientation is landscape */
@media (orientation: landscape) {
  nav {
    flex-direction: row;
  }
}

/* applied only when hover is supported */
@media (hover: hover) {
  nav a:hover {
    background-color: yellow;
  }
}
```

> Default styles can be overridden and/or expanded under certain conditions.