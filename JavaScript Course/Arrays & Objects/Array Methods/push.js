// .Push() method is used to add one or more elements to the end of an array. 

console.log(" Ex-1. Adding a Single Element");
let student = ['ravi', 'sukanyaa', 'anu'];
student.push("Divyanshu");
console.log(student);

console.log('------------------------------------');
console.log(" Ex-2. Adding a Multiple Elements");
let user = ['Rohit', 'Roshan']
user.push('Ravi', 'Sukanyaa', 'Anu', 'Kashisa')
console.log(user);

console.log('------------------------------------');
console.log("Ex-3. Using a Empty Array");
let exam = []
exam.push("SSC", "UPSC", "NEET", "JE");
console.log(exam);

console.log('------------------------------------');
console.log(" Ex-4. Returns New Length");

let numbers = [1,3,4,5,6,7]
let newNumbers = numbers.push(2,8)
console.log(numbers);
// console.log(newNumbers);  // Last Value Print


