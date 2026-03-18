---
type: slide
title: Application architecture
classes: [burger, gap, two-one]
---

> "Explain **Application architecture** including HATEOAS, routing and MVC. 
Demonstrate how a web application serves HTML documents with embedded hypermedia controls which enable navigation between routes.
Show how your high-level application design provides the user with access to a range of functionality."

Our application routes define the functionality and routing logic decides how each incoming request is handled. 
The request is passed to controllers, performing the necessary tasks and deciding exactly how to respond. 
We have a variety of tools to enable rendering HTML pages, redirecting, setting cookies, performing data validation and authentication.
Models provide access to data persistence.
Views generate a user interface with embedded hypermedia controls.

![server architecture diagram](./images/server-architecture.svg)

> This one covers a lot of ground, try to give a flavour of how your JavaScript is organised. 
[Routing and MVC]({{< ref "/application-architecture/routing-and-mvc" >}}) is the core, as well as any tools you have time to explain. 
Try to describe the range of routes available in your application (relate to resources, i.e. db tables) and tie in [HATEOAS]({{< ref "/application-architecture/hypermedia-controls" >}}).
