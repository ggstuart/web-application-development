---
type: slide
title: From code to pixels
classes: [contain]
---

> The browser rendering engine converts code into pixels through a series of steps.
HTML and CSS code is parsed and converted into a nested structure.
Styles are determined for each element and applied within the viewport.
Positions and dimensions are calculated for each visible element.
Pixel colours are calculated for each layer and merged to generate the final result.

![A diagram showing the steps from HTML and CSS ](./images/code-to-pixels.png)

> Work done in each step can be reused if nothing changes.
> Although JavaScript and CSS can require steps to be recalculated every frame.  