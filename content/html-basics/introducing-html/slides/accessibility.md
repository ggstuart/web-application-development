---
title: Accessibility
type: slide
order: 10
classes: ['simple']
---

Accessible Rich Internet Applications (ARIA) present information to *assistive technologies* to improve **accessibility**. 
Adding a `role` will convert your element into an ARIA landmark. 


```html
<div role="banner"><h1>Accessibility</h1></div>
<div role="navigation"><a href="#link">Link</a></div>
<div role="main"></div>
```
> However, most semantic elements include these roles implicitly. 
> This makes your HTML simpler and more accessible.
> See the [Chrome A11y podcast](https://www.youtube.com/watch?v=g2tzEil5TL0) for more on accessibility.

```html
<header><h1>Accessibility</h1></header>
<nav><a href="#link">Link</a></nav>
<main></main>
```