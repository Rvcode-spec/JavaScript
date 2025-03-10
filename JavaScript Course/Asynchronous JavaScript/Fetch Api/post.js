console.log(" Making a POST Request (Sending Data)");
async function createUser() {
    let newUser = {
        name: "Ravi Shankar",
        email: "ravi@example.com"
    };

    let response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });

    let data = await response.json();
    console.log("User Created:", data);
}

createUser();
