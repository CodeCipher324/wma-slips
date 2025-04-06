<?php
function validatePAN($phone) {
    // Regular expression for PAN format
    $pattern = "/^[0-9]{10}$/";
    
    if (preg_match($pattern, $phone)) {
        return "✅ Valid Phone Number.";
    } else {
        return "❌ Invalid Phone Number.";
    }
}

// Test PAN Numbers
$phoneno1 = "8329011437"; // Valid
$phoneno2 = "ABC1234EF4"; // Invalid
$phoneno3 = "ABCD12345F"; // Invalid

echo $phoneno1 . " → " . validatePAN($phoneno1) . PHP_EOL;
echo $phoneno2 . " → " . validatePAN($phoneno2) . PHP_EOL;
echo $phoneno3 . " → " . validatePAN($phoneno3) . PHP_EOL;
?>
