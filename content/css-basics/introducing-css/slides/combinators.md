---
title: Combinators
type: slide
classes: []
order: 100
---

>Selectors allow us to specify *which elements* will be affected by a ruleset.
There are several patterns (known as *combinators*) we can use for selectors which allow us to target specific elements.

```css
/* Separating elements with spaces is the *descendent combinator*. */
p a {
    color: darkgrey;
}

/* Using a greater than symbol (`>`) is the   */
p > a {
    color: darkgrey;
}

/* Using a greater than symbol (`>`) is the   */
p > a {
    color: darkgrey;
}
```

> Some comment