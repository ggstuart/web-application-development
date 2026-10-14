---
title: The input element
type: slide
classes: [burger, gap]
params:
    layout:
        cols: 1fr 2fr 2fr
        rows: auto 1fr 1fr 1fr auto
---

The `<input>` element is extremely versatile, attributes are used to change its behaviour.


> The default `<input>` is a text input like this: 


```HTML
<form>
    <input>
</form>
```
{{<iframe src="/examples/hypermedia-controls/input.html" width="600" height="100">}}{{</iframe>}}


> Adding placeholder text is easy: 

```HTML
<form>
    <input placeholder="enter your name">
</form>
```
{{<iframe src="/examples/hypermedia-controls/input-placeholder.html" width="600" height="100">}}{{</iframe>}}

> Default values can also be provided: 

```HTML
<form>
    <input
        value="My name"
        placeholder="Enter your name">
</form>
```
{{<iframe src="/examples/hypermedia-controls/input-value.html" width="600" height="100">}}{{</iframe>}}


We will only cover some of the basics.