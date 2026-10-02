---
title: Flow layout exercise
type: slide
classes: [two-of-four]
---

> By default, content is arranged in a page according to the flow layout.
> Different elements have different default behaviour.
> See the [default flow layout exercise]({{< ref "html-basics/default-flow" >}}) for more details.

{{<iframe src="examples/flow" width="1000" height="200">}}{{</iframe>}}

```css
body {
    font-size: 1.2em;
    * {
        outline: 2px solid hsla(0, 50%, 50%, 0.1);
        background: hsla(0, 50%, 50%, 0.15);
    }
}
```

> **Block elements** take up the full width of their container. 
> **Inline elements** flow like text.
> Everything flows, wraps and adjusts according to the size of the viewport.