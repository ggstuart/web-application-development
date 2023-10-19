---
title: CSS fonts
type: exercise
---

This is a quick demonstration of how to work with fonts.

<!--more-->

Let's begin with a simple document, *index.html*.
We have a paragraph (*block*) with three `<span>` elements (*inline*) containing text.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <span>Itaque, in. Aliquam ab magnam libero reprehenderit amet, molestias cum!</span>
        <span>Temporibus illo harum cumque, reiciendis distinctio magni minus officia suscipit explicabo consectetur!</span>
    </p>
</body>
</html>
```

We can add a few styles to *style.css* to highlight the text.

```css
p {
    font-size: 2em;
}

span {
    background: hsl(50, 80%, 50%, 0.2);
    border: 0.5px solid hsl(50, 80%, 50%);
}
```

The result is some large text with the `<span>` elements clearly indicated.

{{<iframe src="example-01" width="1000" height="300">}}{{</iframe>}}

## Line height

The *line-height* property controls the space between the lines.
The default value is usually *1.1*.

```css {hl_lines="3"}
p {
    font-size: 2em;
    line-height: 1;
}

span {
    background: hsl(50, 80%, 50%, 0.2);
    border: 0.5px solid hsl(50, 80%, 50%);
}
```

> It is advised to not use units for line-height as it can cause problems.
> Unitless values should be relative to the font size.

Reducing the *line-height* squeezes the text causing overlap.

A value of *1.0* should make the space between text baselines the same as the font size, leaving no space for *descenders* such as in *p*, *g* and *q*. 

{{<iframe src="example-02" width="1000" height="300">}}{{</iframe>}}

Expanding to a larger value is good for readability in normal paragraphs.

```css {hl_lines="3"}
p {
    font-size: 2em;
    line-height: 1.4;
}

span {
    background: hsl(50, 80%, 50%, 0.2);
    border: 0.5px solid hsl(50, 80%, 50%);
}
```

{{<iframe src="example-03" width="1000" height="350">}}{{</iframe>}}

# Letter and word spacing

We have some fine-grained control over the way a font is presented using *letter-spacing* to modify the spacing between letters and *word-spacing* to modify the space between words.

```css {hl_lines="10-19"}
p {
    font-size: 1.2em;
    line-height: 1.4;
}

span {
    background: hsl(50, 80%, 50%, 0.2);
    border: 0.5px solid hsl(50, 80%, 50%);
}

p:nth-of-type(2) {
    letter-spacing: -3px;
    word-spacing: 1em;
}

p:nth-of-type(3) {
    letter-spacing: 5px;
    word-spacing: -0.5em;
}
```

> Notice the *:nth-of-type* selector *pseudoclass* allows us to select the second and third paragraphs individually to add the new styles.

Obviously we have taken this to the extreme and messing with these parameters is not always recommended, however it can be useful for things like titles.

{{<iframe src="example-04" width="1000" height="350">}}{{</iframe>}}


## Changing fonts

Swapping fonts is easy enough using the *font-family* property.

Here we use the (usually much better) *system-ui* font.

```css {hl_lines="4"}
p {
    font-size: 1.2em;
    line-height: 1.4;
    font-family: system-ui;
}

span {
    background: hsl(50, 80%, 50%, 0.2);
    border: 0.5px solid hsl(50, 80%, 50%);
}

p:nth-of-type(2) {
    letter-spacing: -3px;
    word-spacing: 1em;
}

p:nth-of-type(3) {
    letter-spacing: 5px;
    word-spacing: -0.5em;
}
```

The *system-ui* font is always available and can appear different depending on the platform.

Notice that by swapping the font we have actually changed the size of the text and the content has shifted position slightly.

{{<iframe src="example-05" width="1000" height="400">}}{{</iframe>}}

Not all fonts are available on all platforms. 
Custom fonts can be added by linking to the necessary files.

> Fonts come in all sorts of formats, 

### Google fonts

An easy way to get nice fonts quickly is to use [google fonts](https://fonts.google.com/).
Simply visit [the site](https://fonts.google.com/), select a font and choose which variants to include.

Once you have selected what you want in your site, you should see options in the side panel to *use on the web*.

{{<figure src="./images/selected-families.png" caption="this icon will open the side panel">}}

Find the *@import* formatted output and copy it.

You can paste it into your document directly.

```html
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');
</style>
```

Alternatively, to keep things simple, we can simply add the *@import* statement to our CSS file.

```css {hl_lines="1-2 6-9 13 17"}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

p {
    font-size: 1.2em;
    line-height: 1.4;
    font-family: Roboto;
    font-weight: 300;
    max-width: 70ch;
    margin-inline: auto;
}

p:nth-of-type(2) {
    font-weight: 100;
}

p:nth-of-type(3) {
    font-weight: 400;
}
```

> In this case, we've added a few different weights (thin, light and normal) of the *Roboto* font and used them in the different paragraphs.

{{<iframe src="example-06" width="1000" height="400">}}{{</iframe>}}

Notice we also limited the paragraph width to *70ch* (70 characters) to improve readability on larger device widths.
We also centered the paragraphs by setting *margin-inline* to *auto*.

### @font-face

Looking through google fonts provides a lot of options but it doesn't do anything special, the google font system simply links out to files served on the google servers. 

If you want to use a different font then [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) can be used to specify custom font files (e.g. *otf*, *woff* etc.).

You can see how to do so by visiting [the url in our *@import* statement](https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap).
This code can be included directly in a CSS file without using google fonts.

To host your own fonts, download them into your project (e.g. in a *fonts* folder) and use a custom *@font-face* rule to define when the files should be used.

## More stuff about text

There's plenty more to learn about formatting text. 

Research the [*text-decoration*](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration), [*text-transform*](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) and [*text-shadow*](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow) properties.

Also learn about [breaking text](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text/Wrapping_breaking_text) and the [*white-space*](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) property.

> See [this article](https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align) for more details of how fonts and line-height work.
In truth, it's complicated.