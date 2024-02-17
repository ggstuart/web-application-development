---
title: Working with user input
order: 1
type: exercise
---

User input is handled mostly by the `<form>` and `<input>` elements.
In this exercise, we will explore how these work by building a few basic user interfaces.

<!--more-->

## Set up a basic document

Create a standard document template, include a link to a css file.
Add a script as the last element within the `<body>` element.

Insert an `<input>` element into your `<body>` element.

You should have something like this:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User input</title>
    <link rel="stylesheet" href="style.css">
    <script type="module" src="index.js"></script>
</head>
<body>
    <input>
</body>
</html>
```

> `<input>` elements are void elements and should not have closing tags.
>
> Also notice that I have added my script into the `<head>` of the page and I have given it a `type` attribute set to `"module"`.
> This is usually a good idea and will ensure your content is loaded before the script executes.
> However, it will **only** work if you are serving the file using e.g. the *live server* extension for VSCode.

Notice how it appears in your page, this is not a very clear user interface.
The `<input>` element represents a box into which text can be added.


{{<iframe src="demo/step-01" width="800" height="100">}}{{</iframe>}}

> The default `type="text"` variant will accept any text.

Add a `<span>` element before your `<input>` and add the text "enter your name: " to indicate to the user what to do.

{{<iframe src="demo/step-02" width="800" height="100">}}{{</iframe>}}


## Accessibility

For users with screen readers, there is no connection between the text and the input.
This is valid code but its [not accessible](https://webaim.org/techniques/forms/controls) and so would lose marks if submitted in your assignment.

### Label elements

Instead we should use a `<label>` element and connect it to the `<input>` using a `for` attribute.

```html {hl_lines="11-12"}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User input</title>
    <link rel="stylesheet" href="style.css">
    <script type="module" src="index.js"></script>
</head>
<body>
    <label for="myName">Enter your name</label>
    <input id="myName">
</body>
</html>
```

{{<iframe src="demo/step-03" width="800" height="100">}}{{</iframe>}}

This looks the same but, in addition to being more accessible to screen readers, it has slightly different behaviour.
Notice that if you hover over the label, you get a different mouse cursor.
If you click on the label, you will activate the input.
It also allows us to locate the labels and the inputs differently but retain the connection.

> Add a `<header>` and a `<main>` element to begin the structure of your site.
> Give your site a visible title using a top-level heading `<h1>` element within the `<header>`.

### The aria-label attribute

Input elements should always be labelled. 
An alternative to a `<label>` element is to use the `aria-label` attribute on the `<input>` element.

Add the following search tool into your `<header>`.

```html
<input id="myQuery" placeholder="search term" aria-label="search">
<button id="searchButton">search</button>
```

Your site should look a bit like this.

{{<iframe src="demo/step-04" width="800" height="300">}}{{</iframe>}}

Here's my code.

```html {hl_lines="14-15"}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User input</title>
    <link rel="stylesheet" href="style.css">
    <script type="module" src="index.js"></script>
</head>
<body>
    <header>
        <h1>User input</h1>
        <section id="search">
            <input placeholder="&#128269; search" id="myQuery" aria-label="search">
            <button id="searchButton">search</button>
        </section>
    </header>
    <main>
        <section>
            <h2>Basic input</h2>
            <label for="myName">Enter your name</label>
            <input id="myName">
        </section>
    </main>
</body>
</html>
```
I've added a `<section>` around each example to keep them isolated and, of course, each section will have an `<h2>`.
This all helps with accessibility.

Notice, I've also added a unicode magnifying glass into the search input placeholder.

> *Remember*: For accessibility, **always** add a `<label>` element or an `aria-label` attribute to `<input>` elements.

## Some style

Add the following simple styles to your page.
Notice the imported font, simple `media` queries and use of `hsl` colors.

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

body {
    margin: 0;
    font-family: "Nunito", system-ui;
}

header {
    padding: 0.5em 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: hsl(0, 70%, 40%);
    color: hsl(0, 70%, 80%);
}

main section {
    padding: 1em;
    border-bottom: 0.5px dotted hsl(0, 70%, 80%);
}

@media screen and (min-width: 420px) {
    header {
        flex-direction: row;
    }
}

@media screen and (min-width: 900px) {

    header,
    main section {
        padding: 1em 25vw;
    }
}
```

