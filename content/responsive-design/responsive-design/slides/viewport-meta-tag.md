---
title: Viewport meta tag
type: slide
classes: []
order: 8
---

> You will need a `meta` tag in the `head` of your page.
This is **important**.

```html {hl_lines="5"}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Your page content -->
</body>
</html>
```

> It will tell mobile browsers that your site is optimised for smaller screens and so prevent the mobile browser from attempting to 'help' you by scaling your site down.