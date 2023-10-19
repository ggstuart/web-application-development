---
title: A mobile menu
type: exercise
weight: 30
---

For a bit of fun, we will build a mobile menu which will reduce to a simple icon.
Our menu can be opened or closed by pressing the icon.

<!--more-->

Try it.
This is the final result.

{{<iframe src="menu/final" width="360" height="640">}}{{</iframe>}}

We want to use the simplest possible method for achieving this result.

To embody the toggler, we need a boolean *on/off* switch. 
For this we will add a *checkbox* `<input>` element into the HTML and detect the *:checked* **pseudoclass** in our CSS.

> We could easily achieve this with simple JavaScript variable logic.
> Many solutions involve setting class attributes dynamically using JavaScript click handlers.
> However, this approach is simpler and arguably more accessible.

## Using a checkbox

We can start by demonstrating the core principle.
Create a new project with the following *index.html* file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkbox</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>A mobile menu</h1>
        <input type="checkbox">
    </header>    
</body>
</html>
```

We've added a heading and a checkbox.
We don't need anything else just yet.

Add some styles to indicate how the site might look.

```css
body {
    margin: 0;
    font-family: system-ui;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: oklch(50%, 100%, 0);
    color: oklch(90%, 10%, 0);
    padding: 1rem;
}
h1 {
    margin: 0;
}
```

> I'm using the new [*oklch*](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) colour space because *why not?*

The result is that the checkbox is placed in the location where we might normally see a menu toggler.

{{<iframe src="menu/checkbox" width="360" height="140">}}{{</iframe>}}

Obviously checking the box doe nothing right now.
However, the checkbox has the necessary boolean functionality which we will use to activate our menu.
It is either *checked*, in which case we might activate the menu, or its *unchecked*, which might indicate the menu is closed.

> We could swap these modes so the menu is dismissed when the checkbox is clicked, it makes no difference.
> However, it makes sense for us to start with the checkbox *unchecked*, and the menu hidden.

Let's explore how we might change the page styles based on whether the box is checked.
We will do this with a *pseudoclass* that applies to checkbox elements, *:checked*.

Update the styles with the following:

```css {hl_lines="16-18"}
body {
    margin: 0;
    font-family: system-ui;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: oklch(50%, 100%, 0);
    color: oklch(90%, 10%, 0);
    padding: 1rem;
}
h1 {
    margin: 0;
}
header:has(input:checked) {
    background: oklch(50%, 100%, 200);
}
```

Using the new *:has pseudoclass* allows us to select only `<header>` elements which contain *checked* `<input>` elements.

{{<iframe src="menu/checked" width="360" height="140">}}{{</iframe>}}

Checking the box now changes the colour of the `<header>`.

> This is just an example to demonstrate what we are doing.

## Add a label

Our `<input>` element works well but it doesn't look the part. 
In order to give our users something nicer to click on, we can add a `<label>`.

We need to set the *id* attribute of the `<input>` and the *for* attribute of the `<label>` to the same value, in this case I have named it `"toggler"`.

```html {hl_lines="12-13"}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkbox</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>A mobile menu</h1>
        <label for="toggler">menu</label>
        <input type="checkbox" id="toggler">
    </header>
</body>
</html>
```

When a `<label>` is associated with a *checkbox* (or any `<input>`) in this way, it can be clicked to activate the *checkbox*.
So, clicking the label can toggle our *checkbox*.

We also want to hide the `<input>` element from the user as they can now use the label instead.

```css {hl_lines="16-18"}
body {
    margin: 0;
    font-family: system-ui;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: oklch(50%, 100%, 0);
    color: oklch(90%, 10%, 0);
    padding: 1rem;
}
h1 {
    margin: 0;
}
input {
    display: none;
}
header:has(input:checked) {
    background: oklch(50%, 100%, 200);
}
```

> The reason we do this is because `<input>` elements are notoriously difficult to style.

Now try it.
We've replaced the checkbox with some text, but clicking still toggles the hidden checkbox.

{{<iframe src="menu/label" width="360" height="140">}}{{</iframe>}}

## A *hamburger* icon

For our menu icon, we are going to create three horizontal lines.
We will do this by adding a few elements inside the `<label>` element.
We use `<span>` elements because we are inside an *inline* element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkbox</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>A mobile menu</h1>
        <label for="toggler" aria-label="menu">
            <span></span>
            <span></span>
            <span></span>            
        </label>
        <input type="checkbox" id="toggler">
    </header>
</body>
</html>
```

