---
title: Hypermedia controls
type: slide
classes: [block-span-2, even, burger]
---


> In a normal scenario, we load a page using a `GET` request, e.g. with a hyperlink.

```HTML
<a href="#">link</a>
```
{{<iframe src="examples/1.1.html" width="600" height="200">}}{{</iframe>}}


> It is also possible to load a page by submitting a form.
> Forms issue `GET` requests by default, but can have their `method` attribute set to `POST`. 

```HTML
<form method="POST">
    <button>submit</button>
</form>
```
{{<iframe src="examples/1.2.html" width="600" height="200">}}{{</iframe>}}


> Anchors and forms are examples of hypermedia controls.
