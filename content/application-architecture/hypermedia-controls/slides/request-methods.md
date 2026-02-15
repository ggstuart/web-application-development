---
type: slide
title: HTTP Request Methods
classes: [one-three, burger, gap]
---

HTML only allows two [request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods), GET and POST.
They imply a different intent.

> [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET) requests are [safe](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP) and [idempotent](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent).

> They imply a read-only request for a representation of a given resource.
> They can be issued and reissued many times without any problem.
>- **GET /items** (give me the items) 
>- **GET /items/123** (give me item number 123)

> [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST) requests are neither *safe* nor are they guaranteed to be *idempotent*

> They imply a request to change server state.
> Issuing the same POST request multiple times may change the state each time. 
e.g. by adding duplicate records into a collection.
>
> Fundamentally, they submit data for the resource to process. 


HTTP semantics is about intent, GET requests are for read-only operations, POST requests modify state.