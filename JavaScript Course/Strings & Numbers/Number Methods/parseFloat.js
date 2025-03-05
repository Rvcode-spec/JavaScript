/* The parseFloat() function in JavaScript parses a string and returns a floating-point number. If the string does not contain a valid number at the beginning, it returns NaN.

Syntax
parseFloat(string);
*/

console.log(" Basic Usage")
console.log(parseFloat("3.14"));   // Output: 3.14
console.log(parseFloat("10.5abc")); // Output: 10.5
console.log(parseFloat("100"));    // Output: 100
console.log(parseFloat("3.99e2")); // Output: 399

console.log("Extracting Number from String");


console.log(parseFloat("42.78 is the value")); // Output: 42.78
