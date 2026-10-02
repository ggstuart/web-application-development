---
title: Class (and id) selectors
type: slide
classes: [burger, gap, classes]
order: 6
---

>In HTML, *class* attributes (`class="student"`) can be used to identify similar elements.
> Class selectors (the dot, e.g. `.student`) can be used for selecting elements with a specific *class* attribute.


```html {class="small"}
<section id="students">
    <figure class="student">
        <img src="https://placecats.com/120/100">
        <figcaption>P12345677</figcaption>
    </figure>

    <figure class="student">
        <img src="https://placecats.com/240/200">
        <figcaption>P12345678</figcaption>
    </figure>    

    <figure class="student">
        <img src="https://placecats.com/180/150">
        <figcaption>P12345679</figcaption>
    </figure>

    <figure class="student">
        <img src="https://placecats.com/300/250">
        <figcaption>P12345680</figcaption>
    </figure>
</section>
```

{{<iframe src="examples/students.html" width="800" height="200">}}{{</iframe>}}

```css {class="small"}
#students {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.student {
    display: grid;
    grid-template-rows: auto 1fr;
    margin: 0;
    border: 2.5px solid #000;
    filter: brightness(0.8);
    img {
        object-fit: cover;
        width: 100%;
        aspect-ratio: 1.2;
    }
    figcaption {
        display: grid;
        place-content: center;
        background-color: #333;
        color: #eee;
    }
    &:hover {filter: none;}
}
```


> Similarly, *id* attributes (`id="students"`) can be selected with a hash (e.g. `#students`).
