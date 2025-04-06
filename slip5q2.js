function sumFirstLastDigit(num) {
    // Convert the number to string to extract digits
    let numStr = num.toString();
    
    // Get the first and last digits
    let firstDigit = parseInt(numStr[0]);
    let lastDigit = parseInt(numStr[numStr.length - 1]);
    
    // Return the sum of first and last digit
    return firstDigit + lastDigit;
}

// Example usage
console.log(sumFirstLastDigit(12345)); // Output: 6 (1 + 5)
console.log(sumFirstLastDigit(9876));  // Output: 15 (9 + 6)
console.log(sumFirstLastDigit(5));     // Output: 10 (5 + 5)
