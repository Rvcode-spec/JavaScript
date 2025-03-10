console.log("Handling Errors Properly");
//Always check if the response is OK (status 200) before using .json().
async function getUserData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let user = await response.json();
        console.log(user);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getUserData();

// Using fetch() with setTimeout() for Request Timeout

async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => controller.abort(), timeout);

    try {
        let response = await fetch(url, { signal });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        let data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        if (error.name === "AbortError") {
            console.error("Request timed out!");
        } else {
            console.error("Error:", error);
        }
    }
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/users", 3000);
