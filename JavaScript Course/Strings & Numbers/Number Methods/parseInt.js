/*
parseInt is a JavaScript function used to convert a string into an integer. It parses the string until it encounters a non-numeric character.

Syntax:
parseInt(string, radix);
string: The value to parse (a string or number).
radix (optional): The base of the numeral system (e.g., 10 for decimal, 16 for hexadecimal).
*/

console.log("1. Basic Usage");
console.log(parseInt("42")); // Output: 42
console.log(parseInt("42px")); // Output: 42 (stops at 'p')
console.log(parseInt("abc42")); // Output: NaN (not a number)

console.log("2. Using Radix");

console.log(parseInt("10.99")); // Output: 10 (Ignores decimal part)
console.log(parseInt("3.14")); // Output: 3

console.log("3. Handling Decimals");
console.log(parseInt("10.99")); // Output: 10 (Ignores decimal part)
console.log(parseInt("3.14")); // Output: 3

