---
title: Grid layouts
type: exercise
weight: 30
author: Dr Graeme Stuart
---

The CSS grid layout system is an extremely powerful and flexible way to create beautiful and unique layouts.

<!--more-->

Like *flexbox*, *grid* provides a replacement for the default *flow* layout and is applied by setting the *display* property of a *parent* element.
*Grid* allows *child* elements to be arranged in multiple rows and/or columns.

>&#129300; Grid involves a lot of properties that control the various aspects.
Don't worry about remembering all the property names.
The key thing is to know what is possible and how to find what you need on MDN.
A good entry point is [Grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids) or [Basic concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout).


## What is grid?

We can think of the *grid* layout as creating a table with *columns* and *rows* inside the *parent* element.
Each intersection between a *column* and a *row* is known as a [grid cell](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Cell), a location into which a *child* element can be placed.

{{<iframe src="examples/demo" width="1000" height="250">}}{{</iframe>}}

In the above three examples, the grid has four columns and four rows, but each example has a different number of *child* elements and some of the elements have different settings.

The first example does nothing special, it has 16 *child* elements, each automatically positioned in a single cell.
In the second example there are only 10 *child* elements and the third and fourth element are spanning two columns and two rows, taking up four cells each. 
The final example is more complex.
There are nine element in total including elements which span two cells either horizontally (the first and ninth elements) or vertically (the third and sixth elements) and one (the fifth element) which spans two rows and two columns.

## Grid basics

We can start with a very basic example to demonstrate the core concept of grid.

Create an *index.html* file with the following content.

> You can call it *index.html*, but keep it inside a *placement* folder or similar under a main *grid* folder in which we will collect a set of simple examples. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid placement</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <div>first content</div>
    </main>
</body>
</html>
```

The `<main>` element which will be our *grid* container so we will set it's *display* property to *grid*.
The single `<div>` will be placed on the grid.

We will also set the *background-color* property (or you could use any appropriate property) of the `<div>` and `<main>` elements so we can see clearly where they are being placed.

```css
main {
    display: grid;
    background: red;
}

div {
    background: yellow;
    padding: 0.25rem;
}
```

The result shows that the `<div>` is taking up the entire space within the `<main>` element. 
We know this because the `<main>` has a red background and we can't see any red in the page.

{{<iframe src="examples/placement/step-01" width="1000" height="100">}}{{</iframe>}}

The `<main>` is now a grid with one column and one row.
The `<div>` has been placed in the only available cell.

If we add another `<div>` to the HTML, a new row is created automatically.

{{<iframe src="examples/placement/step-02" width="1000" height="120">}}{{</iframe>}}

> Don't forget to add a second `<div>`.

### Defining the grid

We can explicitly specify a *4 x 4* grid.
A common way to create more rows and columns in our grid is to set the [*grid-template-columns*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) and [*grid-template-rows*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows) properties.
To make a four-by-four grid, we will need to set both properties.

```css {hl_lines="4-5"}
main {
    display: grid;
    background: red;
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: 50px 50px 50px 50px;
}

div {
    background: yellow;
    padding: 0.25rem;
}
```

In each case we have set the value to *50px 50px 50px 50px*.
This indicates that we want four columns/rows each *50px* wide/high.

> An alternative syntax for this is [repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat).
> ```css{linenos="false"}
> grid-template-columns: repeat(4, 50px);
> grid-template-rows: repeat(4, 50px);
> ```

The result shows that the `<main>` is still behaving like a *block* element, taking up the full width.
We can also see that the `<main>` element is now *200px* tall.
The `<div>` elements have automatically been placed in the first two cells.

{{<iframe src="examples/placement/step-03" width="1000" height="300">}}{{</iframe>}}

Notice that the size of the `<div>` elements is no longer controlled by the content.
The text is already overflowing into the padding.
If we add more content then the elements would remain the same size and the content would overflow even more.

### Placing elements in the grid

Our `<div>` elements have been automatically placed in the first and second grid *cells*.
This is the default behaviour.

Grid elements can be explicitly placed by setting the [*grid-row*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row) and/or [*grid-column*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column) properties of the *child* element in question.

Let's select our first *child* element (using the [*:nth-child* pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)) and place it in the second row and second column.
We'll also give it a distinct background colour to be clear.

```css {hl_lines="12-17"}
main {
    display: grid;
    background: red;
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: 50px 50px 50px 50px;
}

