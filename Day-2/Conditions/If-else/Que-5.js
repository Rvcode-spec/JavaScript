// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

let age = 5;
let price = 5;
// let Sum = 0


if(age<12){
    console.log("ticket Price of",age, price);
}else if(age>12 && age<=18){
    price += 5;
    console.log("ticket Price of",age, price);  
}else if(age<=60 && age>18){
    price = 20;
    console.log("ticket Price of",age, price);
}
else{
    console.log("Nothing");
}

