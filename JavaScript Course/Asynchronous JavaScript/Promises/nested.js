// Comparison with Callbacks
// Using .then(), we avoid "callback hell" and make the code more readable:


function fetchData(callback) {
    setTimeout(() => {
        console.log("Step 1: Data Fetched");
        callback();
    }, 1000);
}

fetchData(() => {
    setTimeout(() => {
        console.log("Step 2: Processing Data");
        setTimeout(() => {
            console.log("Step 3: Displaying Data");
        }, 1000);
    }, 1000);
});

console.log("-------------------------------------------------------------------");


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Step 1: Data Fetched");
    }, 1000);
})
    .then((result) => {
        console.log(result);
        return new Promise((resolve) => {
            setTimeout(() => resolve("Step 2: Processing Data"), 1000);
        });
    })
    .then((result) => {
        console.log(result);
        return new Promise((resolve) => {
            setTimeout(() => resolve("Step 3: Displaying Data"), 1000);
        });
    })
    .then((result) => {
        console.log(result);
    });
