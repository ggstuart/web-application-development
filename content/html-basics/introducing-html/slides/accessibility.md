---
title: Accessibility
type: slide
order: 10
classes: []
---

>Accessible Rich Internet Applications (ARIA) present information to *assistive technologies* to improve **accessibility**. 
Adding a `role` will convert your element into an ARIA landmark. 


```html {class=large}
<div role="banner"><h1>Accessibility</h1></div>
<div role="navigation"><a href="#link">Link</a></div>
<div role="main"></div>
```

> Adding this extra information can be a pain.
Luckily, we don't need to.


```html {class=large}
<header><h1>Accessibility</h1></header>
<nav><a href="#link">Link</a></nav>
<main></main>
```
> Most of the newer, semantic elements include these roles implicitly. 
> This makes your HTML simpler and more accessible.
> See the [Chrome A11y podcast](https://www.youtube.com/watch?v=g2tzEil5TL0) for more on accessibility.
