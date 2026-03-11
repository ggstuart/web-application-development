---
title: Syntax and nomenclature
type: slide
classes: []
order: 3
---

>A CSS *ruleset* consists of a [group of] *selector*[s]
and a *declaration block* (between curly brackets) containing one or more *declarations*.
Where Each declaration consists of a property name, a colon and a value, followed by a semi-colon.


```css {class="large"}
selector {
    property: value1;
    another-property: value2;
} 
```
> Typically, each declaration is given it's own line.
> One-line formatting is also common but should **only be used when there is only one declaration**.

```css {class="large"}

selector { property: value1; another-property: value2; }
 
```

>Spaces and newline characters are ignored.
However, consistent formatting is expected.
