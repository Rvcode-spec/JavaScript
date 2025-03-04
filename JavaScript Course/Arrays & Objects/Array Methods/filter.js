/*
method is used to create a new array containing elements that meet a certain 
condition specified in a callback function. It does not modify the original array.
Syntax:
const newArray = array.filter(callback(element, index, array));
*/

console.log("Example 1: Filtering Even Numbers");

let num = [1,3,4,2,8,10]
let Filtering = num.filter(num=>num%2==0)
console.log(Filtering);

console.log("-------------------------------");

console.log("Filtering Objects in an Array");

const user=[
    {name:"Ravi", age:23},
    {name: "Sukanyaa", age:21},
    { name: "Amit", age: 17 },
    {name: "Divyanshu", age:23}
]

const adults = user.filter(user=> user.age>=18)
console.log(adults);