The default styles place the search bar under the title.

{{<iframe src="demo/step-05" width="350" height="350">}}{{</iframe>}}

When space is available, the search bar moves to the right.

{{<iframe src="demo/step-05" width="800" height="300">}}{{</iframe>}}

By default`<input>` elements are generic text fields but they can be modified with the `type` attribute.

Add `type="search"` to your search input and see what difference it makes.
You should see some minor changes to the field.

{{<iframe src="demo/step-06" width="800" height="300">}}{{</iframe>}}

When text is entered, a cross appears and the field can be cleared with a click.

Additionally, to help users of screen readers and assistive technology, the entire search section can be given `role="search"` to help make it clear.

```html {hl_lines="13-14"}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User input</title>
    <link rel="stylesheet" href="style.css">
    <script type="module" src="index.js"></script>
</head>
<body>
    <header>
        <h1>User input</h1>
        <section id="search" role="search">
            <input placeholder="&#128269; search" id="myQuery" aria-label="search" type="search">
            <button id="searchButton">search</button>
        </section>
    </header>
    <main>
        <section>
            <h2>Basic input</h2>
            <label for="myName">Enter your name</label>
            <input id="myName">
        </section>
    </main>
</body>
</html>
```

## More input types


There are many [input field types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) available.
Some of these were introduced with HTML5:

- color
- date
- email
- number
- range
- search
- tel
- time
- url

Setting the `type` attribute of an `<input>` element to any of the above values will produce a different type of input field.

Here are some examples of the syntax:

```html
<input>
<input type="color">
<input type="date">
```

The browser will provide an interface.

{{<iframe src="examples/ex1.html" width="800" height="100">}}{{</iframe>}}


The `<input>` element is one of the most powerful and complex elements in HTML.
Some input field types have a default value, others don't.
Some require certain attributes, others don't.
We won't cover everything in this module, please do your own research.

For most input types, setting the `value` attribute will initialise the input field with data.

```html
<input value="default value">
<input type="color" value="#ff0000">
<input type="date" value="2021-01-01">
```

The elements have default values entered.

{{<iframe src="examples/ex2.html" width="800" height="100">}}{{</iframe>}}

### Numbers

Some input types will only accept **specific input** so are good for preventing user errors.

Add a new `<section>` with a second level heading "Numbers" and an input with the type `number`.

```html {linenostart="24"}
<section>
  <h2>Numbers</h2>
  <label for="myAge">Enter your age: </label>
  <input id="myAge" type="number">
</section>
```

The new section has our styles and the input looks only slightly different.

{{<iframe src="demo/step-07" width="800" height="400">}}{{</iframe>}}

Notice that the input will not accept non-numeric input.
It can be controlled via the keyboard arrow keys and with the mouse clicking on the tiny buttons.

But, nobody is 10,000 years old.
What if we need to restrict it to a (generous) maximum value of 150?

Easy! Just add a `max="150"` attribute.
Notice that it doesn't prevent you from entering a larger number directly, but it does prevent using the arrow keys or mouse controls to increase the value beyond the provided maximum.

A value greater than 150 also sets the pseudo-class `:invalid` which we can target with a css ruleset.
Add the following to your CSS:

```css {linenostart="23"}
input:invalid {
  background-color: hsl(0, 70%, 70%);
  border-color: hsl(0, 100%, 70%)
}
```

Now notice that an invalid value will trigger the styles.

{{<iframe src="demo/step-08" width="800" height="400">}}{{</iframe>}}

