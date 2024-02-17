<?php
    $users = ['Alison', 'Benjamin', 'Carol'];
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

    echo in_array('id', $_GET);
    if (in_array('id', $_GET)) {
        $selected_user = $users[$$_GET['id']];
        echo "<h2>User {$_GET['id']}</h2>";
        echo "<p>Name: $selected_user</p>";
    } else {
        var_dump($_GET);
    }
    ?>
</body>

</html>