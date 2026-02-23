---
type: slide
title: User data are always strings
classes: [burger, one-two, gap]
---

We always need to handle strings.

> Via search parameters in the URL like `/mypage?anything=string`.
```js
const url = new URL(request.url);
const userString = url.searchParams.get("anything");
```

> Via named groups in the URL like `/users/string`.
```js
const pattern = new URLPattern({pathname: "/users/:anything"});
const match = pattern.exec(request.url);
const userString = match.pathname.groups.anything;
```

> Via form data in POST requests.
```js
const formData = await request.formData();
const userString = formData.get('anything');
```

HTTP only provides us with strings.