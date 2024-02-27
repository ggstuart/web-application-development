---
title: Query parameters
type: slide
order: 13
classes: []
---

Submitting forms passes data to the server either via `GET` requests or `POST` requests.
The difference is important. 

> `GET` requests can include `query parameters` or `search parameters` as part of the URL.
> These become visible to the end user and so should not be used for sensitive data.

Either way, when the server receives this request, it can parse the url to extract the parameters.

>In PHP this is done automatically and the data are stored as associative arrays known as [`$_GET`](https://www.php.net/manual/en/reserved.variables.get.php) and [`$_POST`](https://www.php.net/manual/en/reserved.variables.post.php).


For example, I can link to [a specific slide in the presentation](?slide=12) by adding search parameters to the url of a link.