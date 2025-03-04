/*
 used to add, remove, or replace elements in an array. It modifies the
  original array and returns the removed elements.

  array.splice(start, deleteCount, item1, item2, ...);


*/

console.log("Example-1:- Removing elements");
let arr =[1,3,5,6,7,9];
let remove = arr.splice(1,2)
console.log(remove);
console.log(arr);

console.log('------------------------------------------');

console.log("Example-2:-  Adding elements");
let arr1 = [1,2,6]
arr1.splice(1,0,4,5)
console.log(arr1);

console.log('------------------------------------------');

console.log("Example:-3 Replacing elements");

let arr2 = [2,4,6,7,8];
arr2.splice(1,2,9,10);
console.log(arr2);

console.log('------------------------------------------');

console.log("Example-4:- empty an array");

let arr3 = [1,9,8,5];
arr3.splice(0,arr3.length)
console.log(arr3);



