---
type: slide
title: HTTP Request Methods
classes: [burger, gap, tight-quotes]
params:
    layout:
        cols: 1fr 1fr
        rows: auto auto auto auto auto auto  auto
---

HTML only allows two [request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods), [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET) and [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST).
They imply a different intent.


> 😃 `GET /items` 😃<br>
Give me a representation of the items collection

> 😃 `POST /items` 😃<br>
Here is some data to be processed by the items collection

> 😃 `GET /items/123` 😃<br>
Give me item number 123 

> 😃 `POST /items/123` 😃<br>
Here is some data to be processed by item number 123 

> 😃 `GET /items?query=test` 😃<br>
Give me all the items matching the query

> 🤨 `POST /items?query=test` 🤨<br>
Here is some data to be processed by the filtered items collection?


> GET requests are [safe](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP), they imply a read-only operation.

> POST requests are not [safe](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP), they imply a request to change server state.


> GET requests are [idempotent](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent) and can be issued and reissued many times without any problem.

> POST requests are not guaranteed to be [idempotent](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent).<br>
> Issuing the same POST request multiple times may change the state each time. 
e.g. by adding duplicate records into a collection.




HTTP semantics is about intent, GET requests are for read-only operations, POST requests modify state.