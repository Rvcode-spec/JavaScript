// Hoisting 
// console.log(x);
let x =10; // Outupt :- (let me hoisting me error aaega)

let z= 10;
console.log(z); // Output :- (10 print hoga)


{
    let x= 10;
    console.log("Block Scope ke under",x);
    
}
console.log("Block Scope ke bahar",x);// Output :- (yah log Error dega kiuki let block scope leta h )

/*
                     let ab=10;
                     let ab =10 // Nhi kar sakte

*/


    /*
        1. let Function Scope and block Scope dono me karta h 
        2. let Hoisting me nhi karta h
        3. Re-assignment kar sakte h (Value Change)
        4. Re-declaration nhi kar sakte h (Same Scope में दोबारा डिक्लेयर कर सकते हैं?) 
    */