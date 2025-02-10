---
title: Error handling
type: exercise
weight: 50
---

Working out Error Handling

<!--more-->


## ERROR HANDLING!!!!

> It will only work *if* you have a *todo-list* in your session data.
> If you don't, then you should see `NULL`.

navigate to [todo-list.php](http://localhost:3000/todo-list.php) and you should see an empty array.
If you navigate to [todo-list.php?key=value](http://localhost:3000/todo-list.php?key=value) you should see the data we passed in via query parameters.


Since a user can simply type a url into the browser, they can easily pass arbitrary data into our script.
We need to add a few checks to avoid errors.


```php {hl_lines="3-6"}
<?php
include 'setup.php';

if(!isset($_GET['id']) or !ctype_digit($_GET['id'])) {
    header("Location: /");
}

$todoList = getTodoList($_GET['id']);

var_dump($todoList);
```

Our code requires the `id` parameter to be present and is must be an integer.
Anything else will result in an immediate redirect back to the root of the application.

But what if a user requests a list that doesn't exist?
In this case, we can also redirect to the root.

```php
<?php
include 'setup.php';

if(!isset($_GET['id']) or !ctype_digit($_GET['id'])) {
    header("Location: /");
}

$todoList = getTodoList($_GET['id']);

if(is_null($todoList)) {
    http_response_code(404);
    echo "<h1>Not found</h1>";
    echo "<p>The todo-list you requested was not found.</p>";
    die();
}

var_dump($todoList);
```

> Strictly speaking we should probably provide HTTP error codes for invalid requests or requests for non-existent data.
