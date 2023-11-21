---
title: Elements can have attributes
type: slide
order: 3
classes: []
---

>Elements can have attributes to add information that should not be considered content. Attributes are key/value pairs separated by an equals symbol.

```html {class=large}
<p class="note">My cat is very grumpy.</p>
```
>Attributes are placed inside the opening tag.Attribute values should be contained in *"double quotes"*.
Pay attention to the details.


```html {class=large}
<p attribute="this-is-wrong"attribute2="this-is-wrong">
    Missing space between attributes
</p>
<p attribute1=value3>
    Missing quotes
</p>
```
>Some common mistakes include missing the space between attributes and missing quotes around attribute values.