---
title: Adding responsiveness and graphics
type: exercise
weight: 15
---

Our interface is OK, but it is designed for narrow screens.

<!--more-->

Starting with this [index.html](step-05/index.html) and this [style.css](step-05/style.css) from the previous exercise.
We can start thinking about responsiveness to larger screen sizes.

{{<figure caption="This could do with a few tweaks" src="images/step-05-wide.png">}}

Its a very simple interface so far so nothing complicated is needed yet.

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

### Simple graphics

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
Now it's time to stop playing with the design aspects. 

{{<figure caption="OK, let's stop playing with it now" src="images/step-07-wide.png">}}

