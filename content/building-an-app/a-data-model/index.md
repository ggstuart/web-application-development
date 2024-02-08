---
title: Developing a data model
type: exercise
weight: 40
---

In this exercise we will continue the code we have been developing into a fully working (though flawed) application.

<!--more-->

## A session module

The first thing we will do is to isolate our *controller* scripts (**create-todo-list.php**, **delete-todo-list.php** and **index.php**) from knowing any details about how our data are stored.
Not only will this make it much easier to swap over to a database later, it will also keep the controller logic simple and keep the focus of these scripts on *what* they are doing rather than *how* they are doing it.

We want to move all references to `$_SESSION['lists']` out of this file and into a new file which handles all the details of the session data.

For example, here's our current **setup.php**.

```php
<?php
session_start();

if(!isset($_SESSION['lists'])) {
    $_SESSION['lists'] = [];
}
```

It currently includes intimate details about exactly how we are storing the data in the session.
This is not great.

We need to move the details of the session handling code into a dedicated script.
This will allow us to radically change how we store our data by swapping out a single file.

Create a file **adapters/session.php** and begin by setting up the session.

```php
<?php

// This is the ONLY place where we should handle $_SESSION['lists']

if(!isset($_SESSION['lists'])) {
    $_SESSION['lists'] = [];
}
```

> This file will eventually contain a complete library of functions to interact with `$_SESSION['lists']`.
We will harvest the functionality from around the application.
This is an example of *refactoring*.
We are not adding new functionality, we are reorganising the way the code is structured.

Now in **setup.php** we only need to load the session adapter.

```php {hl_lines="4"}
<?php
session_start();

include 'adapters/session.php';
```

We're going to include **setup.php** whenever we want to interact with our data.
It will load all the necessary functions which will become available to our controller scripts.

We are keeping the `session_start()` call in here because we may want to use the session for other things later.


All the code that responds directly to user requests (**create-todo-list.php**, **delete-todo-list.php** and **index.php**) will use these function names (and signatures) as an API for interacting with the data.
This will isolate our controller scripts from the details of how the functions are implemented and allow us to swap in different data persistence mechanisms easily.

### Listing *todo-lists*

We can add a function to **adapters/session.php** to get a list of all our *todo-lists*.

```php {hl_lines="8-11"}
<?php

// This is the ONLY place where we should handle $_SESSION['lists']

if(!isset($_SESSION['lists'])) {
    $_SESSION['lists'] = [];
}

function getTodoLists() {
    return $_SESSION['lists'];
}
```

In our **index.php** script, we can load the data required by the template by calling the generic function name.

```php {hl_lines="3-5"}
<?php
include 'setup.php'; 

$todoLists = getTodoLists();

include 'views/index.phtml';
```

> Make sure you understand what we have done here.
> This is a neat trick.
> We have added a layer of *indirection*.
> Our **index.php** script doesn't need to care where the data came from.
> It simply relies on the fact that a function `getTodoLists()` should exist.
> We control what that function does in the **setup.php** script by including the session adapter.

We can now do the same with our other two controller scripts.

### Creating a *todo-list*

We need a function in **adapters/session.php** to create *todo-list* records.

```php {hl_lines="12-15"}
<?php

// This is the ONLY place where we handle todo data in the session

if (!isset($_SESSION['lists'])) {
    $_SESSION['lists'] = [];
}

function getTodoLists() {
    return $_SESSION['lists'];
}

function createTodoList(string $title) {
    $_SESSION['lists'][] = $title;
}
```

Now we can update **create-todo-list.php** to include **setup.php** and use the new function.

```php {hl_lines="2 5"}
<?php
include 'setup.php'; 

if (isset($_POST['title'])) {
    createTodoList($_POST['title']);
}

header("Location: /");
```

Notice how this script is responsible for knowing what `$_POST` data to expect, passing it into the generic function and redirecting to the root.

### Deleting a *todo-list*

Add a function to the session adapter that deletes a *todo-list* record by `$id`.

```php {hl_lines="16-19"}
<?php

// This is the ONLY place where we handle todo data in the session

if (!isset($_SESSION['lists'])) {
    $_SESSION['lists'] = [];
}

function getTodoLists() {
    return $_SESSION['lists'];
}

function createTodoList(string $title) {
    $_SESSION['lists'][] = $title;
}

function deleteTodoList(int $id) {
    array_splice($_SESSION['lists'], $id, 1);
}
```

Now modify **delete-todo-list.php** to use the function.

```php {hl_lines="2 5"}
<?php
include 'setup.php'; 

if (isset($_POST['list-id'])) {
    deleteTodoList($_POST['list-id']);
}

header("Location: /");
```

Again, see how we have removed the need for these files to know where/how the data are stored.
Each file includes the core **setup.php** script which sets up the adapter.

The session adapter defines everything we can currently do to our data.
It provides functions for *listing*, *creating* and *deleting* *todo-lists* from the session.

The application should still function perfectly but we have refactored the code into a much more organised system.

## Introducing mySQL




## Viewing a *todo-list*

