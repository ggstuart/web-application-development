---
title: Elements can have attributes
type: slide
classes: [gap, burger]
params:
    layout: 
        cols: 1fr 2fr
        rows: auto 1fr 1fr 1fr auto
---

Elements can have attributes to add information that should not be considered content. 

> Attributes are key/value pairs placed inside the opening tag.
In this case, we have added `key="note"`

```html {class=large}
<p class="note">My cat is very grumpy.</p>
```

> Keys and values must be separated by an equals symbol.

```html {class=large}
<p class "note">
    Invalid due to missing equals.
</p>
```

> Values should be contained in *"double quotes"*.

```html {class=large}
<p attribute1=value3>
    Invalid due to missing quotes
</p>
```

> Multiple pairs must be separated by whitespace.

```html {class=large}
<p attribute="this-is-wrong"attribute2="this-is-wrong">
    Missing space between attributes
</p>
```

Pay attention to the details.