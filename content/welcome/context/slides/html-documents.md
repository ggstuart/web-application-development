---
title: HTML documents
type: slide
order: 12
classes: [even, docs]
---

>**ALL** HTML5 documents consist of a `<!DOCTYPE html>` and an `<html>` element *only*.
**There should be nothing else in the file!**

```html
<!DOCTYPE html>
<html></html>
```



```html
<!DOCTYPE html>
<html>
    <head></head>
    <body></body>
</html>
```

>The `<html>` element should contains *only* a `<head>` element and a `<body>` element. 
Nothing else is allowed as a direct child of the `<html>` element.

>Within the `<head>` element there should be a `<title>` element and `<meta>` element defining the character set.
You can also add other information about the document, including linked files and scripts.
>All the visible content of the page should be inside the `<body>` element.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"> 
        <title>My amazing webpage</title>
    </head>

    <body>
    <!-- your document content goes here -->
    </body>
</html>
```
