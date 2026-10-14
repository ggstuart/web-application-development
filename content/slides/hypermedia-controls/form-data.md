---
title: Form data
type: slide
classes: [burger, gap]
params:
    layout: 
        rows: auto 1fr 1fr auto
        cols: 1fr 2fr 1fr
---

Submitting forms passes data to the server only for elements with a `name` attribute. 

> `GET` requests will include data as `search parameters` within the URL and are useful for adding detail to a request, e.g. filtering or sorting results.

```html
<form>
    <label for="nope">Not included</label>
    <input id="nope" value="ignored">

    <label for="yep">Included!</label>
    <input id="yep" name="included" value="submitted">

    <button>GET</button>
</form>
```
{{<iframe src="/examples/hypermedia-controls/form-data-get.html" width="600" height="400">}}{{</iframe>}}

> `POST` requests include data in the request `body` and (when served over HTTPS) can be used for sensitive data. 

```html
<form method="POST">
    <label for="nope">Not included</label>
    <input id="nope" value="ignored">

    <label for="yep">Included!</label>
    <input id="yep" name="included" value="submitted">

    <button>POST</button>
</form>
```

{{<iframe src="/examples/hypermedia-controls/form-data-post.html" width="600" height="400">}}{{</iframe>}}




The web application server needs to understand what is being requested by interpreting the `URL` the `method` and the `data`.