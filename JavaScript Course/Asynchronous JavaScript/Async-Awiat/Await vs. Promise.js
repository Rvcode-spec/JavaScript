// Using .then() (Traditional)

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));


// Using async/await (Cleaner)

async function getData() {
    try {
        let data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getData();


