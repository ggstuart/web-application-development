---
title: Making the list dynamic
type: exercise
weight: 30
---

In this exercise, we will add forms to our application which allow the user to create and delete *todo-lists*.

<!--more-->

## Creating a form

Create a new template at **forms/create-todo-list.phtml**.
The form should look like this:

```html
<form id="create-todo-list" aria-label="create a new todo list" action="create-todo-list.php" method="post">
    <input type="text" name="title" placeholder="the title of your new list" aria-label="list title">
    <button>create</button>
</form>
```

> Notice we have created a folder for all the forms, just to keep things tidy.

Submitting this form will make an `HTTP POST` request to **create-todo-list.php** (which doesn't yet exist).
It passes a *"title"* variable taken from the user input as part of the request body.

>The `name` attribute of an `<input>` element determines the name of the variable sent to the server.

> The `<form>` and `<input>` also include `aria-label` attributes to make sure they are accessible to assistive technology such as screen readers.
> The `<input>` `placeholder` attribute is used to provide an additional prompt when the input is empty.
> The `<button>` element has content and so does not need a label.

We can insert the form into our **views/index.phtml** template.

```phtml {hl_lines="11 19"}
<!DOCTYPE html>
<html lang="en">

<?php readfile('views/head.phtml'); ?>

<body>

    <?php readfile('views/header.phtml'); ?>

    <main>
        <?php readfile('forms/create-todo-list.phtml'); ?>
        <ul>
            <?php
            foreach ($todoLists as $title) {
                include 'views/todo-list-summary.phtml';
            }
            ?>
        </ul>
        <p class="count">Found <?php echo count($todoLists); ?> lists</p>
    </main>

    <?php readfile('views/footer.phtml'); ?>

</body>

</html>
```
> We also added a paragraph element showing the number of lists found.

We can add some more styles to make the input and button bigger and to line them up with everything else.


```css {linenostart=32}
main {
    display: grid;
    gap: 0.5em;
}

form {
    display: grid;
}

@media (width>420px) {
    form {
        grid-template-columns: 1fr auto;
    }
}

input,
button {
    font-size: 1.5em;
    padding-inline: 0.5rem;
}

p.count {
    padding-inline: 0.5rem;
}

```

> These should be added to the existing css file which it getting quite long.

Here's the result.

{{<figure caption="A complete(-ish) interface" src="images/step-08-wide.png">}}

## Handling the request

Enter a title and submit the `<form>`.
Notice that the browser url has changed.
The form sent an `HTTP POST` request to load **create-todo-list.php**.

You should get a PHP error page.

{{<figure caption="not found" src="images/not-found.png">}}

> The error is right, there is no **create-todo-list.php** on the server.

Click the back button to return to the **index.php** page.
Add a file **create-todo-list.php** and simply `var_dump` the `$_POST` data provided by the `<form>`.

```php
<?php
var_dump($_POST);
```
> We don't need to close the `<?php` tag. It will be closed automatically.

If you now enter a name into the form field and press the *create* button (or press *enter*) then you should be redirected to the new **create-todo-list.php** script.

It should look something like this.

{{<figure src="images/var_dump-title.png" caption="I zoomed in to take this screenshot">}}

We are reading the POSTed data and the result can be whatever we want.
Try extracting the data from the array and printing a simple message instead.

```php
<?php
echo "<h2>Create a new <em>todo-list</em></h2>";
echo "<p>You asked the server to create a <em>todo-list</em> with the title <strong>'{$_POST['title']}'</strong></p>";
echo "<p>...the server ignored you.</p>";
```

This is the basic principle behind all web applications.
HTTP POST requests are triggered by HTML forms and they can include data in the body of the request which the server can access.

Now we need to take this data and do something with it.

## Storing data in the session

Before we move to a database, we can store this information in memory using the `$_SESSION` variable.

> This is probably not a good idea for a fully fledged application.
However, it is a useful way to experiment without generating permanent data. 
After three hours of disuse, the `$_SESSION` data are cleared, so it doesn't make for a useful application.
However, it does mean we can experiment without leaving any mess.
In addition, its very easy to clear the current session by removing the cookie which is set in the browser.
>
> Once we have a working system using the session, we will adapt it to use a database instead.
This conversion is exactly analogous to changing from one database to another (e.g. mySQL to MongoDB) and so will be a useful exercise in code structure.

The `$_SESSION` variable allows data to be stored in memory, per user.
A *session cookie* is set in the browser so the same user can be identified on each subsequent request.

> As we shall see, the *cookie* can be viewed (and deleted) in the devTools under *application*, *storage*, *cookies*.

### Set up the session

Before we get started, we will introduce a new script, **setup.php**.

Modify your **index.php** as follows:

```phtml {hl_lines="2"}
<?php
include 'setup.php'; 
$todoLists = [
    'HTML',
    'CSS',
    'PHP'
];
include 'views/index.phtml';
```

To use the session within a script, we need to call the `session_start` function.
This will either start a new session or resume an existing one.

Create **setup.php** as follows:

```phtml
<?php
session_start();

if(!isset($_SESSION['lists'])) {
    $_SESSION['lists'] = [];
}
```

We are using the `isset` function to test whether we already have a `'lists'` key in our `$_SESSION` data.
If the key already exists, then we can leave it alone.
If it doesn't exist, then we populate it with an empty array.

Finally, we can modify **index.php** to extract our data from the session rather than from a hard-coded array, so it can be used by **index.phtml**.

```phtml {hl_lines="4"}
<?php
include 'setup.php'; 

$todoLists = $_SESSION['lists'];

include 'views/index.phtml';
```

Reloading the **index.php** file in the browser should lead to an empty list.


### Adding a *todo-list*

Finally we can now actually insert data into the session when we receive a request to add a new list.

Back in our **create-todo-list.php** script we need to activate the session and then just insert the provided value.

```php
<?php
session_start();

if(isset($_POST['title'])) {
    $_SESSION['lists'][] = $_POST['title'];
}

header("Location: /");
```

We are checking to see if there is a `'title'` key set in the `$_POST` data.
If we find it, then we append it to our session array.

We end by redirecting back to **index.php** (by pointing to the root **/**) so the newly inserted item can be presented back to the user. 

{{<figure src="images/dynamically-generated.png" caption="Data is added to the session successfully">}}

Now if you want to clear the session, you can remove the cookie in the devTools.
Go to the *application* tab and find the *storage* section.
Select *https://localhost:3000*, it should be listed under *Cookies*.

You will see a table with a row named *PHPSESSID*. 
Select this and press *delete*.
When you refresh the page, the session will be empty.

{{<figure src="images/cookie.png" caption="To clear the session, simply find the cookie and delete it">}}


## Deleting *todo-lists*

OK, now we can create loads of items on the list but there is no way to remove them individually.

We need a mechanism to remove specified items.
We will do this by adding a new `<form>` into each `<li>`.

### Add a new form

Create a new file **forms/delete-todo-list.phtml**

```phtml
<form id="delete-todo-list" aria-label="delete this todo-list" action="delete-todo-list.php" method="post">
    <input type="hidden" name="list-id" value="<?= $id ?>">
    <button>&times;</button>
</form>
```

> You can use unicode symbols e.g. **🗑** instead of &times; if you prefer.

We need to identify which *todo-list* we are going to delete.
To do this, we include a hidden `<input>` element named `list-id` in our form with a `value` set to the php variable `$id`.

Modify **views/todo-list-summary.phtml** as follows to include the form in each list summary.

```phtml {hl_lines="3"}
<li class="todo-list">
    <span>todo-list</span>
    <h2 class="title"><?= $title; ?></h2>
    <?php include 'forms/delete-todo-list.phtml' ?>
</li>
```

Each form has a button plus a hidden `<input>` element with a value for the `list-index`.
This is the location of the element in the list.

In **views/index.phtml** we can pass the array index into each iteration of the loop like this.

```phtml {hl_lines="14"}
<!DOCTYPE html>
<html lang="en">

<?php readfile('views/head.phtml'); ?>

<body>
    
    <?php readfile('views/header.phtml'); ?>
    
    <main>
        <?php readfile('forms/create-todo-list.phtml'); ?>
        <ul>
            <?php
            foreach ($todoLists as $id=>$title) {
                include 'views/todo-list-summary.phtml';
            }
            ?>
        </ul>
        <p class="count">Found <?php echo count($todoLists); ?> lists</p>
    </main>

    <?php readfile('views/footer.phtml'); ?>

</body>

</html>
```

We also need a few style changes to integrate the new button into our design.
We will make the *todo-list* list items `display: grid` and control where each element is located.

```css {linenostart="67"}

li.todo-list {
    display: grid;
    grid-template-columns: 1fr auto;
}

li.todo-list h2 {
    grid-column: 1;
}

li.todo-list form {
    grid-column: 2;
    grid-row: 1/3;
    place-self: center;
}

li.todo-list form button {
    border: 1px solid white;
    background-color: transparent;
    aspect-ratio: 1;
    border-radius: 1em;
    color: white;
    font-weight: 600;
    font-size: 2em;
    transition: background-color 250ms;
}

li.todo-list form button:hover {
    background-color: red;
}
```

Clicking the delete buttons will correctly call the script but will give you an error because the script doesn't exist.

### Create a simple delete script

Now create a new script **delete-todo-list.php** to receive the `POST` request and delete the specified *todo-list*.

```php
<?php
session_start();

if (isset($_POST['list-id'])) {
    array_splice($_SESSION['lists'], $_POST['list-id'], 1);
}

header("Location: /");
```

Very similar to the **create-todo-list.php** script. 
This one just removes the item at the given index from the `$_SESSION` data and redirects back to the home page.

> We use the `array_splice` method to remove one item at the specified location.

Try it, you should now be able to delete items from the list.

{{<figure src="images/delete-working.png" caption="delete now works!">}}


## Conclusions

In this exercise we have seen how simple it is to include small pieces of PHP code into an existing HTML infrastructure.
We also used the special `$_POST` and `$_SESSION` variables to build some simple data handling code.

We have taken a simple HTML template and added dynamically capabilities using PHP.