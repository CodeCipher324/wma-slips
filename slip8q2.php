<?php
function isPalindrome($string) {
    // Remove spaces and convert to lowercase for accurate comparison
    $processedString = strtolower(str_replace(' ', '', $string));
    
    // Reverse the string
    $reversedString = strrev($processedString);

    // Check if original and reversed are the same
    if ($processedString === $reversedString) {
        return "The string '$string' is a palindrome.";
    } else {
        return "The string '$string' is not a palindrome.";
    }
}

// Example usage
$input = "Madam";
echo isPalindrome($input);
?>
