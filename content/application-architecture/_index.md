---
type: unit
title: Application Architecture
---

Web application architecture connects the front-end (web browser) to the back-end (web server) via HTTP.

<!--more-->

Each HTTP request issued by the front-end must be handled, according to the application logic, by the back-end.

In this module, we will break these requests into two types. 

- GET requests will generate HTML pages within your application
- POST requests will trigger state changes on the back-end

GET requests are familiar from static HTML pages and can be triggered by adding hyperlinks.
POST requests send data to the back-end and require HTML forms.