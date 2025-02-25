// Write a JavaScript function to check if a given number is prime.

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let num = 1; num <= 10; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}

