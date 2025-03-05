/* The split() method in JavaScript is used 
to divide a string into an array of substrings 
based on a specified separator.

Syntax:
string.split(separator, limit) / optional
*/

console.log("Ex-1 Split by space");

var str = "Ravi Shankar Singh "
let newArrar = str.split(" ")
console.log(newArrar);

console.log("Ex-2. Split by comma");

var str = "Ravi,Shankar"
var newA = str.split(",");
console.log(newA);

console.log("Ex-3 Split and limit the result");
let str1 = "one,two,three,four";
let parts = str1.split(",", 2);
console.log(parts);

console.log("Ex-4 Split by each character");
let str2 = "hello";
let chars = str2.split("");
console.log(chars);
// Output: ['h', 'e', 'l', 'l', 'o']


console.log("Ex-5 Split using a regular expression");
let str3 = "apple123banana456grape13ravi765singhqwus8swe-c";
let result = str3.split(/\d+/); // Split by digits
console.log(result);
// Output: ['apple', 'banana', 'grape']

console.log("Ex-6  If separator is not found");
let str4 = "HelloWorld";
let result1 = str4.split(",");
console.log(result1);
// Output: ['HelloWorld']  (No split, since "," is not found)


