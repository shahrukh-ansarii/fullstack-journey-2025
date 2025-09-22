console.log('JS Initializing!!!');

// ******** XXXXXXXX Async/Await XXXXXXXXX ********

// 1. async Function

// * async ek function ko define karta hai jo promise ko implicitly return karta hai.
// * Agar tum async function ke andar koi value return karte ho, to wo automatically promise ban jata hai.


// EXAMPLE 

// async function example() {
//     return "This is an async function!";
// }

// example().then((r) => console.log(r));


// 2. await Keyword

// * await keyword ko sirf async function ke andar use kiya jata hai.
// * Yeh kisi promise ke result ka wait karta hai asynchronously, aur promise ke resolve hone ke baad result return karta hai.
// * Code ko synchronous-style flow deta hai.

// EXAMPLE

// async function example() {
//     const promise = new Promise((resolve) =>
//         setTimeout(() => resolve("Promise resolved!"), 2000)
//     );
//     const result = await promise; // Wait for the promise to resolve
//     console.log(result);
// }

// example();


// PRACTICE

// GET Request with Fetch API

// async function getData() {
//     let api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await api.json()
//     return data
// }

// async function main() {
//     console.log('Initiallizing Modules');

//     console.log('Data Start');

//     let data1 = await getData();

//     console.log(data1);

//     console.log('Data end');
// }

// main();


// POST Request with Fetch API

async function createUser() {
    const url = "https://jsonplaceholder.typicode.com/users"; // API URL
    const userData = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
    };

    try { 
        console.log("Creating user...");

        // Perform POST request
        const response = await fetch(url, {
            method: "POST", // HTTP method
            headers: {
                "Content-Type": "application/json", // Data format
            },
            body: JSON.stringify(userData), // Convert JS object to JSON
        });

        // Check if response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON response
        const data = await response.json();
        console.log("User created successfully:", data);
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

// Call the function
createUser();

