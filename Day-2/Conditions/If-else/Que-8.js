// Write a program that greets the user based on the time of day. Display good morning, good afternoon or good evening based on the time of day when you run the code.

let now = new Date();  // Date
let hours =now.getHours(); // Time 

if(hours>=5 && hours<12){
    console.log("Good Morning",now);
    
}else if(hours>12 && hours<17){
    console.log("Good Afternoon",now);
}else if(hours>17 && hours<20){
    console.log("Good Evening",now);
    
}else{
    console.log("Good Night");
    
}