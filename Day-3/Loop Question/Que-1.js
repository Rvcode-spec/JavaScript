// Iterate through all numbers from 1 to 45. Print the following:
// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”
// -------------------------------------------------

// let count=0;
for(let num=1; num<=45; num++){
    if(num%3==0 && num%5==0)
        console.log("“FizzBuzz”",num);
    if(num%3==0){
        console.log("“Fizz”",num);
    }else if(num%5==0){
        console.log("“Buzz”",num);
    }
    // count++
    // console.log();
}

