---
type: unit
title: Cookies and authentication
weight: 4
---

HTTP is a stateless protocol. 
Each request is processed independently by the server and clients must resend all the context with every request.


<!--more-->


However, our applications often need to know who is sending a request. 
We can achieve this using cookies to simulate sessions which can be associated with authenticated users.