div {
    background: yellow;
    padding: 0.25rem;
}

main > :nth-child(1) {
    background: palegreen;
    grid-row: 3;
    grid-column: 2;
}
```

> Care should be taken to understand that we are not referring to row 2 and and column 2 here.
In fact, we are specifying [*grid-line*](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Lines) numbers.
We are telling the browser we want the top-left corner of our element to be placed at the intersection of *row line 2* and *column line 2*.
By default, elements will span just one column.
So this default behaviour is intuitive.

Study what has happened carefully.

{{<iframe src="examples/placement/step-04" width="1000" height="300">}}{{</iframe>}}

Previously, the two `<div>` elements were placed on the grid in turn, occupying the first two available cells.
Now we have explicitly placed the first `<div>` element into a particular cell.
The remaining `<div>` element is placed in the first available empty cell.

The default placement algorithm applies to all elements that are not explicitly placed.
It tries to fill each cell in the first row from left to right, it then fills the second row and so on.
If individual cells are already filled, then they are ignored.

### Spanning multiple cells

We can also tell elements to span more than one cell.
For example, if we want to stretch our second element across two columns, then we can use the *span* keyword in our [*grid-column*](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column) property like this.


```css {hl_lines="18-22"}
main {
    display: grid;
    background: red;
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: 50px 50px 50px 50px;
}

div {
    background: yellow;
    padding: 0.25rem;
}

main > :nth-child(1) {
    background: palegreen;
    grid-row: 3;
    grid-column: 2;
}

main > :nth-child(2) {
    background: orange;
    grid-column: span 2;
}
```

> We can span rows in exactly the same way using the *grid-row* property.

We haven't specified where the element should be placed, only that it should span two columns.
The element is placed in the first available space which is two columns wide.

{{<iframe src="examples/placement/step-05" width="1000" height="300">}}{{</iframe>}}

The result shows that we are indeed spanning two columns and consequently, the content has a bit more room to breathe.

Adding more elements demonstrates how the default placement will fill empty cells in turn.
We will update our document to provide numbering.

```html {hl_lines="13-20"}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Grid placement</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <main>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
        </main>
    </body>
</html>
```

The explicitly placed elements take up cells accordingly.
Elements with no grid placement information take up the empty spaces in the grid.
Spaces are filled one-by-one, from left to right, top to bottom. 

{{<iframe src="examples/placement/step-06" width="1000" height="300">}}{{</iframe>}}

Finally, we can expand an element to span all four rows.

```css {hl_lines="23-27"}
main {
    display: grid;
    background: red;
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: 50px 50px 50px 50px;
}

div {
    background: yellow;
    padding: 0.25rem;
}

main > :nth-child(1) {
    background: palegreen;
    grid-row: 3;
    grid-column: 2;
}

main > :nth-child(2) {
    background: orange;
    grid-column: span 2;
}

main > :nth-child(4) {
    background: lightblue;
    grid-row: span 4;
}
```

Notice how the unplaced elements flow into the available space.

{{<iframe src="examples/placement/step-07" width="1000" height="300">}}{{</iframe>}}

> The *start / end* syntax for the *grid-column* and *grid-row* properties allows you to specify *grid-line* numbers to start and end on rather than using *span*. e.g.
> ```css {linenostart="24"}
> main > :nth-child(4) {
>     background: lightblue;
>     grid-row: 1 / 5;
> }
> ```
>The above rule is equivalent to what we have but is forcing the element to start at the first grid row line.
>
> This can also be used together with the *span* keyword e.g.
>```css{linenostart="19"}
>main > :nth-child(2) {
>    background: orange;
>    grid-column: 2 / span 2;
>}
>```
> The above example would move the orange `<div>` to the right and element 3 would move into the first cell. 

### Placement *within* cells

By default our `<div>` elements take up all the available space in the cells they cover.
We can customise this behaviour for all the elements by setting the *justify-items* and *align-items*  (or the shorthand [*place-items*](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items)) properties on the parent element.

```css{hl_lines="6"}
main {
    display: grid;
    background: red;
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: 50px 50px 50px 50px;
    place-items: center;
}

div {
    background: yellow;
    padding: 0.25rem;
}

main > :nth-child(1) {
    background: palegreen;
    grid-row: 3;
    grid-column: 2;
}