Experiment by setting the `min` and `step` attributes also.
Notice that values are invalid if they fall between steps.

### Ranges

Inputs of type `range` provide a graphical input element that behaves similarly to the `number` type.

Add a new `<section>` with a second level heading "Ranges" and an input with the type `range`.

```html
<section class="relative">
  <h2>Ranges</h2>
  <label for="myHeight">Element height: </label>
  <input id="myHeight" type="range" value="50">
  <div id="heightTarget"></div>
</section>
```

We will use the default `min` and `max` values (0-100) to control the height of an element in `%` units.
Notice we have initialised the value of the `<input>` to "50", we also added a `class` on the `<section>` so we can style it and we have an extra `<div>` element which will be controlled via JavaScript.

{{<iframe src="demo/step-09" width="800" height="600">}}{{</iframe>}}

Add the following additional styles.

First, at the top of your css file, add a [css custom property](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) called `--height` to the `:root` element.
This is essentially a css variable and can be easily set using JavaScript.
We can name custom properties however we like.
Adding a property to the `:root` element allows us to use it throughout our css rules.

```css {linenostart="3"}
:root {
  --height: 50%;
}
```

Then, add a `position: relative` to the new `.relative` class.
This will act as a container for any children positioned absolutely.

```css {linenostart="32"}
.relative {
  position: relative;
}
```

Now we can style the `#heightTarget` element to be `position: absolute`.
The `bottom` and `right` properties will fix its position within the relatively positioned parent element.
We also give it some width and set its `height` property to be equal to our customised `--height` property using `var(--height)`.

```css {linenostart="36"}
#heightTarget {
  position: absolute;
  bottom: 0;
  right: 1em;
  width: 4em;
  background-color: hsl(0, 70%, 40%);
  height: var(--height);
  transition: 0.4s;
}
```

The result should look like this:

{{<iframe src="demo/step-10" width="800" height="600">}}{{</iframe>}}

This setup will allow us to vary the height of the `#heightTarget` element by setting the value of the custom property.
We will do this with a simple event listener on the `input` event of our `<input>` element.
The `input` event fires whenever the value is updated.

Add the following to your script.

```js
const myHeight = document.getElementById('myHeight');

myHeight.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--height', `${myHeight.value}%`);
});
```

Here `document.documentElement` refers to the top level element (`:root` in css terms) and `style.setProperty` allows us to set the value of any custom property.
We pass in the name of the property and the value we wish to assign.
In this case, the value is the `value` of the `myHeight` element plus a `%` symbol.

> We used string interpolation using *backticks* and the `${}` syntax to inject a variable into our string.

Notice that now, when the slider is adjusted, the height of the `<div>` element responds.
We have a `transition` on the element so the change is animated.

{{<iframe src="demo/step-11" width="800" height="600">}}{{</iframe>}}

Try setting the `step` attribute of the `<input>` to a large value such as "25".
Every time the `<input>` element steps to the next value, the `input` event is triggered, our custom `--height` property is updated which changes the `<div>` css `height` property and the `transition` property animates the change.

### Colours

The colour `<input>` works exactly the same.
In the following example, notice how the code is almost identical to the above example.

First, we add some new css custom properties for foreground colour and background colour.

```css {linenostart="3"}
:root {
  --height: 50%;
  --bg-colour: #ffffff;
  --fg-colour: #000000;
}
```

Then we create styles for a new `#colours` element which will use the custom properties.
So if we change the custom properties, we change the element colours.

```css {linenostart="48"}
#colours {
    background-color: var(--bg-colour);
    color: var(--fg-colour);
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.25rem 0.5rem;
}

#colours h2 {
    grid-column: span 2;
}
```

> We are also using grid to layout the section.

Now, add a new `<section>` into your document.