> Notice we also added an *aria-label* attribute to the `<label>` element.
> Screen-reader software will announce this as the label for the checkbox.

The `<span>` elements are not visible by default.
Having no content, they have no size and so the entire `<label>` element also has no size.

We can change this with some style rules. 
We want the entire icon to be a *1.5rem* square.
It will have a *flexbox* layout so the `<span>` elements are placed in a column, justified with *space-between*.

```css {hl_lines="19-30"}
body {
    margin: 0;
    font-family: system-ui;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: oklch(50%, 100%, 0);
    color: oklch(90%, 10%, 0);
    padding: 1rem;
}
h1 {
    margin: 0;
}
input {
    display: none;
}
label {
    width: 1.5rem;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
label > span {
    background-color: white;
    aspect-ratio: 8;
    border-radius: 3px;
}
header:has(input:checked) {
    background: oklch(50%, 100%, 200);
}
```

The `<span>` elements need a background color and an aspect ratio (try different values to have fatter or thinner lines).
We also added rounded corners for a nicer effect.

The result should look like this:

{{<iframe src="menu/hamburger" width="360" height="140">}}{{</iframe>}}

The label is still clickable, it just looks different now.

## A *cross* icon

Now we want the icon to change to a cross when the menu is open. 
This will indicate that the menu can be closed by clicking the cross.

To do this, again all we need is CSS.

> Selecting the individual `<span>` elements requires a fairly complex selector.
> ```css {linenos="false"}
> header:has(input:checked) label > span:nth-child(2) {
>     opacity: 0;
> }
> ```
> Here we select the second `<span>` and set it's *opacity* to zero (so it disappears) when the *checkbox* is *checked*.

The code is complex and we won't describe how to develop this kind of thing in detail. 
Just realise that the cross is formed in three steps:
1. We move the remaining `<span>` elements to the middle.
1. We rotate them 45 degrees (in opposite directions).
1. We scale them to stretch to the corners of the label.

Here's the code.

```css {hl_lines="30 33-45"}
body {
    margin: 0;
    font-family: system-ui;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: oklch(50%, 100%, 0);
    color: oklch(90%, 10%, 0);
    padding: 1rem;
}
h1 {
    margin: 0;
}
input {
    display: none;
}
label {
    width: 1.5rem;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
label > span {
    background-color: white;
    aspect-ratio: 8;
    border-radius: 3px;
    transition: 400ms;
}

header:has(input:checked) label>span:nth-child(1) {
    scale:1.41 1;
    translate: 0 0.65rem;
    rotate: 0.125turn;
}
header:has(input:checked) label>span:nth-child(2) {
    opacity: 0;
}
header:has(input:checked) label>span:nth-child(3) {
    scale: 1.41 1;
    translate: 0 -0.65rem;
    rotate: -0.125turn;
}
```

Notice that we also added a *transition* rule to the `<span>` elements.
This causes the changes to be animated over *400ms*.

Now we have a beautiful animated icon.

{{<iframe src="menu/cross" width="360" height="140">}}{{</iframe>}}

## Add a navigation menu

OK, it's time to add an actual menu to our document.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkbox</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>A mobile menu</h1>
        <label for="toggler" aria-label="menu">
            <span></span>
            <span></span>
            <span></span>            
        </label>
        <input type="checkbox" id="toggler">
        <nav>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
        </nav>
    </header>
