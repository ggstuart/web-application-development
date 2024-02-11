---
title: Default flow
type: slide
order: 1
classes: []
---

> By default, content is arranged in a page according to the flow layout. 

{{<iframe src="iframes/flow" width="1000" height="200">}}{{</iframe>}}

```css
body {
    font-size: 1.4em;
}
body * {
    outline: 2px solid hsla(0, 50%, 50%, 0.2);
    background: hsla(0, 50%, 50%, 0.1);
    padding-inline: 0.25rem;
}
```

> Block elements take up the full width of their container. 
> Inline elements flow like text.
> Everything flows, wraps and adjusts according to the size of the viewport.