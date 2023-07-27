---
title: An HTML template
type: exercise
weight: 10
author: Dr Graeme Stuart
---

This is a brief explanation of an empty HTML template and how to quickly generate one in VSCode.

<!--more-->

## Opening a folder

When you open VSCode, you should see a series of icons on the left-hand side.
Click the top one to open the *file explorer*.

You should see something like this.

{{<figure caption="open folder" src="open-folder.png">}}

Open a new folder in VSCode.
When you have opened a folder, you should see the file explorer panel that you can use to manage your project.
It can be toggled on and off using the top-left icon or *ctrl+b*.

## Creating a new file

There are many ways to create a new file including pressing *ctrl-n*, right-clicking in the file explorer panel or clicking the *new file* icon at the top of the file explorer panel. 

Create a new file named **index.html**.

{{<figure caption="create file" src="create-file.png">}}

> index.html is the *default filename* for an HTML file.
In standard configurations, when a web server receives a request for a folder, if there is an **index.html** file in the folder then this will be served by default.

## A minimum HTML template

Create a basic HTML document.
The minimum HTML template looks something like this.

```html {linenos=true}
<!DOCTYPE html>
<html>
<head>
    <title>This is a minimal template</title>
</head>
<body>
    
</body>
</html>
```

### the `<!DOCTYPE>`

At the top of every HTML file, we need to provide something called a *doctype*.
This is a declaration that software can read to understand that the file should be interpreted as HTML (and crucially, which *version* of the HTML standard to use).

```html {hl_lines="1"}
<!DOCTYPE html>
<html>
<head>
    <title>This is a minimal template</title>
</head>
<body>
    
</body>
</html>
```

Our template contains a simple "html" *doctype* which indicates the browser should use the current, most modern HTML standards.

> The *doctype* is only really needed for legacy purposes.
> Note that an HTML document written in 1992 would look quite different from a modern document, but it will still be rendered correctly by modern browsers if the older doctype is set correctly.


### the `<html>` element

The *doctype* is followed by the `<html>` element.
This is where **all** the content for the page is stored.

A valid HTML document consists of a doctype and an `<html>` element.

>There should be **nothing else in the file**.

```html {hl_lines="2-9"}
<!DOCTYPE html>
<html>
<head>
    <title>This is a minimal template</title>
</head>
<body>
    
</body>
</html>
```

### the `<head>` element

Within the `<html>` element there is a `<head>` element.
The `<head>` element is not visible on the page, it contains information *about* the document.
In this case, it contains only a `<title>` element.

> The content of the `<title>` element is not visible on the page, but it will typically appear in the browser tab when viewing the document.

```html {hl_lines="3-5"}
<!DOCTYPE html>
<html>
<head>
    <title>This is a minimal template</title>
</head>
<body>
    
</body>
</html>
```

### the `<body>` element

The `<body>` element is where we will add all the visible parts of the document.

```html {hl_lines="6-8"}
<!DOCTYPE html>
<html>
<head>
    <title>This is a minimal template</title>
</head>
<body>
    
</body>
</html>
```

## Using emmet

You may have noticed when you type something into VSCode, the editor offers suggestions and options.
Some of these are driven by a tool called emmet which is built into VSCode as well as other editors.

> You can research emmet here and may find [this emmet cheatsheet](https://docs.emmet.io/cheat-sheet/) useful

For example, if you delete all the code in **index.html** and place your cursor in the file then you can type a single exclamation mark (!) to trigger the basic HTML5 template.

{{<figure caption="Emmet HTML5 template" src="emmet-template.png">}}

Press *enter* or *tab* to add the template into the file.
You should get something like this.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Notice a few upgrades to our template above.

### A `lang` attribute

There's a `lang` attribute on the `<html>` element.

```html {hl_lines="2"}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

This allows browsers to know the primary language of the page.
This supports tools such as search engines and browser-based translation.

### The `charset` `<meta>` tag

Inside the `<head>` element we also have a `<meta>` tag (it has no closing tag because it is a `void` element) declaring the character set for the document.

```html {hl_lines="4"}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Typically declaring a `UTF-8` character set is good for most documents. 
If you need to use a different character set, this is where you would declare it.

### The `viewport` `<meta>` tag

There's another `<meta>` tag.
This one is for the viewport.

> In the early days of mobile browsers, most sites were (obviously) not designed to be viewed on tiny screens.
> The solution was to emulate a larger viewport, so mobile browsers will *zoom out* by default.
>
> This additional tag is now necessary to tell the browser that the viewport should be the real device width and should not be zoomed out.

```html {hl_lines="5"}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

It tells mobile browsers not to mess with the viewport.

## Conclusion

This exercise has hopefully been pretty straight forward.
We have a simple way to create a template for a new HTML document using the default emmet template in VSCode.

It's important to be aware of the details, but you don't need to worry too much about them when coding. 
Just be aware that each piece of the default template has a purpose, and that you should think twice before messing with it.

> Critically, you should be very careful about how you put together an HTML document. 
Developing good habits in terms of nesting and indentation is very important.
We will talk more about this in the next lab.