fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => console.log(users))
    .catch(error => console.error("Error:", error));

    console.log("---------------------------------");
console.log(" Using async/await for Cleaner Code");
    
    async function getUsers() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
            let users = await response.json();
            console.log(users);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    getUsers();
    