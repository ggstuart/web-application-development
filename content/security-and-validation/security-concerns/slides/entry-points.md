---
type: slide
title: Entry points
classes: [burger, one-two, gap]
---

Users provide data through the HTTP request in a number of ways.

> Via search parameters in the URL like `/mypage?anything=danger`.
```js
const url = new URL(request.url);
const danger = url.searchParams.get("anything");
```

> Via named groups in the URL like `/users/danger`.
```js
const pattern = new URLPattern({pathname: "/users/:anything"});
const match = pattern.exec(request.url);
const danger = match.pathname.groups.anything;
```

> Via form data in POST requests.
```js
const formData = await request.formData();
const danger = formData.get('anything');
```

If we trust this user data implicitly, then we make our system vulnerable to attack.
ALL user data should be considered tainted.