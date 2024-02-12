---
title: Float
type: slide
order: 5
classes: []
---


> The `float` property can be set to `left` or `right` to change the way an element behaves and where it is located in the flow.

{{<iframe src="iframes/float" width="1000" height="200">}}{{</iframe>}}


```css
p.left img {
    float: left;
    margin-right: 1rem;
}
p:has(img) {
    border: 1px solid black;
}
```
