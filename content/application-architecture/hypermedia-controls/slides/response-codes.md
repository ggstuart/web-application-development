---
type: slide
title: Response Codes
classes: [one-three, gap, tight-quotes]
---


**Code**

**HTTP [Response Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) should reflect the status of the processed request.**

> [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200)

> No problem, your request was processed successfully.

>[303 See Other](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/303)

>The result can be seen at another location.
> **The browser will GET the provided URL.**

> [400 Bad request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400)

> This doesn't make sense. 
Your request was not processed.

> [401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/401)

> Poorly named as this really means unauthenticated, i.e "I don't know who you are".

> [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403)

> I know you, but you can't have the requested resource.

> [404 Not found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404)

> I'm not sure what you were trying to do because this resource doesn't exist.

> [500 Internal server error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/303)

> Wait... something went wrong. I don't feel well.
