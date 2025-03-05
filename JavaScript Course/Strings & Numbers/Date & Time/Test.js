// Here are examples of how to use JavaScript's Date object along with getFullYear(), getMonth(), and getDate() methods:

// Create a new Date object representing the current date and time
let currentDate = new Date();

// Get the full year
let year = currentDate.getFullYear(); // Example: 2025

// Get the month (0-11, where 0 is January and 11 is December)
let month = currentDate.getMonth() + 1; // Adding 1 to get 1-12 format

// Get the date (day of the month)
let date = currentDate.getDate(); // Example: 6 (if today is the 6th)

// Display the results
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
