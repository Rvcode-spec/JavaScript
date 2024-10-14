// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.
let num=6, num1=1;

if(num>num1 && num1>num){
    if(num>num1)
    console.log("guess is higher");
    
}else if(num>num1){
    console.log("lower");
    
}else if(num1>num && num>num1){
    console.log("lower");
    
}



