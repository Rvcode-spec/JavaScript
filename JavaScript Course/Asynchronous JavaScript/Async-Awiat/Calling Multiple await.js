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

async function processSteps() {
    console.log(await stepOne());
    console.log(await stepTwo());
}

processSteps();
