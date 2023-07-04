---
title: A basic index template
type: exercise
weight: 30
---

We need to build an accessible set of HTML templates for our application.

<!--more-->

In this exercise, we will start by building out a static page representing a collection of *todo-lists*.

> You should have already created a new folder in your file system for this project.
> Make sure you open this folder in VSCode.

## A basic template

We can begin by creating a new file `index.html` and using the built-in HTML5 template.

> Type either `html:5` or `!` into your empty file and select the html5 template.

You can change the `<title>` element contents to give a suitable title for the page.

```html {linenos=true}
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO Lists</title>
</head>

<body>

</body>

</html>
```

### Core page structure

Now we we need to add some semantic page structure inside the `<body>` element.

- a `<header>` to contain the page title
- a `<main>` for the main content of the page
- a `<footer>` to hold author/copyright information about the page

Add the following into the file.

```html {hl_lines=["12-20"]}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO Lists</title>
</head>

<body>

    <header>
        <h1>TODO Lists</h1>
    </header>
    
    <main>
    </main>

    <footer>&copy; Graeme Stuart 2023</footer>

</body>

</html>
```

Inside the header we have added a simple `<h1>` element with our page title.
This will be visible in the page, unlike the `<title>` element.

We've also added a copyright notice to the footer, it's also a good place for additional links.

> The header and footer content will be repeated on every page of our app.

We have left the `<main>` element blank.
This is where the content for each page will appear.
On the **index.html** page, we need to present a list of *todo-lists*.

### Adding a list

The index page will present a list of *todo-list* entities, showing the list *name* as the main content.

> Note: our *todo-lists* will need a *name* field in order to identify individual lists.

We can add a `<ul>` element.
A `<ul>` is an unordered list.
By default, each item in the list will have a bullet point.

> for numbered (ordered) lists, we could use a `<ol>` element. 

```html {hl_lines=["17-19"]}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO Lists</title>
</head>

<body>

    <header>
        <h1>TODO Lists</h1>
    </header>
    
    <main>
        <ul>

        </ul>
    </main>

    <footer>&copy; Graeme Stuart 2023</footer>

</body>

</html>
```

### List items

Inside our `<ul>`, we can add `<li>` elements for each *todo-list*.

> For now, let's consider each *todo-list* to only have a *name*.
> The HTML for an individual *todo-list* list item can look like this:
> ```html
> <li class="todo-list">
>   <h2 class="title">This is the todo-list title</h2>
> </li>
> ```
> We will need to add to this later on.

Insert five copies of the above pattern into our template as follows

```html {hl_lines=["18-32"]}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO Lists</title>
</head>

<body>

    <header>
        <h1>TODO Lists</h1>
    </header>

    <main>
        <ul>
            <li class="todo-list">
                <h2 class="title">This is a todo-list</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">This is another todo-list</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">A third todo-list</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">list 4</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">The fifth todo-list</h2>
            </li>
        </ul>
    </main>

    <footer>&copy; Graeme Stuart 2023</footer>

</body>

</html>
```

> It's possible to use emmet to add repeated HTML structures like this.
>
> If you want to use emmet, you can try this inside the `<ul>`:
> ```perl
> li.todo-list*5>h2.title{list title $}
> ```
> Or, to recreate the entire `<main>` element:
> ```perl
> main>ul>li.todo-list*5>h2.title{list title $}
> ```

### View the list

Start the *live server* extension to view the document in the browser if you have not already done so.

{{<figure caption="a basic index page" src="images/step-01.png">}}


You should see something like this.
It's not fancy of course, but the list is functional.
Although it doesn't link to a database yet, it does meet one of the user stories.

> As a user, I need to **view** all the available *todo-lists*


## Adding some styles

To add some styles we need to link to a CSS file.

The easiest way to do this is to rely on emmet.
Simply type the word "link" into the `<head>` element of your document and choose the CSS option from the list that appears.

{{<figure src="images/link-css-emmet.png" caption="using emmet to add a `<link>` to a css file">}}

We will accept the default file name, This should add a `<link>` element like this.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO Lists</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header>
        <h1>TODO Lists</h1>
    </header>

    <main>
        <ul>
            <li class="todo-list">
                <h2 class="title">This is a todo-list</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">This is another todo-list</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">A third todo-list</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">list 4</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">The fifth todo-list</h2>
            </li>
        </ul>
    </main>

    <footer>&copy; Graeme Stuart 2023</footer>

</body>

</html>
```