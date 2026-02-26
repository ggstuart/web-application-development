---
type: slide
title: Storing files in SQLite
classes: [gap, burger, even, tight-quotes]
---

Storing files in the database requires some simple manipulation of the file object.

> We can store the name and type as text and add a BLOB field for the data.

> Other tables can have associated files.

```sql {class="small", hl_lines="3-5"}
CREATE TABLE files (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    bytes BLOB NOT NULL
);
```
```sql {class="small"}
CREATE TABLE images (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    fileId INTEGER NOT NULL,
    FOREIGN KEY (fileId) REFERENCES files(id)
);
```

> We deconstruct the File object.
The [bytes function](https://developer.mozilla.org/en-US/docs/Web/API/Blob/bytes) gives us our BLOB data.

> The image table has a [random UUID](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) for the URL.

```js {hl_lines="2-3"}
export async function createFile(file) {
    const { name, type } = file;
    const bytes = await file.bytes();
    return db.prepare(`
        INSERT INTO files(name, type, bytes)
        VALUES (:name, :type, :bytes )
        RETURNING id;
    `).get({ name, type, bytes });
}
```

```js {hl_lines=[2, 3, 7]}
export async function createImage({title, file}) {
    const id = crypto.randomUUID();
    const fileRecord = await createFile(file);
    db.prepare(`
        INSERT INTO images (id, title, fileId)
        VALUES (:id, :title, :fileId)
    `).run({id, title, fileId: fileRecord.id});
}
```

You may want to have more specific tables with more fields.
