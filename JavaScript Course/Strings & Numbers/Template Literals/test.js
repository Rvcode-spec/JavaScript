// emplate literals in JavaScript allow you to embed expressions inside strings using ${} within backticks (` `).

const name = "Ravi";
const age = 25;

// Using template literals
const message = `My name is ${name} and I am ${age} years old.`;

console.log(message);

console.log("Example of Dynamic Strings Using Template Literals");


const firstName = "Ravi";
const lastName = "Shankar";
const age1 = 25;

const dynamicString = `Hello, my name is ${firstName} ${lastName} and I am ${age1} years old.`;

console.log(dynamicString);

console.log("Function Calls inside");
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(`${greet("Ravi")}`);

console.log("Expression Interpolation");
const a = 10, b = 20;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
