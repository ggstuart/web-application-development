---
title: Position (relative)
type: slide
order: 2
classes: []
---

> Setting `position: relative` moves an element relative to it's default position in the flow.


{{<iframe src="iframes/position/relative.html" width="1000" height="200">}}{{</iframe>}}

```css
.down-left {
    outline: 2px solid hsla(200, 50%, 50%, 0.2);
    background: hsla(200, 50%, 50%, 0.5);
    position: relative;
    top: 0.5em;
    left: -0.5em;
}
```
> The blue elements have been moved in this way.