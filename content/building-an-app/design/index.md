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

Checkout [the result](step-05).
This is now looking fine. 

{{<figure caption="OK, this looks good enough" src="images/step-05.png">}}

## Responsiveness

The interface stretches across the whole viewport.
This is fine for smaller devices but at larger screen sizes it looks a bit weird.

{{<figure caption="This could do with a few tweaks" src="images/step-05-wide.png">}}

We need to add some responsiveness.
Its a very simple interface so far so nothing complicated is needed.

We will set a `max-width` on the `<main>`, `<h1>` and the `<p>` inside the `<footer>` with `margin-inline: auto` to keep everything centred.
We also put some styles on the `<main>` element to give it some space and make it a bit fancier with a `linear-gradient` and `box-shadow`.

```css {hl_lines="6 52-66"}
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

main,
h1,
footer p {
    max-width: 800px;
    margin-inline: auto;
}

@media (width>=800px) {
    main {
        padding: 1rem;
        background: linear-gradient(45deg, hsl(0 0% 100% / 0.1), hsl(0 0% 0% / 0.1));
        border-radius: 5px;
        box-shadow: 0 0 15px hsl(0 0% 0% / 0.2);
    }
}

footer {
    text-align: right;
}
```

> If you're not sure about any of these additions, try removing them using the devTools.
> Most of them have a clear effect.

The result won't win any design awards, but [it's *good enough*](step-06). 

{{<figure caption="that's *good enough*" src="images/step-06-wide.png">}}

## Simple graphics

Adding background images is a good way to make a site a bit more interesting.

Save [this file](images/to-do-list.svg) to your project folder and update the CSS as follows.

```css {hl_lines="8-13"}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');
body {
    background-color: hsl(100 50% 30%);
    color: hsl(100 50% 90%);
    margin: 0;
    font-family: "Roboto";
    font-weight: 200;
    background-image: url(to-do-list.svg);
    background-blend-mode: soft-light;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom center;
    min-height: 100dvh;
}
header {
    backdrop-filter: brightness(0.8);
    overflow: auto;
}
header, footer {
    padding-inline: 0.5rem;
}
h1 {
    font-weight: 400;
}
h2 {
    font-weight: 300;
}
ul {
    list-style: none;
    padding: 0;
    background-color: hsl(200 50% 50%);
    display: grid;
    gap: 1px;
    margin: 0;
}
li.todo-list {
    backdrop-filter: brightness(0.6);
    padding: 0.5rem;
}
li.todo-list h2 {
    margin: 0;
}
footer {
    text-align: right;
}
main, h1, footer {
    max-width: 500px;
    margin-inline: auto;
}
@media (width >=600px) {
    main {
        font-size: 1.1em;
        padding: 1rem;
        background: linear-gradient(45deg, hsl(100, 50%, 25%), hsl(100, 50%, 35%));
        border-radius: 5px;
        box-shadow: 0 0 15px hsl(0 0% 0% / 0.4);
        margin: 1rem auto;
        box-sizing: border-box;
    }
}
```

The image [sits in the background nicely](step-07).
Now it's time to stop playing with the design aspects and move on to adding functionality. 

{{<figure caption="OK, let's stop playing with it now" src="images/step-07-wide.png">}}

## Conclusion

In this exercise we haven't added any functionality, but we have made a big difference to how the application looks and feels.
A small amount of careful design work can make a big difference to end-users. 