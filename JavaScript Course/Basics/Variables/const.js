function test(){
    const a= 10;
    console.log(a); 
}
test()

// Block Scope
{
    const x= 10;
    console.log("x is not defined",x);

}

// console.log("x is not defined",x);// Error Show karega ( सिर्फ {} के अंदर एक्सेस होगा)


// Hoisting
// console.log("initialization",z);
// const z= 10 ; //Error ( Cannot access 'z' before initialization)
console.log("____________________________________________________");

const y= 50;
y=56;
console.log("Error",y);

console.log("____________________________________________________");
// Re-declaration 

/*
const b =10;
const b =10 ;

*/


/*
        1. const ko Function Scope karta h lekin  Block Scope nhi kar karta.
        2. Hoisting Initial Value (undefined या Error)
        3. Re-declaration bhi nhi ho sakta (Same Scope में दोबारा डिक्लेयर कर सकते हैं?).
        4. Re-assignment (Value Change nhi kar sakte)
*/


