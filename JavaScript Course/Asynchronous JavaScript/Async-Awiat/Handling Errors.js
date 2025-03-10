// Handling Errors with try...catch

// ith .then(), we use .catch() for errors.
// With async/await, we use try...catch:

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false; // Change to true for success case
            if (success) {
                resolve("✅ Data fetched!");
            } else {
                reject("❌ Error: Unable to fetch data");
            }
        }, 1500);
    });
}

async function displayData() {
    try {
        console.log("Fetching data...");
        let result = await fetchData(); // If rejected, goes to catch block
        console.log(result);
    } catch (error) {
        console.log(error); // Handles errors
    }
}

displayData();

