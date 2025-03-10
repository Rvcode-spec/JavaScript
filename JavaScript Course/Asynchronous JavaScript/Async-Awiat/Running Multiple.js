/*

6️⃣ Running Multiple Promises in Parallel (Promise.all)
If we don't need to wait one after another, we can run them together:

*/

function stepOne() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 1 completed"), 1000);
    });
}

function stepTwo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 2 completed"), 1000);
    });
}


async function runParallel() {
    let results = await Promise.all([stepOne(), stepTwo()]);
    console.log(results);
}

runParallel();
