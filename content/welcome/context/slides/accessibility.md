---
title: Accessibility
type: slide
order: 11
classes: [even, burger, gap]
---

>Accessible Rich Internet Applications (ARIA) present information to *assistive technologies* to improve **accessibility**. 
Adding a `role` will convert your element into an ARIA landmark. 


```html 
<div role="banner">
    <h1>Accessibility</h1>
    <div role="navigation">
        <a href="#link-1">Link 1</a>
        <a href="#link-2">Link 2</a>
        <a href="#link-3">Link 3</a>
    </div>
</div>
<div role="main">
    Main content
</div>
<div role="contentinfo">
    Footer content
</div>
```

```html
<header>
    <h1>Accessibility</h1>
    <nav>
        <a href="#link-1">Link 1</a>
        <a href="#link-2">Link 2</a>
        <a href="#link-3">Link 3</a>
    </nav>
</header>
<main>
    Main content
</main>
<footer>
    Footer content
</footer>
```


> Most of the newer, semantic elements include these roles implicitly. 
> This makes your HTML simpler and more accessible.
> See the [Chrome A11y podcast](https://www.youtube.com/watch?v=g2tzEil5TL0) for more on accessibility.
