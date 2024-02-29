---
title: Mobile first
type: slide
classes: []
order: 5
---

> This is a good way to get started and is how we will expect you to structure your media queries for your assignment.

```css
/* Default styles */
nav {
  display: flex;
  flex-direction: column;
}

/* For larger devices there is room for a horizontal menu */
@media screen and (min-width: 600px) { 
  nav {
    flex-direction: row;
  }
}

/* When the device is very large, we can use a bigger font */
@media screen and (min-width: 1200px) {
  nav {
    font-size: 1.2em;
  }
}
```

> Design your pages for mobile devices and expand when more space is available.