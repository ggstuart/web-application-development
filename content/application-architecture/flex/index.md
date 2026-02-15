---
title: Flexbox
type: exercise
weight: 20
author: Dr Graeme Stuart
---

The *flexible box* or *flexbox* layout provides a simple way to organise elements into rows *or* columns *within* a parent element.

<!--more-->

It is extremely useful for many basic tasks and provides a comprehensive (and **much easier**) replacement for older approaches to layout using e.g. *float* and *position*.
Flexbox is often used together with *grid* layout which we shall explore in the next exercise.


## What is flexbox?

Consider how *block* elements behave in the default *flow* layout. 
They always start on a *new line* and take the full width of their container.
So they flow down the page and cannot appear next to each other in a row.

The only way to make something flow into the page horizontally is to use inline elements such as `<span>` elements.

{{<iframe src="examples/demo/block.html" width="1000" height="400">}}{{</iframe>}}

> Not strictly true. 
> We can also use the *float* property to make this happen.
> This was common practice for a long time, but it's not very flexible and it causes side effects. 
> Now flex is available, we can stick to using [*float*](https://developer.mozilla.org/en-US/docs/Web/CSS/float) for pulling elements out of the normal flow.

Flex allows us to place elements next to each other, in a row.
Though it can also be used to organise elements in a column.
Critically, flex typically only works with *one* row or column.
If you want multiple rows/columns, then *grid* may be more appropriate.

In the below example, the yellow elements are have their *display* property set to *flex*.
This creates a new *flexbox* formatting context, which controls the layout of the red child elements.

{{<iframe src="examples/demo/flex.html" width="1000" height="400">}}{{</iframe>}}

Each of the yellow elements is an example of using *display: flex* to position child elements.
The various examples show a range of different settings, leading to different positioning of the child elements.

In a typical example using *flex-direction: row* (the default), the yellow elements might be `<section>`, `<article>`, `<nav>`, `<ul>` or `<div>` elements (though they can be any element) and the contained elements could be images, paragraphs, links or any elements that need to be placed in a row.

> Flexbox is applied to the parent element and creates a formatting context within which new layout rules apply.
> However, be aware that the formatting context *inside* the children of *flex* elements returns back to the default *flow layout*.

## Using flexbox

In this exercise we will build a basic page making use of the default *flow* layout but we will use *flexbox* to control parts of the layout.

A common use-case for flexbox is to style navigation menus.
Start with an empty document and add the following navigation menu.


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Flexbox layouts</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <nav>
            <a href="#">Lorem</a>
            <a href="#">Quis</a>
            <a href="#">Fugiat</a>
            <a href="#">Deleniti</a>
            <a href="#">Cupiditate</a>
        </nav>
    </body>
</html>
```

Now, we can add some styles to see exactly what is going on.

```css
body {
    font-family: system-ui;
    font-size: 1.3rem;
    margin: 0;
}

body * {
    background-color: hsl(0, 100%, 50%, 0.1);
}
```

For the whole page we have set the font to the *system-ui* font, which is usually a lot better than the default and we've made it a bit larger than the default using the *font-size* property.
We also removed the default *margin*.

We also added a background transparency to help us keep track of where the elements are.
We've not added background colour to the `<body>` element itself, only elements inside the body.

The result is already a reasonable menu because the `<nav>` is a *block* element, taking up the full width (within the default `<body>` *margins*) and the `<a>` elements are *inline* so they behave linke text.

> Notice the links have spaces between them because there are newline characters between the elements in the code.

{{<iframe src="examples/menu/step-01" width="1000" height="150">}}{{</iframe>}}

Now, convert the `<nav>` element to `display: flex`.


```css {hl_lines="10-13"}
body {
    font-family: system-ui;
    font-size: 1.3rem;
    margin: 0;
}

body * {
    background-color: hsl(0, 100%, 50%, 0.1);
}

nav {
    display: flex;
}
```

It looks like all it did was remove the spaces between the links.

{{<iframe src="examples/menu/step-02" width="1000" height="150">}}{{</iframe>}}

But the change is much more significant than it seems.
Now the `<a>` elements inside our `<nav>` are no longer *inline* elements.
They are now known as *flex-item* elements and are under the control of the *flexbox* layout system.

> This applies to the *direct children* only.

Flexbox gives us a few important properties that we can play with. 
The most obvious ones being *justify-content* and *gap*.

### Justify-content

The *justify-content* property will determine how our `<a>` elements are distributed across the width of the `<nav>`.

> The flexbox algorithm uses the width of each *flex-item* and the width of the parent element to calculate the available space. 
> The *justify-content* property controls how this available space is distributed.

The *default* value is *flex-start* which places all the elements on the left side.

> Or, looking at it from another perspective, it places all the spare space on the right side.

Try setting the *justify-content* property to each of these values in turn:
```css {linenostart="11"}
nav {
    display: flex;
    justify-content: flex-end;
    /* justify-content: center; */
    /* justify-content: space-between; */
    /* justify-content: space-around; */
}
```

We'll choose *flex-end* for now, so the elements are pushed to the right. 

{{<iframe src="examples/menu/step-03" width="1000" height="150">}}{{</iframe>}}

Obviously, we still have a problem.
There is no gap between our links.

### gap

The *gap* property allows us to specify a minimum gap between our `<a>` elements.
Let's add a small gap, using *em* units so the gap size is relative to the font-size.

```css {hl_lines="14"}
body {
    font-family: system-ui;
    font-size: 1.3rem;
    margin: 0;
}

body * {
    background-color: hsl(0, 100%, 50%, 0.1);
}

nav {
    display: flex;
    justify-content: flex-end;
    gap: 0.5em;
}
```

The result is starting to look a bit better.

{{<iframe src="examples/menu/step-04" width="1000" height="150">}}{{</iframe>}}

### Box properties and tweaks

We usually want to style `<a>` elements inside `<nav>` elements slightly differently from normal links. Their placement on the page should make it obvious that they are links, so we can remove the default link styles.

> By default, `<a>` elements have a blue *color* property and *text-decoration* set to *underline*.
> This is important to distinguish clickable links from normal text.

We'll set the *color* property to *inherit* (just like most elements) so the links take on whatever *color* is set on their parent `<nav>` (which it will inherit from the `<body>`).

```css {hl_lines="16-21"}
body {
    font-family: system-ui;
    font-size: 1.3rem;
    margin: 0;
}

body * {
    background-color: hsl(0, 100%, 50%, 0.1);
}

nav {
    display: flex;
    justify-content: flex-end;
    gap: 0.5em;
}

nav a {
    text-decoration: none;
    color: inherit;
    padding: 0.25em 0.5em;
}
```

We also gave our links a bit of padding.
Our links are *flex-item* elements and so they will obey the box model and the `<nav>` will expand to contain them (unlike if they were *inline* elements).

{{<iframe src="examples/menu/step-05" width="1000" height="150">}}{{</iframe>}}

This looks OK, but the only visual indication that the element is clickable is a change in the cursor when we hover over the links with our mouse.
We want to make it a bit more obvious.


So, we can add a *nav a:hover* selector, *:hover* is a *pseudoclass* that indicates these styles should only be applied when the mouse is hovering over the element. 

```css {hl_lines="22-25"}
body {
    font-family: system-ui;
    font-size: 1.3rem;
    margin: 0;
}

body * {
    background-color: hsl(0, 100%, 50%, 0.1);
}

nav {
    display: flex;
    justify-content: flex-end;
    gap: 0.5em;
}

nav a {
    text-decoration: none;
    color: inherit;
    padding: 0.25em 0.5em;
}

nav a:hover {
    background-color: rgb(255, 255, 255, 0.2);
}
```

Hover your mouse over the links.
The result is subtle but makes it clearer to the user that the links are clickable.

{{<iframe src="examples/menu/step-06" width="1000" height="150">}}{{</iframe>}}

> Sometimes designers add *text-decoration: underline* to the *:hover* styles only.
> This is fine for this situation because the links will be prominent in the page but links **must** stand out from normal text when not in the *:hover* state. 

One common addition to this kind of *:hover* style is to add a *transition* animation.
So, the *background-color* property is animated over a short period rather than suddenly changing.

To do this, we can add a [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) property to the links, telling the browser to animate the *background-color* property over *400ms*.


```css {hl_lines="21"}
body {
    font-family: system-ui;
    font-size: 1.3rem;
    margin: 0;
}

body * {
    background-color: hsl(0, 100%, 50%, 0.1);
}

nav {
    display: flex;
    justify-content: flex-end;
    gap: 0.5em;
}

nav a {
    text-decoration: none;
    color: inherit;
    padding: 0.25em 0.5em;
    transition: background-color 400ms;
}

nav a:hover {
    background-color: rgb(255, 255, 255, 0.2);
}
```

The final result is a subtle animation.

{{<iframe src="examples/menu/step-07" width="1000" height="150">}}{{</iframe>}}

> I usually like a short animation for this kind of thing. 
> Try longer times e.g. *1.5s* to see why.

OK, the menu is basically finished.
Now we want to place it in a header alongside a page title.

### align-items

Beyond the simple *justify-content* and *gap* properties, we can also control how much space each *flex-item* element takes up along the main (horizontal) axis and how items are positioned on the *cross-axis* (i.e. the vertical axis).

> You can read up on [basic concepts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) for more information.

A crucial property of interest is *align-items* which controls how items are positioned on the *cross-axis*.
In our example, all the elements have the same height, so there is no spare space above and below the links.
In fact, because the *align-items* property defaults to the value *stretch*, if we increase the height of the `<nav>` element, the links would stretch to take the full height. 

> Try it, if you like.
> Add *height: 100px* to the `<nav>` and you should see the links get taller.

To help demonstrate, we will expand our document by adding a new `<header>` element with an `<h1>` for the page. 
Our `<nav>` will be placed inside the `<header>`, after the `<h1>` like this.

```html {hl_lines="10-11 19"}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Flexbox layouts</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>Lorem ipsum</h1>
            <nav>
                <a href="#">Lorem</a>
                <a href="#">Quis</a>
                <a href="#">Fugiat</a>
                <a href="#">Deleniti</a>
                <a href="#">Cupiditate</a>
            </nav>
        </header>
    </body>
</html>
```

Without any styling, the result is a bit confusing.
Remember that our `<h1>` element takes up the full width of the `<header>` and has a large top/bottom *margin* by default.
The top *margin* is overflowing the top of the `<header>` element revealing the `<body>` underneath.
The bottom *margin* is causing a gap between the `<h1>` and the `<nav>`, revealing the `<header>` element background.

> Study this in the chrome developer tools to make sure you understand what's going on.

{{<iframe src="examples/menu/step-08" width="1000" height="200">}}{{</iframe>}}

Our first move is to make the entire `<header>` element *display: flex*.

```css {hl_lines="10-13"}
body {
    font-family: system-ui;
    font-size: 1.3rem;
    margin: 0;
}

body * {
    background-color: hsl(0, 100%, 50%, 0.1);
}

header {
    display: flex;
}

nav {
    display: flex;
    justify-content: flex-end;
    gap: 0.5em;
}

nav a {
    text-decoration: none;
    color: inherit;
    padding: 0.25em 0.5em;
    transition: background-color 400ms;
}

nav a:hover {
    background-color: rgb(255, 255, 255, 0.2);
}
```

This has the effect of placing the `<h1>` and `<nav>` in a single row.

> It also brings the `<h1>` margins inside the `<header>`.

{{<iframe src="examples/menu/step-09" width="1000" height="200">}}{{</iframe>}}

There are two important observations we can make:

On the *main axis* (left/right) both elements are taking up the full width of their contents and the additional space is placed on the right.
This is controlled by the *justify-content* property which is set to *flex-start* by default.
We will change this to *space-between* to put the additional space *in between* the elements, pushing them to the outer edges. 

On the *cross axis* (up/down) the `<header>` height is controlled by the tallest element (the `<h1>` plus it's margin) and the `<nav>` element is then stretching to take up the full height of the `<header>`.
This is controlled by *align-items* property which is set to *stretch* by default.
We will change this to *center* to allow the `<nav>` to take its natural height and float in the middle of the `<header>`.

Here's the updated code:


```css {hl_lines="13-14"}
body {
    font-family: system-ui;
    font-size: 1.3rem;
    margin: 0;
}

body * {
    background-color: hsl(0, 100%, 50%, 0.1);
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav {
    display: flex;
    justify-content: flex-end;
    gap: 0.5em;
}

nav a {
    text-decoration: none;
    color: inherit;
    padding: 0.25em 0.5em;
    transition: background-color 400ms;
}

nav a:hover {
    background-color: rgb(255, 255, 255, 0.2);
}
```

The result is pretty neat considering how little code we added.

{{<iframe src="examples/menu/step-10" width="1000" height="200">}}{{</iframe>}}

Be careful to understand that we have two nested *flex* elements which we can control independently. 

1. The `<a>` links are being positioned by the rules we add to the `<nav>` element.
1. The `<h1>` and the `<nav>` are being positioned by the rules we add to the `<header>` element.

### final tweaks

Now we have the basic positioning as we want it, we can make a few final adjustments to the styles.
The code will be presented at the end.

Firstly, we can remove the transparency from all the elements and give the `<header>` a basic colour scheme.

{{<iframe src="examples/menu/step-11" width="1000" height="200">}}{{</iframe>}}

Now we are getting to the final few minor tweaks which can elevate a design significantly.
Notice that the text in the `<h1>` is very close to the edge of the viewport and the height of the `<header>` is being controlled by the default *margin* on the `<h1>`.

To fix this, we can remove the *margin* from the `<h1>` element and add some *padding* around the `<header>`.

{{<iframe src="examples/menu/step-12" width="1000" height="200">}}{{</iframe>}}

Finally (and optionally) we can remove the *gap* from the `<nav>` because the links have *padding* which keeps them separate and we can add rounded corners to the `<a>` elements.

{{<iframe src="examples/menu/step-13" width="1000" height="200">}}{{</iframe>}}

What a nice result &#128526;.

These are the code changes:

```css {hl_lines="11-13 16-19 30"}
body {
    font-family: system-ui;
    font-size: 1.3rem;
    margin: 0;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsl(0, 50%, 50%);
    color: white;
    padding: 1rem 0.5rem;
}

h1 {
    margin: 0;
}

nav {
    display: flex;
    justify-content: flex-end;
}

nav a {
    text-decoration: none;
    color: inherit;
    padding: 0.25em 0.5em;
    transition: background-color 400ms;
    border-radius: 5px;
}

nav a:hover {
    background-color: rgb(255, 255, 255, 0.2);
}
```

## Challenges

It's easy going through examples and typing code.
Solving some problems should help you to absorb the knowledge more fully.

### Play flexbox games

Try playing [flexbox defense](http://www.flexboxdefense.com/), [flexbox froggy](https://flexboxfroggy.com/) or [flex box adventure](https://codingfantasy.com/games/flexboxadventure) to consolidate what you have learned.

### Spread the links out

> Make a backup of the code before doing any damage

Research [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex-grow_property) and adjust the menu so that the `<nav>` is allowed to grow.
This should place all the additional space inside the `<nav>` element.

Now change the `<nav>` element *justify-content* property to spread the links across the available space. 

{{<iframe src="examples/menu/spread-out" width="1000" height="150">}}{{</iframe>}}

What do you notice about what happens when the viewport is reduced to below about *740px*?

Try setting [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex-shrink_property) on the `<h1>` element.
This can prevent one kind of problem, but it introduces another.

See how adding [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#multi-line_flex_containers_with_flex-wrap) to the `<header>` allows the `<nav>` to slip underneath when there's no room for it.


{{<iframe src="examples/menu/spread-out" width="700" height="200">}}{{</iframe>}}

> Designs that *just work* for different viewport sizes are known as *intrinsic* designs.

### Make it your own

You wouldn't make a menu that looked like this.
Make a backup of *style.css* and redesign the entire header in a way that you prefer.


### Add a list to the menu

Our menu has some good accessibility features baked in because we use the `<nav>` element. 
However, some developers like to add an unordered list element into menus because this will allow screen readers to announce how many links there are and it also supports nested menus.

This is easily achieved by adding a `<ul>` inside the `<nav>` with `<li>` elements containing each link.

> The markup looks something like this:
> ```html {linenos="false"}
> <nav>
>     <ul>
>         <li><a href="#">Lorem</a></li>
>         <li><a href="#">Quis</a></li>
>         <li><a href="#">Fugiat</a></li>
>         <li><a href="#">Deleniti</a></li>
>         <li><a href="#">Cupiditate</a></li>
>     </ul>
> </nav>
> ```

Of course, this will mess up the page. 
Use what you have learned to upgrade the styles to handle this markup.

### Complete the document

Expand the HTML and CSS to create something like this.

{{<iframe src="examples/final" width="800" height="1400">}}{{</iframe>}}

### Learn more

Keep playing and researching.

If you're not clear on what's going on, try [Kevin Powell's youtube channel](https://www.youtube.com/@KevinPowell), in particular, this video covers flexbox nicely.

{{<youtube u044iM9xsWU>}}