main > :nth-child(2) {
    background: orange;
    grid-column: span 2;
}

main > :nth-child(4) {
    background: lightblue;
    grid-row: span 4;
}
```

The cells are still exactly the same size, but the `<div>` elements now take their natural sizes and are placed centrally inside the cell.

{{<iframe src="examples/placement/step-08" width="1000" height="300">}}{{</iframe>}}


Alternatively, we can use the *justify-self* and *align-self* (or the shorthand [*place-self*](https://developer.mozilla.org/en-US/docs/Web/CSS/place-self)) properties on the child elements to control each element individually.


```css {hl_lines="17"}
main {
    display: grid;
    background: red;
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: 50px 50px 50px 50px;
}

div {
    background: yellow;
    padding: 0.25rem;
}

main > :nth-child(1) {
    background: palegreen;
    grid-row: 3;
    grid-column: 2;
    place-self: center;
}

main > :nth-child(2) {
    background: orange;
    grid-column: span 2;
}

main > :nth-child(4) {
    background: lightblue;
    grid-row: span 4;
}
```

> Notice that the *place-items* rule has been removed.

The grid behaves as normal and only one element is placed centrally within it's cell.

{{<iframe src="examples/placement/step-09" width="1000" height="300">}}{{</iframe>}}

> of course, *center* is not the only option.
> Research [*place-items*](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items) and [*place-self*](https://developer.mozilla.org/en-US/docs/Web/CSS/place-self) to discover the many options which can control placement within the cell.

### Flexible grids

In the above examples we set our columns and rows at a fixed sized of *50px* each.
Grid column and row sizes don't need to be specified in pixel units. 
Any of the available [length units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) can be used.

Fixed size cells might be useful in many use cases, but more often its better to allow the grid to respond to the content.
For this, we can also use grid-specific settings such as the default *auto* setting or the more sophisticated [*fraction* units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#the_fr_unit).

Let's update our CSS to use *auto* sizing.

```css {hl_lines="4-5"}
main {
    display: grid;
    background: red;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(4, auto);
}

div {
    background: yellow;
    padding: 0.25rem;
}

main > :nth-child(1) {
    background: palegreen;
    grid-row: 3;
    grid-column: 2;
    place-self: center;
}

main > :nth-child(2) {
    background: orange;
    grid-column: span 2;
}

main > :nth-child(4) {
    background: lightblue;
    grid-row: span 4;
}
```

Sometimes *auto* sizing is just what you want. 
It will try to give each column and row enough space.
By default it will also cause cells to stretch to fill the available space.

{{<iframe src="examples/placement/step-10" width="1000" height="300">}}{{</iframe>}}

We can see the columns are all given a lot more room to fill the parent `<main>` element.
Since the height of the `<main>` element is automatically adjusting to fit the content, the grid rows are sized to fit the `<div>` content plus the padding.

Adding an explicit *height* property to the `<main>` element causes the rows to be automatically stretched to fill the available space.

If we also mess with the columns and rows, the content is placed completely differently. 


```css {hl_lines="4-6"}
main {
    display: grid;
    background: red;
    grid-template-columns: 50px auto 50px;
    grid-template-rows: 30px auto auto auto 30px;
    height: 340px;
}

div {
    background: yellow;
    padding: 0.25rem;
}

main > :nth-child(1) {
    background: palegreen;
    grid-row: 3;
    grid-column: 2;
    place-self: center;
}

main > :nth-child(2) {
    background: orange;
    grid-column: span 2;
}

main > :nth-child(4) {
    background: lightblue;
    grid-row: span 4;
}
```

Try to understand what's happened. 
We now have three columns and this has created five rows.
Look at the placing of the numbered elements.

{{<iframe src="examples/placement/step-11" width="1000" height="400">}}{{</iframe>}}

> Rows don't need to be specified as they are created automatically, but will be *auto* by default so if you want to size them explicitly then you need a *grid-template-rows* property.

Using the fraction *fr* unit is similar except it allows us to specify what fraction of the available free space should be allocated to each column or row.

For example, the following changes retain the same *3 x 5* grid shape within the same space but specifies the relative sizes of each column and row.

```css {hl_lines="4-5"}
main {
    display: grid;
    background: red;
    grid-template-columns: 1fr 2fr 4fr;
    grid-template-rows: 1fr 2fr 3fr 4fr 5fr;
    height: 340px;
}