Now we can start expanding functionality by adding a new page for viewing an individual *todo-list*.
This will be at **todo-list.php**.
In order to access specific *todo-lists*, our url will also include a *query parameter* for `id` like **todo-list.php?id=1**.

We can add a link to each *todo-list* by updating the **views/todo-list-summary.phtml** template.

```phtml {hl_lines="2-5"}
<li class="todo-list">
    <a href="todo-list.php?id=<?= $id; ?>">
        <span>todo-list</span>
        <h2 class="title"><?= $title; ?></h2>
    </a>
    <?php include 'forms/delete-todo-list.phtml'; ?>
</li>
```

> The content of the `<li>` is wrapped in a new `<a>` element which links to the appropriate page.

Adding a bit of CSS to **style.css** helps keep things nice.
It just makes the link inherit the colour of the parent and adds an underline only on hover.

```css
a {
    color: inherit;
    text-decoration: none;
}

li.todo-list > a:hover > h2 {
    text-decoration: underline;
}
```

> There is a danger that removing the underline from the link makes it less visually obvious as a clickable link.
> Consider the mobile version of this page where there is no hover style.
> Hopefully the overall design leads to users to understand what's going on.

The links point to a missing page. 
We can start with a very simple **todo-list.php** script.

```php
<?php
var_dump($_GET);
```

This just dumps out the content of the `$_GET` array.

> Just like the `$_POST` array contains data submitted through a form, we can access these query parameters through the special `$_GET` array. 

You should find that clicking a *todo-list* in the **index.php** links correctly to our `var_dump` script and outputs something like `array(1) { ["id"]=> string(1) "0" }`.

### Getting one *todo-list*

Now we need to access the correct *todo-list* based on an `id` passed in via the url.
This will require a new function in the **adapters/session.php** script.

```php {hl_lines="20-23"}
<?php

// This is the ONLY place where we handle todo data in the session

if (!isset($_SESSION['lists'])) {
    $_SESSION['lists'] = [];
}

function getTodoLists() {
    return $_SESSION['lists'];
}

function createTodoList(string $title) {
    $_SESSION['lists'][] = $title;
}

function deleteTodoList(int $id) {
    array_splice($_SESSION['lists'], $id, 1);
}

function getTodoList(int $id) {
    return $_SESSION['lists'][$id];
}
```

The new function simply gets the requested element from our stored array.

We can update our **todo-list.php** to extract the passed `id`, grab the data using our function and dump it out to the result.

```php {hl_lines="2-7"}
<?php
include 'setup.php';

$listId = $_GET['id'];
$todoList = getTodoList($listId);

var_dump($todoList);
```

With this in place, clicking around the lists should dump the data extracted from the session.
Currently, the only data available is the title of the *todo-list*.

Let's add a template for the page at **views/todo-list.phtml**;

```phtml
<!DOCTYPE html>
<html lang="en">

<?php readFile("views/head.phtml"); ?>

<body>

    <?php readFile("views/header.phtml"); ?>

    <main>
    <pre><?php var_dump($todoList); ?></pre>
    </main>

    <?php readFile("views/footer.phtml"); ?>

</body>

</html>
```

The template provides a nicer experience, but it also just dumps out the `$todoList` variable for now.

We can include the template in our **todo-list.php** script.

```php {hl_lines="7"}
<?php
include 'setup.php';

$listId = $_GET['id'];
$todoList = getTodoList($listId);

include 'views/todo-list.phtml';
```

You should see something like this.

{{<figure src="images/todo-list-page.png" caption="A todo-list page">}}

To make navigation easier, we can also make the main heading into a link in **views/header.phtml**.

```phtml
    <header>
        <a href="/"><h1>TODO Lists</h1></a>
    </header>
```

Now we can navigate back to the home page by clicking the "TODO Lists" title.


## Upgrading the data model

To upgrade the data we store for a list, we will need to make an adjustment to our **adapters/session.php** script.
This will then have knock-on effects which we will need to handle.

> This is typical when refactoring and upgrading code, changing something fundamental like the data we are storing will require a series of changes across the code.
> One indicator of well organised code is how decoupled components are, i.e. we should aim to isolate and minimise the impact of these changes.

```php {hl_lines="14-17"}
<?php

// This is the ONLY place where we handle todo data in the session

if (!isset($_SESSION['lists'])) {
    $_SESSION['lists'] = [];
}

function getTodoLists() {
    return $_SESSION['lists'];
}

function createTodoList(string $title) {
    $_SESSION['lists'][] = [
        'title'=>$title,
        'items'=>[]
    ];
}

function deleteTodoList(int $id) {
    array_splice($_SESSION['lists'], $id, 1);
}

function getTodoList(int $id) {
    return $_SESSION['lists'][$id];
}
```

When we create a new *todo-list* we now store an array with two elements, 'title' (a string) and 'items' (an array). 

> You will probably need to reset your session data by deleting the cookie in the devTools.
This can be found at *application->cookies*.

Create a few new *todo-list* records.
They appear as **Array** instead of the correct name, it should be apparent why this is. 

> If you echo a variable that contains an array, php will render it as the string "Array".

