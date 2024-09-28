// Write a program that determines if a year is a leap year.

let year = 2024;

if(year%4==0 && year%100!== 0 || year%400==0){
    console.log("leap year", year);
}else{
    console.log("Not a leep year", year);
    
}