---
title: Anchors (hyperlinks)
type: slide
classes: [burger, gap]
params: 
    layout:
        cols: 1fr 3fr
---

Anchor elements require an `href` attribute (a *hypertext reference*) pointing to a **U**niform **R**esource **L**ocator (URL).

> linking to another element in the current document.
```html
<a href="#my-element">
    that element
</a>
```
> linking to another document in the current domain.
```html
<a href="another-page.html">
    that document
</a>
```
> linking to another domain.
```html
<a href="https://www.dmu.ac.uk">
    that website
</a>
```

> Linking to a specific element within a specific document on another server. 
```html
<a href="https://www.example.com/some-document#section-1">
    an element in a document on another server
</a>
```

The content will become [a clickable link](#).
Clicking the link with induce the browser to issue an HTTP `GET` request and render the document provided by the server.
