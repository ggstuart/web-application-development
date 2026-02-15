---
type: slide
title: Deno tasks
classes: [burger, even, gap]
---

> Adding a **deno.json** file to our project allows us to, amongst other things, define tasks that we can execute using the `deno task` sub-command.

```json {linenos=false}
{
    "tasks": {
        "serve": "deno --watch --allow-all main.js",
        "db:init": "deno --allow-all ./tasks/db-init.js"
    }
}
```


```bash {linenos=false}
deno task serve

deno task db:init
```

> Setting up shortcuts like this will help us to easily rebuild our database from scratch.
> We can also implement other helper scripts, for example to import some seed data. 