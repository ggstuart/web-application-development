---
title: Hypermedia as the engine of application state
type: slide
classes: [burger, gap, q-gap]
params:
    layout:
        cols: 1fr 2fr
---


The architectural style of the web is known as **RE**presentational **S**tate **T**ransfer (REST).

![Roy Fielding](/images/people/roy-fielding-http.jpg)

>One of the key pillars of RESTful architecture is **HyperMedia as the engine of application state (HATEOAS)**.
>
> In HATEOAS, the client (browser) has no knowledge of your application.
All it knows is the entry point URL (possibly a hyperlink from another site).
> It receives **hypermedia controls** embedded in HTML.
>
>Hypermedia controls allow the user to make subsequent requests that change the state of the application.

This is Roy Fielding. 
He described REST in his PhD thesis in 2000. 
