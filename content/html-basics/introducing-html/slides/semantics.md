---
title: Semantic elements
type: slide
order: 10
classes: [twin]
---

> Semantic elements add *meaning* to your document structure and provide **accessibility** advantages.
> Choosing *semantic elements* in preference to meaningless elements such as `<div>` and `<span>` adds **meaning**.

```html
<!-- bad -->

<div id="myheader"></div>
<div id="navigation"></div>
<div id="main-content">
    <div class="section">
        <div class="article">
            <h2>This is some content</h2>
        </div>
    </div>
    <div class="special-section"></div>
</div>
<div id="the-footer"></div>
```

```html
<!-- good -->

<header></header>
<nav></nav>
<main>
    <section>
        <article>
            <h2>This is some content</h2>
        </article>
    </section>
    <section class="special"></section>
</main>
<footer></footer>
```

> Semantic documents can be understood more fully by the browser and by other software because the various elements have been given *meaning*.