---
title: Position (absolute) again
type: slide
order: 4
classes: []
---


> Setting `position: relative` on a parent element allows us to position the child elements within their parent.

{{<iframe src="iframes/position/absolute-2.html" width="1000" height="200">}}{{</iframe>}}


```css
.rel {
    position: relative;
    height: 5em;
}
.rel > * { position: absolute; }
.rel > :nth-child(1) { top: 0; left: 0; }
.rel > :nth-child(2) { top: 0; right: 0; }
.rel > :nth-child(3) { bottom: 0; left: 0; }
.rel > :nth-child(4) { bottom: 0; right: 0; }
```

> The green element is positioned relative to its closest positioned ancestor, the viewport.