```html {linenostart="35"}
<section id="colours">
  <h2>Colours</h2>
  <label for="myBG">Background: </label>
  <input id="myBG" type="color" value="#ffffff">
  <label for="myFG">Foreground: </label>
  <input id="myFG" type="color" value="#000000">
</section>
```

Finally, add the necessary JavaScript event listeners to activate the new `<input>` elements.

```js {hl_lines="2-3 9-14"}
const myHeight = document.getElementById('myHeight');
const myBG = document.getElementById('myBG');
const myFG = document.getElementById('myFG');

myHeight.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--height', `${myHeight.value}%`);
});

myBG.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--bg-colour', myBG.value);
});
myFG.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--fg-colour', myFG.value);
});
```

The result should be as expected.

{{<iframe src="demo/step-12" width="800" height="700">}}{{</iframe>}}


We can select a foreground or background colour with the new inputs.
As we change the input values, the section changes colour.

## Using forms

Forms allow us to aggregate inputs together into groups. They also control the communication of user input to a server (which will become very important for us).

Create a simple login form as follows.

```html
<section>
  <form id="login">
    <h2>Sign in</h2>
    <label for="myUser">Username: </label>
    <input id="myUser" name="username" placeholder="enter your username" required>
    <label for="myPassword">Password: </label>
    <input id="myPassword" type="password" name="password" placeholder="enter your password" minlength="8" required>
    <label for="myConfirmation">Confirm password: </label>
    <input id="myConfirmation" type="password" placeholder="confirm password" required>
    <input type="submit" value="login">
  </form>
</section>
```

We will use `display: grid` to format the form.
This particular approach requires that all elements (except `<h2>` and inputs with `type="submit"` elements) come as `<label>`, `<input>` pairs.

```css {linenostart="60"}
form {
    display: grid;
    gap: 0.25em 1em;
    grid-template-columns: max-content 1fr;
}

form > label {
    text-align: right;
}

form > input {
    min-width: 0;
}

form h2 {
    grid-column: span 2;
}

form input[type="submit"] {
    grid-column: 2;
    justify-self: end;
}
```

Try to understand what is going on.

{{<iframe src="demo/step-13" width="800" height="900">}}{{</iframe>}}

The grid has two columns (set by `grid-template-columns`), one is `max-content` and the other is `1fr`.
This ensures the first column never wraps the "confirm password" label (it is always given the space it needs) and the second column is given all additional space.
We also customised the behaviour of the labels to make them line up on the right and the input elements, to allow them to shrink smaller then the default.
We allowed the `<h2>` to span both columns and the `type="submit"` `<input>` to align right within the second column.

### Validation styles

Notice that our input elements are invalid (because they are `required`).
The invalid styles are pretty bad, lets improve them.

Update the `:invalid` styles like this.

```css {linenostart="34"}
form input:invalid {
    border-width: 0.5px 0.5px 0.5px 3px;
    border-left-style: solid;
    border-left-color: red;
}

form input:valid {
    border-width: 0.5px 0.5px 0.5px 3px;
    border-left-style: solid;
    border-left-color: green;
}

form:invalid {
    border-top: 3px solid red;
}

form:valid {
    border-top: 3px solid green;
}
```

Now the form gently suggests more work is needed and the individual elements indicate where the problem is.

{{<iframe src="demo/step-14" width="800" height="900">}}{{</iframe>}}


### Submit behaviour

We have specified some validation criteria for the individual input elements. 
This causes the form to prevent the submit action unless these basic criteria are met.

Try clicking the login button.
You should get an error message.

Fill in a username and click again.
You should get another error message.

Try a short password, less than eight characters.
You should get a different error message.


### Custom validation

Using JavaScript, we can add extra validation criteria.
Currently, the form will submit even if the password confirmation field doesn't match the password field.
This is not OK.
Our server doesn't need the confirmation password, this is purely for the benefit of the user to help prevent an accidental typo in the password.

We need custom logic to do the test.
We can use the [`setCustomValidity`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity) method on the confirmation field to set the field to be invalid.

