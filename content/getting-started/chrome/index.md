---
title: The chrome developer tools
type: exercise
---

In this exercise, we will look at the developer tools in chrome which we will make use of extensively in this module.

<!--more-->

Web browsers have two primary functions.
1. They communicate with *web servers* using **HTTP** requests.
1. They render *HTML documents* and related content.

>In this module we will use [Google Chrome](https://www.google.com/intl/en_uk/chrome/).
>The main reason for this is that *it is the most popular browser* and very likely will be used by the majority of your users.
> You may want to **set Chrome as your default browser** for the duration of this module if it isn't already.

## Google Chrome

You should already have Google Chrome open and be viewing this web page.

It looks something like this:

{{<figure src="images/chrome.png" caption="Google Chrome, showing this page under development">}}

Almost all the window is taken up by the content of the page.
The window includes tabs at the top to open multiple pages at once and a thin toolbar with the url and a few buttons like *back*, *forward* and *reload* etc..

> If you want to remove this then pressing *F11* should toggle full screen mode on and off.


Scroll around the page from a users perspective.
Notice the structure.
There is a header at the top with the module title.
There's a navigation menu under the module title.
At the end of the page, there is a footer with some additional links.
These elements are common to all the pages in this site.

Also notice the button in the top-right corner which controls a navigation menu.
This button doesn't scroll with the rest of the page.
Pressing it opens a menu which also doesn't scroll.

The main content for this page includes a series of headings with paragraphs and images.

>Some of the paragraphs are highlighted like this.

Now we will inspect the structure of the page from a developers perspective.

## The browser developer tools

The Chrome DevTools provide a developers view of an HTML document and the browser state.
In particular, we will be using the *Elements* panel to inspect the *Document Object Model*.

> The *Document Object Model* or *DOM* is a representation of the page that is created when the browser parses and interprets your HTML file. 

Open the developer tools in your browser (you should be using Google Chrome).

> To open devTools I usually use *F12* on linux, others use *ctrl+shift+I* or right-click and choose 'inspect'.
> Alternatively, in the Chrome menu, select *more tools* and *developer tools*.
> There are loads of ways to open them.
> Here's a video about that.
> {{< youtube id="X65TAP8a530" class="youtube" title="advice on opening devTools">}}
>
> **Wait. Don't watch videos during the timetabled lab sessions!**
>
>You can watch this later.

Through the developer tools panel, you can view and edit the HTML and CSS which make up the site and you can execute JavaScript on the page.

> You will be expected to use the developer tools as you go through the lab materials and develop your site.
> In fact, when developing a site, you should nearly **always** have the developer tools open.
> So get used to opening the tools to inspect how a page is put together.

### Viewing the DOM

Under the *Elements* panel, within the developer tools panel you should find a nested structure containing all the elements of the page.
This is a developers representation of the *Document Object Model*.

Try to find elements within the nested structure that correspond to the visible parts of the page.

>This element is a `<blockquote>`.
You should see that it contains two `<p>` elements. 
>
>The `<p>` elements are paragraphs and they are separated by top and bottom margins.

Notice that when elements are selected in the developer tools, they are highlighted on the page.
Also notice that the style rules of the selected element are also provided.

{{<figure src="images/devtools-blockquote.png" caption="find the blockquote in the *DOM*">}}

The blockquote has *margins* which are highlighted in orange.
The lower *styles* panel shows that *blockquote* elements have their *margin* property set to `2rem 0`.
This means the top and bottom margins (known as the *block* margins) are set to `2rem` and the left and right margins (known as the *inline* margins) are set to zero.

### Editing the DOM

Notice that the browser *DOM* is editable.
If you select an element in the *Elements* panel and press *delete*, the element will be removed.
If you select an element and press *F2* (or double click the element) then you can overwrite the content.

{{<figure src="images/editing-the-dom.png" caption="editing the *DOM*">}}

Pressing *F2* again will save the changes to the DOM and the page will update.

The entire *DOM* can be replaced in this way.
Though refreshing the page will reload the original document.
Your changes are not permanent.

>Try adding the following HTML into the page
>```html {linenos=false}
><img src="http://www.placekitten.com/600/200" alt="a random kitten">
>```
> You should see an image of a random kitten from [placekitten.com](http://www.placekitten.com).

### Editing style rules

Style rules can be edited also.
When an element is selected in the *elements* tab, you should see all the style rules applied to the selected element.

When your mouse is hovering over the style rules, each rule has a checkbox next to it which allows you to temporarily remove the rule completely.
Its also possible to edit the rules and add new rules.

> The interface is complex and sophisticated.
> With practice, you will gradually learn how to make good use of it.
> It is particularly useful when debugging CSS and when planning a potential CSS change.

Here's an animated image.

![animated HTML5 logo](images/html5_badge.svg)

Select it in the devTools and find the style rules.
You will find the image inside a paragraph.

>A useful way to find something in a complex page is to activate the *select* tool with *Ctrl+Shift+C* and then click on the element of interest.

{{<figure src="images/animation.png" caption="The animated element in the DOM">}}

Select the *animation-duration* rule and change the value from `5s` to `1s`.
You should see the animation now takes place much faster, taking only one second to complete in each of the alternating directions.

> You can learn more about CSS animations [in the MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)

