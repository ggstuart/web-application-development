---
title: Specificity and building the CSSOM
type: slide
classes: []
order: 8
---

> Style information are parsed into the CSSOM in a similar way.
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
p { color: blue; }          /* all paragraphs start blue            - (0, 0, 1) */
.a-note { color: green; }   /* elements with the class become green - (0, 1, 0) */
#this-note { color: red; }  /* the element with the id become red   - (1, 0, 0) */
```

The specificity algorithm counts selector components in each weight category (ID, CLASS, TYPE).
If competing declarations have the same value, the order in the file will decide.

> Note that styles added as inline style attributes will always be applied.