> If we pass an empty string to this method, the field is considered valid. 
> So the logic in the code below will set the confirmation field to invalid (with a custom message) when the confirmation doesn't match the password. 
> We apply this logic when either of the password fields are updated.

```js {hl_lines="4-5 18-27"}
const myHeight = document.getElementById('myHeight');
const myBG = document.getElementById('myBG');
const myFG = document.getElementById('myFG');
const myPassword = document.getElementById('myPassword');
const myConfirmation = document.getElementById('myConfirmation');

myHeight.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--height', `${myHeight.value}%`);
});

myBG.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--bg-colour', myBG.value);
});
myFG.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--fg-colour', myFG.value);
});

const checkConfirmation = (ev) => {
    if (myPassword.value != myConfirmation.value) {
        myConfirmation.setCustomValidity("Wait. What? This doesn't match the password field!");
    } else {
        myConfirmation.setCustomValidity('');
    }
};

myConfirmation.addEventListener('input', checkConfirmation);
myPassword.addEventListener('input', checkConfirmation);
```

Now, whenever either of the password fields are changed, we are checking for a match.
If they don't match then the confirmation field is set as invalid with a clear message.
When they do match, the custom validity setting is replaced with an empty string which sets the field to `valid`.

{{<iframe src="demo/step-15" width="800" height="900">}}{{</iframe>}}

Try to submit with a mismatched password confirmation.
You should see our customised validation message.

Also notice that if you begin with matching and valid fields, changing the password will impact the validity of the confirmation field. 

## Handling the data

By default, forms will issue an `HTTP GET` request to the server when they are submitted.
Submit the form and you should see that the page reloads.

