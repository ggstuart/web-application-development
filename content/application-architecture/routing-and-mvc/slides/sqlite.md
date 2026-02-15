---
type: slide#
title: SQLite
classes: [auto-auto, burger, gap]
---

[SQLite](https://sqlite.org/) is a C-language library that implements a fast and reliable SQL database engine.
SQlite databases can be created in memory or in simple files so no database server is required.

> We will use the `jsr:@db/sqlite` library for integrating SQLite into our projects.
> Install the library using the following command in a terminal.

```bash
deno add jsr:@db/sqlite
```

> To connect to a database, we need a `db.js` file which exports an instance of the database connection object.

```js
import { Database } from '@db/sqlite';

export const db = new Database("application.db");
```

> We can use this Database object to execute SQL in any scripts we need and within our models.

```js
import { db } from '../tools/db.js';

db.exec(`
CREATE TABLE items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    label TEXT NOT NULL
);`);
```

All our models can use SQL to interact with our SQLite database via `db.exec` and `db.prepare`. 