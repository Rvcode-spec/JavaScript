async function fetchData(){
    return "Data Fetch successfully"
}

fetchData().then((result)=>{
        console.log(result);
        
})

// Using await to Wait for a Promise
// Instead of using .then(), we can pause execution using await:

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000);
    });
}

async function displayData() {
    console.log("Fetching data...");
    let result = await fetchData(); // Waits here until fetchData() resolves
    console.log(result);
}

displayData();

