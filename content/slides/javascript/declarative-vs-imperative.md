---
title: Declarative vs Imperative
type: slide
classes: [even, nice-p, big-quote, v-gap, declarative]
---

> HTML and CSS are declarative

> JavaScript is imperative

Declarative languages leave room for the resilience we have been talking about.
We describe what we want and leave the browser to figure out how to achieve it.


Imperative languages provide more power at the expense of robustness.
A JavaScript programme can crash out with an error if you miss an important comma.

>A common early use for JavaScript was to create *"rollovers"*, swapping out images when someone hovers their cursor over a link.
Back in the nineties there was no other way.
Now, we can use the CSS `:hover` pseudo-class.

```css
a img {
    background-image: url(images/unhovered.png);
}
a:has(img):hover img {
    background-image: url(images/hovered.png);
}
```

Solutions created in an imperative language can migrate to a declarative language over time. 
When a feature is available in a declarative language, not only is it easier to write, it’s also more robust.

