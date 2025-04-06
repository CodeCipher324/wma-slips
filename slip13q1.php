<?php
// Get the number from the user (you can change this value as needed)
$number = 5; // You can also use $_GET or $_POST to get input from the user

echo "<h2>Multiplication Table of $number</h2>";

for ($i = 1; $i <= 10; $i++) {
    $result = $number * $i;
    echo "$number x $i = $result <br>";
}
?>