div {
    background: yellow;
    padding: 0.25rem;
}

main > :nth-child(1) {
    background: palegreen;
    grid-row: 3;
    grid-column: 2;
    place-self: center;
}

main > :nth-child(2) {
    background: orange;
    grid-column: span 2;
}

main > :nth-child(4) {
    background: lightblue;
    grid-row: span 4;
}
```

The space is distributed completely differently with a greater proportion of the space going to the larger fractions.

{{<iframe src="examples/placement/step-12" width="1000" height="400">}}{{</iframe>}}

### Nested grids

There is no restriction on how grids are nested. 
Try adding *display: grid* to the `<body>` element and see what happens.

> Basically nothing happens because the `<body>` contains only one element which is placed in a *1 x 1* grid.

Investigate the [*place-content*](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content) property and use it to generate this outcome.

{{<iframe src="examples/placement/step-13" width="1000" height="400">}}{{</iframe>}}

> setting it on the `<body>` element tells the browser to place the grid columns and rows within the available space rather than stretching them to cover the available space.

We can also place a grid inside a cell.
Add a `<section>` as the eleventh *child* element of our grid, with nine labelled `<div>` elements.

```html {hl_lines="23-33"}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid placement</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <main>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <section>
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
            <div>F</div>
            <div>G</div>
            <div>H</div>
            <div>I</div>
        </section>
    </main>
</body>

</html>
```

Now we can easily create a grid layout in the `<section>` element with completely independent rows and columns that have no effect on the parent grid.

```css {hl_lines="36-41"}
body {
    display: grid;
    place-content: center;
}

main {
    display: grid;
    background: red;
    grid-template-columns: 1fr 2fr 4fr;
    grid-template-rows: 1fr 2fr 3fr 4fr 5fr;
    height: 340px;
}

div {
    background: yellow;
    padding: 0.25rem;
}

main > :nth-child(1) {
    background: palegreen;
    grid-row: 3;
    grid-column: 2;
    place-self: center;
}

main > :nth-child(2) {
    background: orange;
    grid-column: span 2;
}

main > :nth-child(4) {
    background: lightblue;
    grid-row: span 4;
}

section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px;
    gap: 10px;
}
```

The impact is subtle. 
Because our new `<div>` elements have some size, they have increased the width of the third column.
This in turn means that the first and second columns need to increase in order to keep the appropriate ratios on the parent grid. 

{{<iframe src="examples/placement/step-14" width="1000" height="400">}}{{</iframe>}}

Hopefully its clear that grid layouts can be very powerful but they also require a lot of thought and care to get the result you want.

> We won't describe the newer [*subgrid*](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid) specification because at the time of writing it was not widely supported by browsers. However, it promises to provide even more control over grid layouts.

## Challenges

Use what you've learned to create the following page layouts.

### A grid of things

The first one is fairly simple, one obvious grid but the elements inside the grid are a bit more complex than we looked at above.

{{<iframe src="examples/layouts/step-01" width="1000" height="1200">}}{{</iframe>}}

Most of the content is a series of `<section>` elements inside the `<main>`.
These are placed under normal flow rules. 
One of the sections contains an element which has a grid layout.

Also notice that the footer is stuck to the bottom of the page, this is because the entire body is a grid with three elements (`<header>`, `<main>` and `<footer>`) and a *grid-template-rows* set to *auto 1fr auto*.

### A grid of grids

In this example we have expanded the content inside each grid element to be a further grid.
Controlling the layout of each element using two, or even three nested grids.

{{<iframe src="examples/layouts/step-02" width="1000" height="1500">}}{{</iframe>}}

### More images

Try doing something like this to present different sized images.

{{<iframe src="examples/kittens-02" width="1000" height="600">}}{{</iframe>}}


### Learn more

There is a lot to learn about CSS grid and we've only scratched the surface. 
Research and experiment with [simple grid layouts](https://web.dev/one-line-layouts/).

In particular, research the *auto-fit* and *auto-fill* options.

If you want to learn more, watch the now classic [layout land series by Jen Simmons](https://www.youtube.com/layoutland).  
It's five years old but will provide some interesting context in terms of the perspective of developers five years ago and the massive change that CSS grid introduced. 

This one might be a good start.

{{<youtube 0Gr1XSyxZy0>}}
