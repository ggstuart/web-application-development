---
title: Hypermedia controls
type: slide
classes: [burger, gap]
params: 
    layout:
        cols: 3fr 3fr 2fr
        rows: auto 1fr 1fr 1fr auto auto
---


Anchors and forms are examples of hypermedia controls.

> Hyperlinks issue a `GET` request and render the response.
The `href` attribute determines the request URL.

```HTML
<a href="#">this is a hyperlink</a>
```
{{<iframe src="/examples/hypermedia-controls/hyperlink.html" width="600" height="100">}}{{</iframe>}}


> Forms are more flexible and allow data to be attached. 
They default to a `GET` request with data added to the url search parameters.

```HTML
<form>
    <button>GET /this-document?</button>
</form>
```
{{<iframe src="/examples/hypermedia-controls/get-form.html" width="600" height="200">}}{{</iframe>}}


> The `action` attribute determines where the request will be sent. 

```HTML
<form action="/anywhere">
    <button>GET /anywhere?</button>
</form>
```
{{<iframe src="/examples/hypermedia-controls/get-form-action.html" width="600" height="200">}}{{</iframe>}}

> The `method` attribute allows a `POST` request to be sent. 
Data are added to the request body.

```HTML
<form method="POST" action="/anywhere>
    <button>POST /anywhere</button>
</form>
```
{{<iframe src="/examples/hypermedia-controls/post-form-action.html" width="600" height="200">}}{{</iframe>}}

Hypermedia controls allow users to issue HTTP requests.