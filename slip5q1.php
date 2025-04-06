/^[a-z]{10}@gmail.com$/

<?php
function validatemail($emailid) {
   
    $pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
    
    if (preg_match($pattern, $emailid)) {
        return "✅ Valid Email id.";
    } else {
        return "❌ Invalid email id.";
    }
}


$emailid1 = "sohamkul2005@gmail.com"; // Valid
$emailid2 = "ABC1234EF4"; // Invalid
$emailid3 = "ABCD12345F"; // Invalid

echo $emailid1 . " → " . validatePAN($emailid1) . PHP_EOL;
echo $emailid2 . " → " . validatePAN($emailid2) . PHP_EOL;
echo $emailid3 . " → " . validatePAN($emailid13) . PHP_EOL;