</body>
</html>
```

The first thing we need to do is to remove the `<nav>` element from the normal flow by setting it's *position* property to *fixed*.
This will allow us to position the menu relative to the viewport.
By also setting it's *inset* property to *0*, we are effectively stretching the element across the entire viewport.
To see the impact, we need to give it a slightly transparent background.

We also tidy up the links and apply a simple *flexbox* layout to present the links as a column.

```css {hl_lines="25 47-60"}
body {
    margin: 0;
    font-family: system-ui;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: oklch(50%, 100%, 0);
    color: oklch(90%, 10%, 0);
    padding: 1rem;
}
h1 {
    margin: 0;
}
input {
    display: none;
}
label {
    width: 1.5rem;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
}
label > span {
    background-color: white;
    aspect-ratio: 8;
    border-radius: 3px;
    transition: 400ms;
}

header:has(input:checked) label>span:nth-child(1) {
    scale:1.41 1;
    translate: 0 0.65rem;
    rotate: 0.125turn;
}
header:has(input:checked) label>span:nth-child(2) {
    opacity: 0;
}
header:has(input:checked) label>span:nth-child(3) {
    scale: 1.41 1;
    translate: 0 -0.65rem;
    rotate: -0.125turn;
}
nav {
    position: fixed;
    inset: 0;
    background: oklch(50% 50 0 / 0.8);
    display: flex;
    flex-direction: column; 
    padding: 1rem;
    gap: 1rem;
}
nav a {
    color: inherit;
    text-decoration: none;
    font-size: 2em;
}
```

> We also brought the menu toggler to the front by setting it's *z-index* property.

The result is a menu, pretty much as we want it. 
However, its always open.

{{<iframe src="menu/menu-01" width="360" height="640">}}{{</iframe>}}

We will close it by moving it off the viewport to the right when the `<input>` is not *checked*. 

```css {hl_lines="31 55 62-64"}
body {
    margin: 0;
    font-family: system-ui;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: oklch(50%, 100%, 0);
    color: oklch(90%, 10%, 0);
    padding: 1rem;
}
h1 {
    margin: 0;
}
input {
    display: none;
}
label {
    width: 1.5rem;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
}
label > span {
    background-color: white;
    aspect-ratio: 8;
    border-radius: 3px;
    transition: 400ms 650ms;
}

header:has(input:checked) label>span:nth-child(1) {
    scale:1.41 1;
    translate: 0 0.65rem;
    rotate: 0.125turn;
}
header:has(input:checked) label>span:nth-child(2) {
    opacity: 0;
}
header:has(input:checked) label>span:nth-child(3) {
    scale: 1.41 1;
    translate: 0 -0.65rem;
    rotate: -0.125turn;
}
nav {
    position: fixed;
    inset: 0;
    background: oklch(50% 50 0 / 0.8);
    display: flex;
    flex-direction: column; 
    padding: 1rem;
    gap: 1rem;
    transition: translate 600ms;
}
nav a {
    color: inherit;
    text-decoration: none;
    font-size: 2em;
}
input:not(:checked) + nav {
    translate: 100dvw;
}
```

We have activated the menu with this simple change. 
Plus we have also added a *transition* to the `<nav>` movement to create a nice animation.
Finally, we also added a *transition-delay* to the icon animation so the icon doesn't animation until the menu has finished moving.

A pretty nice result.

{{<iframe src="menu/final" width="360" height="640">}}{{</iframe>}}


## Conclusions

We have seen that using CSS styles we can create interesting user experiences.
In this case we reduced the screen real estate needed by the menu by having the entire menu placed outside of the viewport.

The *translate*, *rotate* and *scale* properties open up many possibilities.

## Challenges

Expand the site with some content and add media queries to restyle the menu to be placed within the header when there is more space available.
