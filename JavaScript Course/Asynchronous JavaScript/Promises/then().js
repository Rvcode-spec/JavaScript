console.log("Basic Example of a Promise with .then()");

let myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully")

        },1000)
})

// Handling the resolved state

// myPromise.then((result)=>{
//     console.log(result);
    
// })


console.log("Chaining .then()");
console.log("Each .then() returns a new Promise, allowing chaining:");


let yourPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Step-1: Date fetch")
    },1000)
})


yourPromise.then((result)=>{
    console.log(result);
    return "Step:-2: Processing Data"
})

.then((nextStep)=>{
    console.log(nextStep);
    return "Step-3: Display Date "
})
.then((finalStap)=>{
    console.log(finalStap);
})

