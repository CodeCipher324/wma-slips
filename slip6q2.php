<?php
function isArmstrong($num) {
    $sum = 0;
    $temp = $num;
    $digits = strlen((string)$num); // Count number of digits

    while ($temp > 0) {
        $digit = $temp % 10; // Get last digit
        $sum += pow($digit, $digits); // Add digit^number of digits
        $temp = (int)($temp / 10); // Remove last digit
    }

    if ($sum == $num) {
        return "$num is an Armstrong number.";
    } else {
        return "$num is NOT an Armstrong number.";
    }
}

// Test the function
$number = 153; // You can change this number
echo isArmstrong($number);
?>
