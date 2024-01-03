---
title: Class selectors
type: slide
classes: []
order: 100
---

> Class selectors (the dot) can be used for selecting elements with a specific *class* attribute.

```css
.student {
    width: 5em;
    height: 6.5em;
    border: 5px solid #666;
    background-color: #333;
    color: #eee;
}
```

>In your HTML file, *class* attributes (`class="student"`) can be used to identify elements that should be given similar styles.

```html
<figure class="student">
    <img src="images/P12345678.png">
    <figcaption>P12345678</figcaption>
</figure>
```