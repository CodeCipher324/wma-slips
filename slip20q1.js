// Get current hour from system time
const currentHour = new Date().getHours();

let greeting = "";

// Determine greeting based on hour
if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning!";
} else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon!";
} else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Good Evening!";
} else {
    greeting = "Good Night!";
}

// Display the greeting
console.log(greeting);

// Optionally display it on a webpage
document.body.innerHTML = `<h1>${greeting}</h1>`;
