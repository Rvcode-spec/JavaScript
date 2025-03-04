/*
used to process elements of an array and return a single accumulated result. 
It executes a reducer function on each element of the array, 
passing the return value from the computation on the preceding element.

Syntax:
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

callback: A function that runs on each element of the array.
accumulator: The running total or accumulated result.
currentValue: The current element being processed.
currentIndex (optional): The index of the current element.
array (optional): The original array being iterated over.
initialValue (optional): The initial value of the accumulator.

*/

console.log('Example-1  Sum of Array Elements');

let sum = [1,3,4,5,8]
let total = sum.reduce((acc, curr)=> acc+ curr);
console.log(total);
console.log("----------------------------------");

console.log("Example-2  Finding the Maximum Value");
let num = [1, 4, 100, 800, 200,12]
let Maximum = num.reduce((max, curr)=>curr > max ? curr:max)
console.log(Maximum);
console.log("----------------------------------");

console.log("Example-3  Flattening an Array");

let nestedArray = [[1,3], [2,4],[5,6]]
let flattened = nestedArray.reduce((acc,curr)=>acc.concat(curr))
console.log(flattened);
// Concat - merge array 

console.log("----------------------------------"); 

console.log("Example - 4 Counting Occurrences");
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const Counting = words.reduce((acc, word)=>{
    acc[word]= (acc[word] || 0) + 1;
    return acc;
},{})
console.log(Counting);

console.log("----------------------------------"); 

console.log("Example-5 Rouping Objects by Property");

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
];

const groupedByAge = people.reduce((acc, person) => {
    acc[person.age] = acc[person.age] || [];
    acc[person.age].push(person);
    return acc;
}, {});

console.log(groupedByAge);

console.log("----------------------------------"); 

console.log("Example-6  Removing Duplicates from an Array");

let arr = [1,1,4,5,6,5,4,3,4,2,4];
let uniqueNumbers = arr.reduce((acc,num)=>{
  if(!acc.includes(num)) acc.push(num)
    return acc;
}, [])

console.log(uniqueNumbers);


