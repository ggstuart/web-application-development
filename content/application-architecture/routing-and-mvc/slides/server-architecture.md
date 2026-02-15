---
type: slide
title: Server Architecture
classes: [contain, burger, even, gap]
---

Structuring our code from the beginning well will allow our project to expand smoothly. 

> The overall logical structure involves a **router** and an **MVC** pattern.

> Our files can be organised in different ways, but this is a good example.

![A diagram showing web server architecture with a router and MVC structure](./images/server-architecture.svg)
```plaintext
MyApplication
    ├── models
    │      └── items.js
    ├── views
    │      └── items.js
    ├── controllers
    │      └── items.js
    ├── tools
    │      ├── db.js
    │      ├── redirect.js
    │      └── render.js
    ├── tasks
    │      └── db-init.js
    ├── main.js
    └── server.js
```

> The request must be **routed** to a **controller** which will coordinate between **models** and **views**.