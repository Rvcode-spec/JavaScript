//Hoisting Value ((ऊपर ले जाया जाता है।)
console.log(a);
var a =10; // Output :-  undefined Hoga 


/*

var a;  // Hoisting के कारण, यह सबसे ऊपर चला जाता है।
console.log(a); // ✅ undefined
a = 10; // यहाँ वैल्यू assign की गई है।


*/

var x=10
console.log(x); // Output :- 10 print hoga 

// Re-assignment
var y=10
y=30 
console.log(y); // Output :- 30 (Value Change bhi kar sakte h )

// Re-declaration
console.log("--------------------------------");
var z=10;
var z=10;
console.log(z); //(Same Scope Re-declaration Kar sakte h ): Output:- 10 

// Block Scope 
{
    var a=10;
    console.log("Scope ke under",a);// Output:- 10 
}
console.log("Block Scope",a); //  Output:- 10 (Var Black Scope nhi leta h )


function test(){
    var s=10
}
test()
console.log(s); // var Function Scope को फॉलो करता है।

if (false) {
    var x = 100;
}
console.log(x); // ✅ Undefined (Error नहीं आएगा, लेकिन x डिक्लेयर हो चुका है!)

/*

    1. Function Scope ko leta h Error aaega likin  block leta nhi h 
    2. Re-assignment ho sakta h (Value Change)
    3. Re-declaration bhi kar sakte h (Same Scope)
    4. Hoisting  undefined dega


*/