<?php
    session_start();

    if(!isset($_SESSION['users'])) {
        $_SESSION['users'] = ['Alison', 'Benjamin', 'Carol'];
    }

    if (array_key_exists('username', $_POST)) {
        array_push($_SESSION['users'], $_POST['username']);
    }


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User</title>
</head>

<body>
    <?php
    if (array_key_exists('id', $_GET)) {
        $selected_user = $_SESSION['users'][$_GET['id']];
        echo "<h2>User {$_GET['id']}</h2>";
        echo "<p>Name: $selected_user</p>";
        echo "<a href=\"./users.php\">User list</a>";
    } else {
        echo "<h2>All users</h2>";
        echo "<ul>";
        foreach($_SESSION['users'] as $id => $user) {
            echo "<li><a href=\"?id=$id\">$user</a><form method=\"POST\"><button name=\"delete\">delete</button></form></li>";
        }
        echo "</ul>";
        echo "<form method=\"POST\"><label for=\"username\">New user</label><input id=\"username\" name=\"username\"></form>";
        var_dump($_SESSION);
    }
    ?>
</body>

</html>