---
title: Preference features
type: slide
classes: [two-in-middle]
order: 9
---

We can detect the preferences a user has set in their operating system e.g. `prefers-color-scheme`.

> First, declare that both light and dark are allowed and set some variables.

```css
:root {
    color-scheme: light dark;
    --bg-color: #eee;
    --text-color: #333;
}
```

> Use the variables for colours
```css
body {
    background-color: var(--bg-color);
    color: var(--text-color);
}
```

> Then specify different colours if the user prefers a dark colour scheme.

```css
@media (prefers-color-scheme: dark) {
    body {
        --bg-color: #333;
        --text-color: #eee;
    }
}
```

This can help to build a more robust and personalized web experience, especially for those with accessibility needs.
