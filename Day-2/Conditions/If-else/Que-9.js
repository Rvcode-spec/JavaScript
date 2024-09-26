// Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: weight / (height * height).

let weight= 84;
let height = 5.7;
let bmi= weight / (height * height);
console.log(bmi);

if(bmi<18.5){
    console.log("Underweight");
}else if(bmi>=18.5 && bmi<24.9){
    console.log("Normal weight");
}else if(bmi>=25 && bmi<29.9){
    console.log("Over weight");
}else{
    console.log("Obesity");
    
}