Now notice that the data you submitted in the form has been added to the url as a so-called [query string](https://en.wikipedia.org/wiki/Query_string).
For example, if you entered **"Something"** as the username and **"data_breach!"** as the password, then something like this would be requested from the server.

```markdown {linenos=false}
http://127.0.0.1:5500/index.html?username=Something&password=data_breach%21
```

> A query string is a set of parameters appended to the url following a question mark (`?`) and separated by ampersand symbols (`&`).
> The query string is [url encoded](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding) so the exclamation mark in the above example is converted to `%21`.

Notice that our password confirmation isn't included in the data.
This is because *only* those input elements with a `name` attribute are included in the submitted data.

If we had a back-end, it could read these data in and return a modified version of the page.
This is one of the main ways in which we will communicate between the web browser and the web server.
The other way is simple links to load files.

> Links can also have query parameters hard-coded into their href attributes. 
>```html {linenos="false"}
><a href="http://127.0.0.1:5500/users.html?id=3">User 3</a>
>```

Query parameters are excellent ways to create links to specific content (e.g. using an id parameter such as *user.php?id=3*) or configuration (e.g. *products.php?query=yellow&sort_order=price* for filtering or sorting).

> A php script can read in the provided data using `$_GET`.
```php
<?php

$users = ['Alison', 'Benjamin', 'Carol'];
$provided_id = $_GET['id'];
echo "<h2>User $provided_id</h2>";
echo "<p>Name: $users[$provided_id]</p>";

?>
```


> Note that sending sensitive data in a GET request like this is insecure, even if HTTPS is used (which it MUST be for a secure application deployed on the web) the users password would be displayed as part of the url.

### Redirecting

Forms can load any page we want.
We can configure a form to request a different document by setting the `action` attribute.

>This is how a simple php web application might work, each form pointing to a specific php script which interacts with the database and constructs an HTML response.
>```html {linenos="false"}
><form action="search.html">
>   <input type="search" name="query" placeholder="search">
></form>
>```

We have seen the default setting issues an `HTTP GET` request with data encoded directly into the URL as query parameters.
Setting `method="POST"` on the form will issue a `POST` request with the data inside the HTTP request body.

> This will fail when using **live server** in VSCode but if you are running PHP (e.g. via **PHP server** in VSCode) then the data can be extracted from the request by a php script.



### Capturing data with JavaScript

Alternatively, we can capture the form data on the submit event as follows.

> This approach would not make much sense for a login form and is being included for completeness.
> It should probably not be used without a compelling reason to do so.
> Allowing the HTML form to do the job in a simple way as above is usually the correct approach.


```js {hl_lines="6 30-37"}
const myHeight = document.getElementById('myHeight');
const myBG = document.getElementById('myBG');
const myFG = document.getElementById('myFG');
const myPassword = document.getElementById('myPassword');
const myConfirmation = document.getElementById('myConfirmation');
const login = document.getElementById('login');

myHeight.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--height', `${myHeight.value}%`);
});

myBG.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--bg-colour', myBG.value);
});
myFG.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--fg-colour', myFG.value);
});

const checkConfirmation = (ev) => {
    if (myPassword.value != myConfirmation.value) {
        myConfirmation.setCustomValidity("Wait. What? This doesn't match the password field!");
    } else {
        myConfirmation.setCustomValidity('');
    }
};

myConfirmation.addEventListener('input', checkConfirmation);
myPassword.addEventListener('input', checkConfirmation);

login.addEventListener('submit', ev => {
    ev.preventDefault();
    const data = new FormData(login);
    for (const key of data.keys()) {
        console.log(`${key}: ${data.get(key)}`);
    }
    login.reset();
});
```

The above changes get a reference to the login form (`login`) and register an event listener on it, listening for the `'submit'` event.

Inside the function, we can see this line:

```js{linenostart="31"}
ev.preventDefault();
```

This line prevents the default action of the submit event from being triggered. 
This means the page will not reload, the form submit action is effectively cancelled.
If you comment this line out you will see the page reload and the form data (including the password) will appear in the url.

Instead of submitting the form, we grab the data, log it to the console and clear the form.

We extract the data by creating a [FormData object](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects) from our login form.

```js {linenostart="32"}
const data = new FormData(login);
```

`FormData` objects are convenient ways to capture data from forms using JavaScript. 
They will automatically extract all the named values for us and provide a convenient API for us to use.

We then loop over the iterator returned by the [FormData.keys()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/keys) method and log the value extracted using the [FormData.get()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get) method.

```js {linenostart="33"}
for (const key of data.keys()) {
    console.log(`${key}: ${data.get(key)}`);
}
```

> Notice that only the fields with the `name` attribute set are being extracted.
> See the [FormData documentation](https://developer.mozilla.org/en-US/docs/Web/API/FormData) for more details.

Finally, we clear the form using the [HTMLFormElement.reset()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset) method.

```js {linenostart="36"}
login.reset();
```

## Additional exercise

If you have got this far, look up [HTML data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) and think about how you could implement a simple search function using the existing search input.
Try to add data attributes to each section and use the search input to filter the visible sections.

## Lab learning outcomes

- Use `<input>` fields to collect user input
- handle user input with JavaScript
- Use CSS custom properties
- Reflect user input directly on the page without reloading
- Use `<form>` fields and form validation

Input fields are the primary method for getting user data, so it is essential to choose the correct type, depending on what you want the user to enter. Handling these on the page with JavaScript and providing feedback without (or before) calling any server scripts or reloading the page is one of the *key elements of modern web development*.

Manipulating the Document Object Model (DOM) in this way avoids excessive to-and-fro messages between the client (browser) and the web server, making user interaction more immediate and intuitive. If you use local storage (in a future lab) to retain user preferences between browser sessions, their choices can be made to persist in that user’s browser.

## References

 - [viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag#viewport_basics)
 - [WebAim](https://webaim.org/techniques/forms/controls)
 - [HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
 - [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
 - [Layout land](https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag)
 - [HTML forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
 - [setCustomValidity](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity)
 - [HTML data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
