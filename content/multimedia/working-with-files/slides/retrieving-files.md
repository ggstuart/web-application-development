---
type: slide
title: Retrieving files
classes: [gap, burger, one-three]
---

Our model rebuilds the file.

> Getting data back out of the database requires that we reconstruct the file object.

```js {hl_lines=5}
export function getFile(fileId) {    
    const { type, name, bytes } = db.prepare(
        `SELECT * FROM files WHERE id=:fileId`
    ).get(fileId);
    return new File([bytes], name, { type });
}
```

> The image table is standard

```js
export function getImages() {
    return db.prepare(`SELECT * FROM images;`).all();
}

export function getImage(imageId) {
    return db.prepare(`SELECT * FROM images WHERE id=:imageId;`).get({ imageId });
}
```

The model acts as a simple file store.