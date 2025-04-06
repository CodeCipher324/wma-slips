function getAlternateAlphabets(input) {
    let result = "";

    for (let i = 0; i < input.length; i += 2) {
        result += input[i];
    }

    return result;
}

// Example usage:
const inputString = "abcdefghijklmnopqrstuvwxyz";
const output = getAlternateAlphabets(inputString);

console.log("Original String: " + inputString);
console.log("Alternate Alphabets: " + output);
