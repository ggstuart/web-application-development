---
title: Specificity
type: slide
classes: []
order: 100
---

> The order of styles is important, but styles are not simply applied in order. 
> Styles with higher *specificity* take precedence over those with lower *specificity*.

```html
<p class="a-note" id="this-note">This is a note</p>
```

> The paragraph has a class and an id.
The style declarations below all try to set the `color` property.
So, there are three potential values, but only one can be applied.
Which one is chosen?

```css
#this-note { color: red; }  /* selecting an id   - (1, 0, 0) */
.a-note { color: green; }   /* selecting a class - (0, 1, 0) */
p { color: blue; }          /* selecting a type  - (0, 0, 1) */
```

The specificity algorithm counts selector components in each weight category (ID, CLASS, TYPE).
If competing declarations have the same value, the order in the file will decide.

> Note that styles added as inline style attributes will always be applied.


