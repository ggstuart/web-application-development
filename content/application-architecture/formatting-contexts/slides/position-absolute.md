---
title: Position (absolute)
type: slide
order: 3
classes: []
---

> Setting `position: absolute` on an element, removes it from the normal document flow.
This causes the rest of the page to adjust, taking up the available space.

{{<iframe src="iframes/position/absolute.html" width="1000" height="200">}}{{</iframe>}}

```css
.down-left {
    outline: 2px solid hsla(100, 50%, 50%, 0.2);
    background: hsla(100, 50%, 50%, 0.5);
    position: absolute;
    top: 0.5em;
    left: -0.5em;
}
```

> The green element is positioned relative to its closest positioned ancestor, the viewport.