---
title: Accessibility
type: slide
order: 11
classes: [twin]
---

>Accessible Rich Internet Applications (ARIA) present information to *assistive technologies* to improve **accessibility**. 
Adding a `role` will convert your element into an ARIA landmark. 


```html 
<div role="banner">
    <h1>Accessibility</h1>
</div>
<div role="navigation">
    <a href="#link-1">Link 1</a>
    <a href="#link-2">Link 2</a>
    <a href="#link-3">Link 3</a>
</div>
<div role="main"></div>
```

```html
<header>
    <h1>Accessibility</h1>
</header>
<nav>
    <a href="#link-1">Link 1</a>
    <a href="#link-2">Link 2</a>
    <a href="#link-3">Link 3</a>
</nav>
<main></main>
```

> Adding this extra information can be a pain.
Luckily, we don't need to.
We can simply choose appropriate elements to create meaningful, accessible structure in our documents. 
>
> Most of the newer, semantic elements include these roles implicitly. 
> This makes your HTML simpler and more accessible.
> See the [Chrome A11y podcast](https://www.youtube.com/watch?v=g2tzEil5TL0) for more on accessibility.
