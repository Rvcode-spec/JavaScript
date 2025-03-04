/*

 used to create a new array by applying a function to each element 
 of an existing array. It does not 
 modify the original array but returns a new transformed array.

 Syntax:
 const newArray = array.map((element, index, array) => {
  // return the transformed element
});

*/

        console.log("Example 1: Doubling Numbers");

        var numbers = [2,8,9,7]
        var Doubling = numbers.map(num=>num*2);
        console.log(Doubling);
        
        console.log("----------------------------------------");

        console.log("Example 2: Extracting Property from Objects");

        obj=[

            {name:"Ravi", age: "25"},
            {name: "Sukanyaa", age:"21"}
        ]

        const name = obj.map(obj=>({name:obj.name, age: obj.age}))
        console.log(name);
        
        console.log("---------------------------------------------");
        console.log("Example 3: Formatting Strings");
        
        
        const words = ["Hello Ravi "]
        const upper = words.map(words=>words.toUpperCase());
        console.log(upper);
        