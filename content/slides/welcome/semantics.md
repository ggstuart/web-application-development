---
title: Semantic elements
type: slide
order: 10
classes: [even, burger, gap, tight-quotes]
---

> Semantic elements add *meaning* to your document structure and provide **accessibility** advantages.
> Choosing *semantic elements* in preference to meaningless elements such as `<div>` and `<span>` adds **meaning**.

```html
<!-- bad -->
<div id="myheader">
    <h1>The title</h1>
    <div id="navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
    </div>
</div>
<div id="main-content">
    <div class="intro-section">
        <div class="article">
            <h2>This is some content</h2>
        </div>
    </div>
</div>
<div id="the-footer"></div>
```

```html
<!-- good -->
<header>
    <h1>The title</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>
<main>
    <section aria-label="intro">
        <article>
            <h2>This is some content</h2>
        </article>
    </section>
</main>
<footer></footer>
```

> Semantic documents can be understood more fully by the browser and by other software because the various elements have been given *meaning*.