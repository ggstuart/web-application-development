---
type: slide
title: Rendering images
classes: [gap, burger, tight-quotes]
---

> We can render images using `<img>` elements.

```js
export function uploadView({ images, errors = {} }) { 
    const imageElements = images.map((i) => `
    <figure>
        <img src="/images/${i.id}" style="width: 100%">
        <figcaption style="padding: 0.5rem;">${i.title}</figcaption>
    </figure>`);
    return `
    <section>
        ${imageElements.join("\n")}
    </section>
    <form action="/" method="POST" enctype="multipart/form-data">
        <label for="image">Image file: </label>
        <input type="file" id="image" accept="image/*" name="file">
        <span class="error">${errors.file?.message || ""}</span>
        <label for="title">title: </label>
        <input type="text" id="title" name="title" value="${errors.title?.value || ""}">
        <span class="error">${errors.title?.message || ""}</span>
        <button>Upload</button>
    </form>`    
}
```
> Setting the `src` attribute to the appropriate url. 