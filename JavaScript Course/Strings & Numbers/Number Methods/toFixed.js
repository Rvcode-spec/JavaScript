/*The .toFixed() method in JavaScript is
 used to format a number to a fixed number
 of decimal places and returns a string.
Syntax
 num.toFixed(digits)
 
 */

 console.log("1. Basic Usage");
 let num = 5.6789;
console.log(num.toFixed(2)); // "5.68"
console.log(num.toFixed(0)); // "6"
console.log(num.toFixed(4)); // "5.6789"

console.log("2. Using .toFixed() on Whole Numbers");
let num1 = 10;
console.log(num1.toFixed(2)); // "10.00"


console.log("3. Handling Large Decimals");
let num2 = 0.9999;
console.log(num2.toFixed(2)); // "1.00"

console.log("4. Using .toFixed() on Negative Numbers");
let num3 = -7.12345;
console.log(num3.toFixed(3)); // "-7.123"


console.log("5. Converting Back to Number");
// Since .toFixed() returns a string, you may need to convert it back to a number:
let num4= 3.14159;
let fixedNum = Number(num4.toFixed(2)); // 3.14
console.log(fixedNum); // 3.14
