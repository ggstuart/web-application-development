---
title: Upgrading the design
type: exercise
weight: 15
---

Our interface needs some finishing touches, plus its designed for narrow screens only.
Let's upgrade the look and feel.

<!--more-->

## A custom font

We'll start with a custom font (you choose a different one as you like).

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

## Controlling the list layout

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

This is now looking better. 
The font makes a huge difference.

{{<iframe src="step-05" width="320" height="600">}}{{</iframe>}}   

## Responsiveness

The interface stretches across the whole viewport.
This is fine for smaller devices but at larger screen sizes it looks a bit weird.

{{<iframe src="step-05" width="1000" height="600">}}{{</iframe>}}   

We need to add some responsiveness.
Its a very simple interface so far so nothing complicated is needed.

We will set a `max-width` on the `<body>` with `margin-inline: auto` to keep everything centred.
We also put some styles on the `<main>` element to give it some space and make it a bit fancier with a `linear-gradient` and `box-shadow`.

```css {hl_lines="6 14-15 53-66"}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: hsl(100 50% 30%);
    color: hsl(100 50% 90%);
    font-family: "Roboto";
    font-weight: 200;
    max-width: 800px;
    margin-inline: auto;
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

@media (width>=800px) {
    main {
        padding: 1rem;
        background: linear-gradient(45deg, hsl(0 0% 100% / 0.1), hsl(0 0% 0% / 0.1));
        border-radius: 5px;
        box-shadow: 0 0 15px hsl(0 0% 0% / 0.2);
    }

    header,
    footer {
        padding-inline: 1.5rem;
    }
}

footer {
    text-align: right;
}
```
We've also added a bit more padding to the header and footer to make all the text line up vertically.

> If you're not sure about any of these additions, try removing them using the devTools.
> Most of them have a clear effect.

The result won't win any design awards, but it's *good enough*. 

{{<iframe src="step-06" width="1000" height="600">}}{{</iframe>}}   

## Simple graphics

Adding background images is a good way to make a site a bit more interesting.

Save {{<a href="images/to-do-list.svg" download="to-do-list.svg" >}}this file{{< /a >}} to your project folder and update the CSS as follows.

```css {hl_lines="16-21"}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: hsl(100 50% 30%);
    color: hsl(100 50% 90%);
    font-family: "Roboto";
    font-weight: 200;
    max-width: 800px;
    margin-inline: auto;
    background-image: url(to-do-list.svg);
    background-blend-mode: soft-light;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom center;
    min-height: 100dvh;
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

@media (width>=800px) {
    main {
        padding: 1rem;
        background: linear-gradient(45deg, hsl(0 0% 100% / 0.1), hsl(0 0% 0% / 0.1));
        border-radius: 5px;
        box-shadow: 0 0 15px hsl(0 0% 0% / 0.2);
    }

    header,
    footer {
        padding-inline: 1.5rem;
    }
}

footer {
    text-align: right;
}
```

The image sits in the background nicely.
Now it's time to stop playing with the design aspects and move on to adding functionality. 

{{<iframe src="step-07" width="1000" height="600">}}{{</iframe>}}   


## Conclusion

In this exercise we haven't added any functionality, but we have made a big difference to how the application looks and feels.
A small amount of careful design work can make a big difference to end-users. 