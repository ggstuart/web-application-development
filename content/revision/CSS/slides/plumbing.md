---
title: Plumbing
type: slide
classes: []
order: 2
---

> Ideally, we don't want to include style information within the HTML document itself.
> So we put all our style information in separate *CSS files* and use `<link>` elements to link these files into our documents.

```html {hl_lines="8"}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>My page</title>
        <!-- All styling information is in the linked file -->
        <!-- So swapping out a stylesheet is easy -->
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
        <!-- content goes here -->
        <!-- keep style information out of the content -->
    </body>
</html>
```

> This is very flexible.
> A common stylesheet can be used across multiple documents.
> We can also have multiple stylesheets attached to a single document if we want.