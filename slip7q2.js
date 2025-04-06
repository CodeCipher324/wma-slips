// Accept input from the user
let inputString = prompt("Enter a string:");

// Define vowels
let vowels = 'aeiouAEIOU';

// Extract vowels from the input
let foundVowels = '';

for (let char of inputString) {
    if (vowels.includes(char)) {
        foundVowels += char + ' ';
    }
}

// Display the vowels
if (foundVowels.length > 0) {
    alert("Vowels in the string are: " + foundVowels);
} else {
    alert("No vowels found in the string.");
}
