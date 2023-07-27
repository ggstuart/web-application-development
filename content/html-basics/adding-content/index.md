---
title: Adding some content
type: exercise
weight: 20
---

In this exercise we will experiment with adding some basic content into an HTML document.

<!--more-->

Starting with the basic VSCode template, you should have something like this.

{{<figure caption="starting point" src="images/starting-point.png">}}

## Basic content

The most basic content on the web is text of various kinds.
It is also possible to add *hyperlinks* and *'multi-media'* content such as images, video and sounds.

When adding content into a document, we need to tell the browser what type of content it is.
We do this by wrapping content in HTML tags.

Try this as an example. 

```html {hl_lines="9-14"}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adding content</title>
</head>
<body>
    <p>
        This is a paragraph of text.
        It can contain multiple lines.
        The line breaks will be reduced to single spaces.
        As will any             gaps.
    </p>
</body>
</html>
```

We have added a paragraph of text using a `<p>` element.
I like to put one sentence on each line inside `<p>` elements.
You can add the text all in one line if you want.

I also changed the content of the `<title>` element, which is good practice.

The result is a single line of text (see [step-01.html](examples/step-01.html)) that will wrap to multiple lines if there isn't enough room.
Any spaces, tabs or new line characters have been reduced to a single space.

<!-- {{<figure caption="this is a paragraph element" src="images/step-01.png">}} -->

{{<iframe src="examples/step-01.html" width="800" height="200">}}{{</iframe>}}

To view your own code in a browser you can simply open the file directly.
However, its much more convenient to install [the live server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode.

> On the left side of your VSCode window, select the square icon (usually the bottom icon) and search for "live server".
> Click the "install" button and wait a few moments.
{{<figure caption="the live server extension" src="images/live-server.png">}}
> Once installed you should see a small "Go Live" button has appeared at the bottom of your VSCode window.
{{<figure caption="the 'Go Live' button" src="images/go-live.png">}}
> Clicking this will start up a web server pointing to the top level folder and open a browser tab to serve your project.

The `<p>` element is a *block* element.
This means it will take up the full width of its container. 
In this case the `<body>` element is the container.
Since the `<body>` element is also a *block* element, it also takes the full width of its container (the viewport).

We can add more paragraphs like this.


```html {hl_lines="9-21"}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adding content</title>
</head>
<body>
    <p>
        This is a paragraph of text.
        It can contain multiple lines.
        The line breaks will be reduced to single spaces.
        As will any             gaps.
    </p>
    <p>
        Each paragraph element will take up the full width of the viewport.
    </p>
    <p>
        Even if the text is short.
        The element itself is a rectangle which <em>flows</em> into the layout according to specific rules.
    </p>
</body>
</html>
```

Try it. 
You should see that each `<p>` element stretches to the full width of the viewport.
Also notice that the `<em>` element (emphasis) added *italics* to its content.

> `<em>` elements are *inline* elements.
> *inline* elements do not take up the full width of their container like *block* elements do.
> Instead, they flow like text.
> The differences between *block* and *inline* elements is critical to understand.

The live example ([step-02.html](examples/step-02.html)) shows that the height of each paragraph is determined by its contents.

{{<iframe src="examples/step-02.html" width="800" height="200">}}{{</iframe>}}

When the text (inline) wraps within the paragraph, the paragraph height increases automatically.

This is best viewed using the devTools.

## The Document Object Model

The Chrome DevTools provide a developers view of an HTML document and the browser state.
In particular, we will be using the "elements" panel to inspect the *Document Object Model*.

> The *Document Object Model* or *DOM* is a representation of the page that is created when the browser parses and interprets your HTML file. 

With the developer tools open on the "elements" panel you should see the DOM representation with your three paragraphs.
Selecting one of the paragraphs (by hovering over it with your cursor) will show something like this.

{{<figure caption="using the browser developer tools" src="images/developer-tools.png">}}

Notice the text is highlighted with a blue rectangle.
This is the **content** of the element.
The orange bands above and below the paragraph indicate that `<p>` elements have top and bottom **margins** by default.

> It is these **margins** that create the gaps between our paragraphs.
> If you study the three paragraphs you will notice that the margins overlap.
> We will talk about margins when we introduce the CSS box model.
>
>You can see a diagram in the bottom panel of the devTools showing the values for the *box model* parameters (*margin*, *border*, *padding*, *width* and *height*).

## More elements

Now we can go back to VSCode (using *Alt + Tab* here is convenient) and add some more elements to the document.

Try an `<h1>` and an `<img>` as in the below example.

```html {hl_lines="9 23"}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adding content</title>
</head>
<body>
    <h1>This is a level 1 heading</h1>
    <p>
        This is a paragraph of text.
        It can contain multiple lines.
        The line breaks will be reduced to single spaces.
        As will any             gaps.
    </p>
    <p>
        Each paragraph element will take up the full width of the viewport.
    </p>
    <p>
        Even if the text is short.
        The element itself is a rectangle which <em>flows</em> into the layout according to specific rules.
    </p>
    <img src="https://placekitten.com/200" alt="a random kitten">
</body>
</html>
```

[The result](examples/step-03.html) is still pretty basic, but we can see how different element types produce different results

{{<iframe src="examples/step-03.html" width="800" height="500">}}{{</iframe>}}

>You may see a different image, it's a random kitten from [placekitten.com](http://www.placekitten.com).

Inspecting the site in the devTools shows that `<h1>` elements are also *block* elements, and they have some default styles too.

{{<figure caption="multi-media!" src="images/step-03.png">}}

OK, great. 
This should be pretty simple.
We can add elements and they appear in the browser because they have been added to the DOM.
We can view the DOM in the devTools and see exactly how an element is being rendered in the viewport.

## Adding semantic structure

Having an `<h1>` element is good. 
It adds meaning to the document, as a visual equivalent to the `<title>` element.
Every page should have an `<h1>` element, and preferably [only one per page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#avoid_using_multiple_h1_elements_on_one_page).

But we can do a lot better than this.
A typical HTML document should have some [aria landmarks](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role) and [a heading structure](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role) to help assistive technologies understand where stuff is and support navigation.

Let's upgrade the site with some semantic structure.

```html {hl_lines="11 13-16 30-32 34-39 41"}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adding content</title>
</head>

<body>
    <header>
        <h1>HTML elements</h1>
    </header>
    <main>
        <section>
            <h2>Paragraphs</h2>
            <p>
                This is a paragraph of text.
                It can contain multiple lines.
                The line breaks will be reduced to single spaces.
                As will any gaps.
            </p>
            <p>
                Each paragraph element will take up the full width of the viewport.
            </p>
            <p>
                Even if the text is short.
                The element itself is a rectangle which <em>flows</em> into the layout according to specific rules.
            </p>
        </section>
        <section>
            <h2>Images</h2>
            <img src="https://placekitten.com/200" alt="a random kitten">
            <img src="https://placekitten.com/190" alt="another random kitten">
            <img src="https://placekitten.com/180" alt="a third random kitten">
            <img src="https://placekitten.com/170" alt="random kitten number four">
        </section>
    </main>
    <footer>
        This is a footer, it would typically appear on every page.
    </footer>
</body>

</html>
```

> The addition of headings helps all users to navigate the content.
> This kind of structure is very helpful for users of screen readers as it allows sections to be listed and skipped etc.

The [new page](examples/step-04.html) looks like this.

{{<iframe src="examples/step-04.html" width="800" height="600">}}{{</iframe>}}
