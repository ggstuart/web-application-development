---
title: Patterns of Progress
type: slide
classes: [block-burger even, nice-p]
---

> As the web develops, features previously only possible in JavaScript, become available in the CSS/HTML core specifications.

A common early use for JavaScript was to create *"rollovers"*, swapping out images when someone hovers their cursor over a link.
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

> That’s a pattern that repeats again and again: a solution is created in an imperative language and if it’s popular enough, it migrates to a declarative language over time. When a feature is available in a declarative language, not only is it easier to write, it’s also more robust.