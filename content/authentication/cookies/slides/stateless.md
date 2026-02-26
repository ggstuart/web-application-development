---
type: slide
title: HTTP is stateless
classes: [contain, img-50vh]
---

> Each request is processed independently by the server with no memory of previous requests, so clients must resend all context every time. 

![A diagram showing HTTP messages travelling between web browser and web server](./images/http.svg)

> Our web applications need continuity between requests, they need some state to be stored in the browser.