Now we are providing a more complex *todo-list* data structure rather than just a string, we should rename the variable we loop over in **views/index.phtml**.

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
        foreach ($todoLists as $id => $todoList) {
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

We also need to modify **views/todo-list-summary.phtml** to handle this change and the new data structure.

```phtml {hl_lines="4"}
<li class="todo-list">
    <a href="todo-list.php?id=<?= $id; ?>">
        <span>todo-list</span>
        <h2 class="title"><?= $todoList['title']; ?></h2>
    </a>
    <?php include 'forms/delete-todo-list.phtml'; ?>
</li>
```

The name should now be correct. 
Click on one to view your newly created *todo-lists* at **todo-list.php**.
It should show the new data structure.

{{<figure src="images/data-structure.png" caption="The new data structure">}}

### Viewing *todo-items*

We can expand our new data structure into some more sensible HTML in the **views/todo-list.phtml** template.

```phtml {hl_lines="11-23"}
<!DOCTYPE html>
<html lang="en">

<?php readFile("views/head.phtml"); ?>

<body>

    <?php readFile("views/header.phtml"); ?>

    <main>
        <article class="todo-list">
            <header>
                <h2><?= $todoList['title']; ?></h2>
                <p><?= count($todoList['items']); ?> items</p>
            </header>
            <ul>
            <?php
            foreach($todoList['items'] as $itemId=>$todoItem) {
                include 'views/todo-item.phtml';
            }
            ?>
            </ul>
        </article>
    </main>
    
    <?php readFile("views/footer.phtml"); ?>

</body>

</html>
```

We can start with a simple **views/todo-item.phtml** template.

```phtml
<li class="todo-item">
    <?= $todoItem['label']; ?>
</li>
```

> Here we have decided that *list-items* have a `label`.

We also need to modify the styles a bit.

```css {linenostart="111" hl_lines="0-7 32"}

.todo-list header {
    display: grid;
    grid-template-columns: 1fr auto;
}

body>header,
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

    body>header,
    footer {
        padding-inline: 1.5rem;
    }
}
```

### Adding *todo-items*

Now we can finally start thinking about adding items!

We will need a new form, **forms/create-todo-item.phtml**.

```phtml
<form id="create-todo-item" aria-label="create a new todo item" action="create-todo-item.php" method="post">
    <input type="text" name="label" placeholder="add a new item" aria-label="item label">
    <input type="hidden" name="listId" value=<?=$listId;?>>
    <button>create</button>
</form>
```

It includes a hidden field so we know which list we are adding to.

We can place it at the top of the list in **views/todo-list.phtml**.

```phtml {hl_lines="16"}
<!DOCTYPE html>
<html lang="en">

<?php readFile("views/head.phtml"); ?>

<body>

    <?php readFile("views/header.phtml"); ?>

    <main>
        <article class="todo-list">
            <header>
                <h2><?= $todoList['title']; ?></h2>
                <p><?= count($todoList['items']); ?> items</p>
            </header>
            <?php include 'forms/create-todo-item.phtml'; ?>
            <ul>
                <?php
                foreach ($todoList['items'] as $itemId => $todoItem) {
                    include 'views/todo-item.phtml';
                }
                ?>
            </ul>
        </article>
    </main>

    <?php readFile("views/footer.phtml"); ?>

</body>

</html>
```

When the form is submitted, it triggers **create-todo-item.php**, which we can start as a simple `var_dump`.

```php
<?php
var_dump($_POST);
```

You should see that the form has given us `$_POST['label']` and `$_POST['listId']`.

We need a function in our **adapters/session.php** to do the job of creating the item.

```php {hl_lines="28-30"}
<?php

// This is the ONLY place where we handle todo data in the session

if (!isset($_SESSION['lists'])) {
    $_SESSION['lists'] = [];
}

function getTodoLists() {
    return $_SESSION['lists'];
}

function createTodoList(string $title) {
    $_SESSION['lists'][] = [
        'title'=>$title,
        'items'=>[]
    ];
}

function deleteTodoList(int $id) {
    array_splice($_SESSION['lists'], $id, 1);
}

function getTodoList(int $id) {
    return $_SESSION['lists'][$id];
}

function createTodoItem(string $label, int $listId) {
    $_SESSION['lists'][$listId]['items'][] = ['label'=>$label];
}
```


Now we can use the function in **create-todo-item.php** and redirect back to the specified list page.

```php
<?php
include 'setup.php';

createTodoItem($_POST['label'], $_POST['listId']);

header("Location: todo-list.php?id={$_POST['listId']}");
```

Try it out, you should be able to add items to the list.

One more style tweak should make the list look a bit nicer.

```css {linenostart="13"}
li.todo-item {
    font-size: 1.6em;
    padding: 0.5rem 1rem;
}
```


## Conclusions

Notice how the file structure is emerging as a model, view, controller architecture.

- The *model* is our data, stored in the session and accessed via the session adapter
- The *views* are the **.phtml** files in **views** and **forms**
- The *controllers* are the scripts which handle requests from the front-end

> MVC is not the only architecture we could use, but for a simple application like this, it is ideal.