---
title: Anchors (hyperlinks)
type: slide
order: 7
classes: ['anchors']
---

Anchor elements require a *hypertext reference* (an `href` attribute) pointing to the link destination as a **U**niform **R**esource **L**ocator (URL).
There are three main kinds of link.

> linking to another element
```html
<a href="#my-element">
    that element
</a>
```
> linking to another document
```html
<a href="another-page.html">
    that document
</a>
```
> linking to another server
```html
<a href="https://www.dmu.ac.uk">
    that website
</a>
```

> Combinations are common. 
```html
<a href="https://www.example.com/some-document#section-1">
    an element in a document on another server
</a>
```

The content will become [a clickable link](#).
Clicking the link with induce the browser to issue an HTTP `GET` request and render the document provided by the server.
