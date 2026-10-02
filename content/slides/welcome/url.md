---
type: slide
title: URLs
classes: [gap, contain, burger]
params:
    layout:
        cols: 2fr 1fr
        rows: min-content 1fr min-content min-content min-content min-content
---

> A Uniform Resource Locator is a reference to a resource on a network.

![URI syntax diagram](https://upload.wikimedia.org/wikipedia/commons/d/d6/URI_syntax_diagram.svg "url")

e.g. **https:\//www.example.com/some-document.html?key=value#some-element**

- *scheme*: **https**
- *host*: **www.example.com**
- *path*: **/some-document.html**
- *query*: **key=value**
- *fragment*: **#some-element**

<style>
 p:has(img[title=url]) {
    grid-column: span 2;
 }
</style>

> Browsers make calls to DNS to lookup the domain name and convert it to an IP address which it uses to communicate to the server.

