console.log('JS Initializing...');




// try {
//     let num = "hello";
//     console.log(num.toUpperCase()); // Error: num is a number, not a string
// } catch (error) {
//     console.log("Kuch masla hai:", error.message); // Error handle ho gaya
// }
// console.log("Code chal raha hai..."); // Yeh line execute hogi

// EXAMPLE #2 

// function divide(a, b) {
//     try {
//         if (b === 0) {
//             throw new Error("Zero se divide nahi ho sakta!"); // Custom error
//         }
//         return a / b;
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// console.log(divide(10, 0)); // Zero se divide nahi ho sakta!
// console.log(divide(10, 2)); // 5

// EXAMPLE #3

// let jsonData = '{ "name": "Ali", "age": 25 }'; // Sahi JSON

// try {
//     let user = JSON.parse(jsonData); // JSON ko object me convert karna
//     console.log("User ka naam:", user.name);
//     console.log("User ki age:", user.age);
// } catch (error) {
//     console.log("Invalid JSON format:", error.message);
// }

// EXAMPLE #4 (Throwing Custom Error)

try {
    console.log('Try block chal raha hai...');
    throw new Error ('kch tou locha hai')
    
} catch (error) {
    console.log('error pakra gya :' , error.message);
}
console.log('kia hal hai janiTry block chal raha hai...');
