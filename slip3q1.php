<?php
function validatePAN($pan) {
    // Regular expression for PAN format
    $pattern = "/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/";
    
    if (preg_match($pattern, $pan)) {
        return "✅ Valid PAN Number.";
    } else {
        return "❌ Invalid PAN Number.";
    }
}

// Test PAN Numbers
$pan1 = "ABCDE1234F"; // Valid
$pan2 = "ABC1234EFG"; // Invalid
$pan3 = "ABCD12345F"; // Invalid

echo $pan1 . " → " . validatePAN($pan1) . PHP_EOL;
echo $pan2 . " → " . validatePAN($pan2) . PHP_EOL;
echo $pan3 . " → " . validatePAN($pan3) . PHP_EOL;
?>
