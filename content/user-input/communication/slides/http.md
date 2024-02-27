---
title: Issuing HTTP requests
type: slide
order: 1
classes: [three-in-middle]
---

Recall that all communication between the client and the server happens via HTTP.
The server includes the requested document in the response.

> In a normal scenario, we load a page using a `GET` request, e.g. with a link.


```HTML
<a href="#">link</a>
```
{{<iframe src="iframes/1.1.html" width="600" height="200">}}{{</iframe>}}


> It is also possible to load a page by submitting a form.

```HTML
<form>
    <button>submit</button>
</form>
```
{{<iframe src="iframes/1.2.html" width="600" height="200">}}{{</iframe>}}


We can also use the fetch API in JavaScript to make HTTP requests but this is out of scope for this module.