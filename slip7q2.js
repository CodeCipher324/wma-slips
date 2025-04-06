const readline = require('readline');

// Create interface to read input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for a string
rl.question("Enter a string: ", function(inputString) {
  // Define vowels
  const vowels = 'aeiouAEIOU';
  let foundVowels = '';

  // Check each character
  for (let char of inputString) {
    if (vowels.includes(char)) {
      foundVowels += char + ' ';
    }
  }

  // Display result
  if (foundVowels.length > 0) {
    console.log("Vowels in the string are:", foundVowels.trim());
  } else {
    console.log("No vowels found in the string.");
  }

  // Close the readline interface
  rl.close();
});
