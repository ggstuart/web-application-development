---
title: Specificity and building the CSSOM
type: slide
classes: [gap, one-two, burger]
order: 8
---

Styles with higher *specificity* take precedence over those with lower *specificity*.

> The paragraph has a class and an id.

```html {linenos=false}

 <p class="a-note" id="this-note">This is a note</p>
```

> These style declarations all try to set the `color` property.
So, Which one is chosen?
>
> The paragraph is styled **red**.
But why?

```css {linenos=false}

 #this-note {
     color: red;
 }
 
 p.a-note {
     color: green;
 }
 
 p {                  
     color: blue; 
 }
```

>The specificity algorithm counts selector components in each weight category (ID, CLASS, TYPE).

```plaintext {linenos=false}

            (ID, CLASS, TYPE)
          p ( 0,     0,    1)
   p.a-note ( 0,     1,    1)
 #this-note ( 1,     0,    0)
```

Note that styles added as inline style attributes will always be applied.