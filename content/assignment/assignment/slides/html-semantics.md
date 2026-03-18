---
type: slide
title: HTML Semantics
classes: [burger, gap, even]
---
>"Explain **HTML Semantics** including examples of using common semantic elements, how they can generate landmark regions and support accessibility.
Demonstrate how using appropriate elements helps to express the meaning of specific page content and supports users of assistive technology."

A simple start. 
Try to convey the key points clearly using appropriate real examples.
Different elements imbue content with different meanings.
Some add [landmark regions](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/HTML5.html) which support accessibility and assistive technology.
You should demonstrate practical examples of selecting elements purposefully.
`<div>` and `<span>` elements have no meaning and so should be rare in your application.


```html {class="small"}
<!DOCTYPE html>
<html>
    <head>
        <title>My Application</title>
    </head>
    <body>
        <header>
            <h1>My Application</h1>
            <nav>
                <a href="/">home</a>
                <a href="/about">about</a>
            </nav>
        </header>
        <main>
            content
        </main>
        <footer>&copy; application developers</footer>
    </body>
</html>
```

> Check out the [intro to HTML slides]({{< ref "/welcome/context" >}}) (and lecture recording) plus the [accessibility exercise]({{< ref "/html-basics/accessibility" >}}) for more.
Use the *elements* panel to highlight examples and show how decisions affect the accessibility tree.