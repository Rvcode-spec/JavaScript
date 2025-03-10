let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched");
    }, 1500);
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Operation completed!"); // Always runs
    });
