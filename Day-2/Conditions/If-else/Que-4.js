// Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A").

let grade = 10;

if(grade>=9){
    console.log("letter grade A");
}else if (grade>8 && grade<=9){
    console.log("B");
}else if(grade>7 && grade<=8){
    console.log("C");   
}else if(grade>6 && grade<=7){
    console.log("D");
}else{
    console.log("E");
    
}