---
type: slide
title: 303 See other
classes: [even, burger, both-gap]
---

**The POST method is not idempotent** so successful requests must be handled carefully.

> Successful POST requests cannot return simple HTML responses with 200 OK.
If they do, then the browser can refresh to reissue the same request. 

> Unsuccessful POST requests can be reissued safely so they can return an HTML response.

> A common solution is to return a **303 See Other** and add a **Location header** with a path to a resource which shows the change.

> They can return a failure status code (such as 400, 404, 401 etc) to explain why they didn't work.
The HTML response should include advice as to how the user should proceed.

A browser receiving a **303 See Other** status code will look for the Location header and immediately issue a GET request, thus loading a new resource.
