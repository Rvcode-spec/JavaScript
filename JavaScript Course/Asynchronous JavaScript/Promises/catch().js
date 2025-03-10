console.log("Handling Errors with .catch()");
console.log("If a Promise rejects, we handle it using .catch():");
console.log("-------------------------------------------------------------------");

let testcatch = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Date Fetch");
        reject("Date Error")
    },1000)
})

testcatch.then((result)=>{
    console.log(result);
    
}).catch((error)=>{
    console.log(error);
})
