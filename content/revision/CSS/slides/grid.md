---
title: grid properties
type: slide
order: 9
classes: [css-grid]
---

`grid-template-columns` determines the number and type of columns.

```css
body {
    grid-template-columns: 1fr;
};    
```

{{<iframe src="examples/grid/1.html" width="600" height="200">}}{{</iframe>}}

```css
body {
    grid-template-columns: 1fr 1fr;
};    
```

{{<iframe src="examples/grid/2.html" width="600" height="200">}}{{</iframe>}}

```css
body {
    grid-template-columns: 1fr 4fr 1fr;
};    
```

{{<iframe src="examples/grid/3.html" width="600" height="200">}}{{</iframe>}}

```css
body {
    grid-template-columns: 1fr 10% 2fr 2em;
};    
```

{{<iframe src="examples/grid/4.html" width="600" height="200">}}{{</iframe>}}

