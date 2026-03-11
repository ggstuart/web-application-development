---
title: Form data
type: slide
classes: [even, burger, gap]
---

Submitting forms passes data to the server only for elements with a `name` attribute. 

```html
<form>
    <label for="nope">Not included</label>
    <input id="nope" value="data ignored">
    <label for="yep">Included!</label>
    <input id="yep" name="key" value="data submitted">
</form>
```

{{<iframe src="examples/form-data.html" width="600" height="200">}}{{</iframe>}}

> `GET` requests will include data as `search parameters` within the URL and are useful for adding detail to a request, e.g. filtering or sorting results.

> `POST` requests include data in the request `body` and (when served over HTTPS) can be used for sensitive data. 


The web application server needs to understand what is being requested by interpreting the `URL` the `method` and the `data`.