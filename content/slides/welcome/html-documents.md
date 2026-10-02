---
title: HTML documents
type: slide
classes: [gap]
params: 
    layout:
        cols: 2fr 3fr
---

>**ALL** HTML5 documents consist of a `<!DOCTYPE html>` and an `<html>` element *only*.
**There should be nothing else in the file!**

```html
<!DOCTYPE html>
<html>
    <!-- everything goes here -->
</html>
```


>The `<html>` element should contains *only* a `<head>` element and a `<body>` element. 
Nothing else is allowed as a direct child of the `<html>` element.

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- Meta-data goes here -->
    </head>
    <body>
        <!-- Visible content goes here -->
    </body>
</html>
```

>Within the `<head>` element there should be a `<title>` element and `<meta>` element defining the character set.
You can also add other information about the document, including linked files and scripts.
>All the visible content of the page should be inside the `<body>` element.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"> 
        <title>My amazing webpage</title>
        <!-- More meta-data goes here -->
    </head>

    <body>
        <!-- Visible content goes here -->
    </body>
</html>
```
