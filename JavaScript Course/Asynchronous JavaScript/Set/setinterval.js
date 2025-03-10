setInterval(() => {
    console.log("Hello, every 2 seconds!");
}, 2000);

console.log("-----------------------------------------------");
console.log("Stopping setInterval() with clearInterval()");

let intervalID = setInterval(() => {
    console.log("This message will stop after 5 seconds.");
}, 1000);

setTimeout(() => {
    clearInterval(intervalID); // Stops the interval after 5 seconds
    console.log("Interval stopped.");
}, 5000);

console.log("----------------------------------------");
console.log("setInterval() with Dynamic Values");

let count = 1;
let intervalID1 = setInterval(() => {
    console.log(`Count: ${count}`);
    count++;
    if (count > 5) clearInterval(intervalID1); // Stop after 5 times
}, 1000);


console.log("---------------------------------------------------");
console.log("etInterval() vs setTimeout() Recursion");

let count1 = 0;
setInterval(() => {
    console.log(`Interval Count: ${count1}`);
    count1++;
}, 1000);

console.log("Example: Digital Clock");
function showTime() {
    let time = new Date().toLocaleTimeString();
    console.log(time);
}

setInterval(showTime, 1000); // Updates every second

