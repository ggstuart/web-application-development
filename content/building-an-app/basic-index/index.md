---
title: A basic interface
type: exercise
weight: 10
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

    <footer>
        <p>&copy; Graeme Stuart 2023</p>
    </footer>

</body>

</html>
```

Inside the header we have added a simple `<h1>` element with our page title.
This will be visible in the page, unlike the `<title>` element.

We've also added a paragraph with a copyright notice to the footer, it's also a good place for additional links.

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

    <footer>
        <p>&copy; Graeme Stuart 2023</p>
    </footer>

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

    <footer>
        <p>&copy; Graeme Stuart 2023</p>
    </footer>

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

You should see something like this.

{{<figure caption="a basic index page" src="images/step-01.png">}}

It should look exactly like [this page](step-01)

It's not fancy of course, but the list is functional.
Although it doesn't link to a database yet, it is a first step towards meeting one of the user stories.

> As a user, I need to **view** all the available *todo-lists*


## Adding some styles

To add some styles we need to link to a CSS file.

The easiest way to do this is to rely on emmet.
Simply type the word "link" into the `<head>` element of your document and choose the CSS option from the list that appears.

{{<figure src="images/link-css-emmet.png" caption="using emmet to add a `<link>` to a css file">}}

We will accept the default file name **style.css**, it should add a `<link>` element like this.

```html {hl_lines="8"}
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

    <footer>
        <p>&copy; Graeme Stuart 2023</p>
    </footer>

</body>

</html>
```

So, we must also create the CSS file, **style.css**. 

> At this point, to ensure a mobile-first design, we should open the device toolbar in the developer tools and set the viewport to a narrow, mobile size.

We can start by adding some color, just to check we are *plumbed in* correctly.

```css
body {
    background-color: hsl(100 50% 30%);
    color: hsl(100 50% 90%);
}

ul {
    background-color: hsl(200 50% 50%);
}

li {
    backdrop-filter: brightness(0.6);
}
```

> Remember you can use the devTools to tick and untick individual style rules to see their impact.

Again, view the document in the browser to check everything is working correctly.

You should see something like this.

{{<figure src="images/step-02.png" caption="adding some colour">}}

Here's a [live version of the page](step-02).
Yours should look similar.

> choose your own colours, but keep contrast in mind. 
> i.e. avoid having dark text on a dark background, mak sure it's clearly readable for people with visual impairments.

Looking closely, our changes have revealed some of the default styles more clearly.

- The `<body>` element has a margin which separates the `<ul>` from the edge of the viewport
- The `<ul>` also has left padding which makes room for the bullet points.
- The `<h2>` elements have margin which is *overflowing* the `<li>` elements (and the `<ul>`).

In addition, we can discover the following by using the devTools.

- The `<ul>` has a margin which is *overflowing* the `<main>` element.
- The `<h1>` has a margin which is *overflowing* the `<header>` element.

> Understanding all of the above is a great start when trying to get to grips with styling.

### Some minor CSS resetting

It's definitely worthwhile becoming familiar with the default styles that elements are given.
However, to handle these situations in a simple way, we are going to remove some of the default styles from *all* elements.
We will also remove the list markers (though they are now hidden anyway).

```css {hl_lines="1-4 12"}
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: hsl(100 50% 30%);
    color: hsl(100 50% 90%);
}

ul {
    list-style: none;
    background-color: hsl(200 50% 50%);
}

li {
    backdrop-filter: brightness(0.6);
}
```

removing the margins makes all the content bunch up together.

{{<figure caption="CSS reset" src="images/step-03.png">}}

You should see something identical to [step-03](step-03).

### Giving elements some space

Now we can set about adding space back into the page and choosing the layout more carefully.

We will start with some inline (i.e. left/right) padding on all the elements with content.
This will keep the content away from the edge of the viewport.

```css {hl_lines="19-25"}
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: hsl(100 50% 30%);
    color: hsl(100 50% 90%);
}

ul {
    list-style: none;
    background-color: hsl(200 50% 50%);
}

li {
    backdrop-filter: brightness(0.6);
}

header,
li,
footer {
    padding-inline: 0.5rem;
}
```

> We use `rem` units because these are independent of the font size and so everything lines up.

Then we can also add some block (i.e. top/bottom) margin to the headings and paragraph to make some breathing room.

```css {hl_lines="25-30"}
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: hsl(100 50% 30%);
    color: hsl(100 50% 90%);
}

ul {
    list-style: none;
    background-color: hsl(200 50% 50%);
}

li {
    backdrop-filter: brightness(0.6);
}

header,
li,
footer {
    padding-inline: 0.5rem;
}

h1,
h2,
p {
    margin-block: 0.5em;
}
```

> We use `em` units here because they will be relative to the font size.
Larger fonts in the `<h1>` and `<h2>` get more room than smaller fonts in the `<p>`.

Finally, we need to make sure the `<header>` and `<li>` elements contain the margins of their contents by setting them to `overflow: auto`.

> If your not sure what this does, check the impact in the devTools.

```css {hl_lines="31-36"}
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: hsl(100 50% 30%);
    color: hsl(100 50% 90%);
}

ul {
    list-style: none;
    background-color: hsl(200 50% 50%);
}

li {
    backdrop-filter: brightness(0.6);
}

header,
li,
footer {
    padding-inline: 0.5rem;
}

h1,
h2,
p {
    margin-block: 0.5em;
}

header,
li {
    overflow: auto;
}
```

{{<figure caption="Everything now has room to breathe" src="images/step-04.png">}}

The site is now looking more intentional and notice how all the elements line up vertically because they are all `0.5rem` from the left edge.

The [live page](step-04) is beginning to look respectable.

### Make it a bit fancier

Now we will add some final tweaks.

Starting with a custom font (you choose a different one as you like).

```css {hl_lines="1 11-12 15-21"}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

* {
    margin: 0;
    padding: 0;
}

body {
    background-color: hsl(100 50% 30%);
    color: hsl(100 50% 90%);
    font-family: "Roboto";
    font-weight: 200;
}

h1 {
    font-weight: 400;
}

h2 {
    font-weight: 300;
}

ul {
    list-style: none;
    background-color: hsl(200 50% 50%);
}

li {
    backdrop-filter: brightness(0.6);
}

header,
li,
footer {
    padding-inline: 0.5rem;
}

h1,
h2,
p {
    margin-block: 0.5em;
}

header,
li {
    overflow: auto;
}
```

> In the above code, we have used the [Roboto font](https://fonts.google.com/specimen/Roboto) with thinner font weights than normal (200, 300 and 400).

To make the list items stand out we are setting the `<ul>` to `display: grid` and giving the grid a `gap`.
We also put the footer on the right using a simple `text-align`.

```css {hl_lines="26-27 51-53"}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

* {
    margin: 0;
    padding: 0;
}

body {
    background-color: hsl(100 50% 30%);
    color: hsl(100 50% 90%);
    font-family: "Roboto";
    font-weight: 200;
}

h1 {
    font-weight: 400;
}

h2 {
    font-weight: 300;
}

ul {
    list-style: none;
    background-color: hsl(200 50% 50%);
    display: grid;
    gap: 1px;
}

li {
    backdrop-filter: brightness(0.6);
}

header,
li,
footer {
    padding-inline: 0.5rem;
}

h1,
h2,
p {
    margin-block: 0.5em;
}

header,
li {
    overflow: auto;
}

footer {
    text-align: right;
}
```

Checkout [the result](step-05).
This is now looking fine. 

{{<figure caption="OK, this looks good enough" src="images/step-05.png">}}
