---
title: Resilient by design
type: slide
order: 18
classes: [resilient]
---

> The web was designed from the beginning to be [resilient](https://resilientwebdesign.com/) to different browser capabilities.

```html
<h1>A document</h1>
<p>
    Hello, I'm a hypertext document and I can <a href="link.html">link</a> to other documents.
</p>
<p>Moreover, <a href="another.html">other documents</a> can link back to me.<p>
```

> The above HTML was valid in 1989 and remains valid now.
> The below code includes a few newer elements.
> Older browsers will simply ignore them (see https://caniuse.com/).

```html
<header>
    <h1>A document</h1>
</header>
<main>
    <p>
        Hello, I'm a hypertext document and I can <a href="link.html">link</a> to other documents.
    </p>
    <p>Moreover, <a href="another.html">other documents</a> can link back to me.<p>
</main>
```
