function sumOfOddDigits(number) {
    let sum = 0;

    // Convert number to string to loop through each digit
    let numStr = number.toString();

    for (let i = 0; i < numStr.length; i++) {
        let digit = parseInt(numStr[i]);

        // Check if it's a digit (to ignore things like '-' or '.')
        if (!isNaN(digit) && digit % 2 !== 0) {
            sum += digit;
        }
    }

    return sum;
}

// Example usage:
let num = 4728391;
console.log("Sum of odd digits:", sumOfOddDigits(num));  // Output: 1+7+3+9+1 = 21
