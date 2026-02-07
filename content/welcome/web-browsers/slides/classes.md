---
title: Class (and id) selectors
type: slide
classes: [two-code, auto-rows]
order: 6
---

>In HTML, *class* attributes (`class="student"`) can be used to identify similar elements.
> Class selectors (the dot, e.g. `.student`) can be used for selecting elements with a specific *class* attribute.
> Similarly, *id* attributes (`id="students"`) can be selected with a hash (e.g. `#students`).

{{<iframe src="examples/students.html" width="800" height="200">}}{{</iframe>}}

```html
<section id="students">
    <figure class="student">
        <img src="images/P12345678.png">
        <figcaption>P12345678</figcaption>
    </figure>

    <figure class="student">
        <img src="images/P12345679.png">
        <figcaption>P12345679</figcaption>
    </figure>
</section>
```


```css
#students {
    background-color: #222;
    display: flex;
    justify-content: center;
}

.student {
    margin: 0.5em 0.25em;
    border: 2px solid #fff;
    background-color: #333;
    color: #eee;
}
```

