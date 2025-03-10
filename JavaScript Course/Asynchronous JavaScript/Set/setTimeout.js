console.log("Simple Example");
console.log("Start");
setTimeout(() => {
    console.log("Executed after 1 seconds");
}, 1000);

console.log("End");

console.log("----------------------------------------------------------------------");

console.log("Storing setTimeout() in a Variable");

let timeoutID = setTimeout(() => {
    console.log("This message will be canceled.");
}, 1000);

clearTimeout(timeoutID); // Cancels the timeout before execution

console.log("----------------------------------------------------------------------");

console.log("4️⃣ Passing Arguments to setTimeout()");

function greet(name) {
    console.log(`Hello, ${name}!`);
}

setTimeout(greet, 2000, "Ravi"); // Pass "Ravi" as an argument

console.log("---------------------------------------------");
console.log("setTimeout() Inside a Loop (Common Mistake)");

for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(`Message ${i}`);
    }, i * 1000);
}

for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(`Message ${i}`);
    }, i * 1000);
}

console.log("----------------------------------------------");
console.log("Recursive setTimeout() for Intervals");


function repeat() {
    console.log("Repeating...");
    setTimeout(repeat, 1000); // Calls itself every 1 second
}

repeat();

