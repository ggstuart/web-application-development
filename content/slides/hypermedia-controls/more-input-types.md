---
title: More input types
type: slide
classes: [burger, gap, tight-quotes]
params: 
    layout: 
        cols: 3fr 2fr
        rows: auto 130px 130px 130px 130px auto
---

> Getting dates and times.

```html
<form>
    <label for="date">date: </label>
    <input id="date" type="date">
</form>
```
{{<iframe src="/examples/hypermedia-controls/input-date.html" width="300" height="130">}}{{</iframe>}}

```html
<form>
    <label for="time">time: </label>
    <input id="time" type="time">
</form>
```
{{<iframe src="/examples/hypermedia-controls/input-time.html" width="600" height="130">}}{{</iframe>}}

```html
<form>
    <label for="datetime-local">datetime-local: </label>
    <input id="datetime-local" type="datetime-local">
</form>
```
{{<iframe src="/examples/hypermedia-controls/input-datetime-local.html" width="600" height="130">}}{{</iframe>}}

```html
<form>
    <label for="month">month: </label>
    <input id="month" type="month">
</form>
```
{{<iframe src="/examples/hypermedia-controls/input-month.html" width="600" height="130">}}{{</iframe>}}

> Make sure you use these where possible.
