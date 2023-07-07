---
title: Introducing PHP
type: exercise
weight: 20
---

In this exercise, we will convert out **index.html** into a php script and add some dynamic capabilities.
<!--more-->

Let's look at our HTML list.

```html {hl_lines="22-38"}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO Lists</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header>
        <h1>TODO Lists</h1>
    </header>

    <main>
        <form id="create-todo-list" aria-label="create a new todo list" action="create-todo-list.php" method="post">
            <input type="text" name="title" placeholder="new list" aria-label="todo list title">
            <button>create</button>
        </form>
        <ul>
            <li class="todo-list">
                <h2 class="title">This is a todo-list</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">This is another todo-list</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">A third todo-list</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">list 4</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">The fifth todo-list</h2>
            </li>
        </ul>
    </main>

    <footer>
        <p>&copy; Graeme Stuart 2023</p>
    </footer>

</body>

</html>
```

Obviously, these items are **hard-coded** into the HTML.
We need to make them dynamic.

## Starting a PHP Server

Find and install the **PHP Server** extension for VSCode. 
This should be straight forward to use as long as PHP is already installed.

{{<figure src="images/php-server-extension.png" caption="The PHP Server extension for VSCode">}}

Once installed, simply click the blue button in the top-right corner of the VSCode window. 

> Alternatively use *ctrl+shift+p* or *F1* to bring up the command palette and search for PHP Server, you should see options to start the server there.

Now, you should be able to access the file via your web browser at [http://localhost:3000/](http://localhost:3000/).

## Extracting some static HTML

Once the PHP Server is running, you can convert your **index.html** into a php script by changing the filename to **index.php**.

You should still see the same output at [http://localhost:3000/](http://localhost:3000/).
The server is happy to use php files and since there is no php in the file, it is returned unchanged.

Create a new folder called **views**.
This is where we will put our user interface components.

Now create a file called **views/head.phtml** and copy the entire `<head>` element from our template into it.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO Lists</title>
    <link rel="stylesheet" href="style.css">
</head>
```

> The *.phtml* extension is for dynamic html templates.
> We use it here to prevent VSCode from validating the HTML.
> If we use the *.html* extension then the missing `<!DOCTYPE html>` declaration would be flagged as an error.

Now, back in **index.php** replace the `<head>` element with the following:

```php
<?php readfile("views/head.phtml"); ?>
```

Again, the output at [http://localhost:3000/](http://localhost:3000/) should be unchanged.
Our script is taking the snippet and inserting it into the page.

>The `readfile` function in PHP will essentially dump the contents of a specified file into our script.
We will use this to extract some common parts of our HTML out to separate files so they can be used again.

Do the same for the `<header>` and `<footer>` elements. 
So you should have three files in the **views** folder.

- *head.phtml*
- *header.phtml*
- *footer.phtml*

Your **index.php** should now look like this.

```phtml {hl_lines="4 8 30"}
<!DOCTYPE html>
<html lang="en">

<?php readfile('views/head.phtml'); ?>

<body>

    <?php readfile('views/header.phtml'); ?>

    <main>
        <ul>
            <li class="todo-list">
                <h2 class="title">This is a todo-list</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">This is another todo-list</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">A third todo-list</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">list 4</h2>
            </li>
            <li class="todo-list">
                <h2 class="title">The fifth todo-list</h2>
            </li>
        </ul>
    </main>

    <?php readfile('views/footer.phtml'); ?>

</body>

</html>
```

Check out the [live site](http://localhost:3000/), it should still be unchanged.

Now we can add one more view file.
Move the contents of **index.php** into **views/index.phtml** and replace **index.php** with the following.

```php
<?php
include 'views/index.phtml';
```

Now all our HTML code is defined in *.phtml* templates.

## Extracting a dynamic template

OK, so the next thing we need to deal with is the list itself.
We need to define a template we can use for each *todo-list*.
But because we need a dynamic element (the *todo-list* title) we need the template to be a php script.

Create a file **views/todo-list-summary.phtml** and add the following content.

```phtml
<li class="todo-list">
    <h2 class="title"><?php echo $title; ?></h2>
</li>
```
> Notice this file has some php code, we have replaced the literal text with a `$title` variable so we can use this template for all of the *todo-lists*.

Now, we can only use this script if we first set the value of the `$title` variable.
To do this, we need to loop over an array of strings.

In **index.php**, update the file as follows:

```php
<?php
$todoLists = [
    'This is a todo-list',
    'This is another todo-list',
    'A third todo-list',
    'list 4',
    'The fifth todo-list',
];
include 'views/index.phtml';
```

This provides us with an array of strings we can use in our **index.phtml** template.
We can loop over the array and run our script once for each *todo-list*.

```phtml {hl_lines="1-9 22-26"}
<!DOCTYPE html>
<html lang="en">

<?php readfile('views/head.phtml'); ?>

<body>

    <?php readfile('views/header.phtml'); ?>

    <main>
        <ul>
            <?php
            foreach($todoLists as $title) {
                include 'views/todo-list-summary.phtml';
            }
            ?>
        </ul>
    </main>

    <?php readfile('views/footer.phtml'); ?>

</body>

</html>
```

> Notice the `$todoLists` variable is *in scope* here.
The `$title` variable changes for each iteration of the `foreach` loop. 

Reload [the live page](http://localhost:3000/) and you should see that nothing has changed. 
The resultant HTML file is still identical to our original template.

> Try modifying the `$todoList` data.
> ```php
> $todoLists = [
>     'HTML',
>     'CSS',
>     'PHP',
> ];
> ```
> This should be reflected in the output.

> Try modifying the **views/todo-list-summary.phtml** template
> ```phtml
> <li class="todo-list">
>     <span>todo-list</span>
>     <h2 class="title"><?php echo $title; ?></h2>
> </li>
> ```
> You should see all the items change.

## Conclusion

We have broken our HTML template into meaningful pieces which can be reused.
Our php application is still extremely simple. 
It boils down to a simple `foreach` loop over a static array of strings.
