---
title: Combinators
type: slide
classes: [burger, even, gap]
order: 7
---

Selectors allow us to specify *which elements* will be affected by a ruleset.
There are several patterns (known as *combinators*) we can use for selectors which allow us to target specific elements.

>Separating elements with spaces (e.g. `p a`) is the *descendent combinator*.
```css
p a {
    color: darkgrey;
}
```

>Using a greater than symbol (e.g. `p > a`) is the *child combinator* 
```css
nav > a {
    text-decoration: none;
}
```

>Using a plus symbol (e.g. `h1 + p`) is the *next sibling combinator* 
```css
h1 + p {
    color: darkgrey;
}
```

Read more about [selectors and combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors).