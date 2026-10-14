---
type: slide
title: Deno tasks
classes: [burger, gap]
params:
    layout:
        cols: 2fr 5fr
        rows: auto auto 1fr 1fr 1fr auto
---

Adding a **deno.json** file to our project allows us to, amongst other things, define tasks that we can execute using the `deno task` sub-command.

> Setup any tasks in **deno.json** like this.
These don't need to be deno scripts.

```json {linenos=false}
{
    "tasks": {
        "serve": "deno --allow-all main.js",
        "dev": "deno --watch --allow-all main.js",
        "db:init": "deno --allow-all ./tasks/db-init.js"
    }
}
```

> Complex tasks can be executed with a simple shortcut.

```bash {linenos=false}
deno task serve
```

> Running in **developer mode** adds the `--watch` flag.

```bash {linenos=false}
deno task dev
```

> The `db:init` task runs a different script.

```bash {linenos=false}
deno task db:init
```

Setting up shortcuts like this will help us to easily rebuild our database from scratch.
We can also implement other helper scripts, for example to import some seed data. 