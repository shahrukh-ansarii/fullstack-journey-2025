console.log('JS Initializing!!!');

// let prom1 = new Promise((resolve, reject) => {
//     let rendom1 = Math.random();
//     if (rendom1 < 0.5) {
//         reject("Random number not supported")
//     }
//     else {
//         setTimeout(() => {
//             console.log("This is inner timeout");
//             resolve("This is resolve text")
//         }, 2000);
//     }
// })

// let prom2 = new Promise((resolve, reject) => {
//     let rendom1 = Math.random();
//     if (rendom1 < 0.5) {
//         reject("Random numer not supported 2")
//     }
//     else {
//         setTimeout(() => {
//             console.log("This is inner timeout 2");
//             resolve("This is resolve text 2")
//         }, 2000);
//     }
// })

// prom1.then((a) => {
//     console.log(a);
// }).catch(err => {
//     console.log(err);
// })

// Promise.allSettled

// let p3 = Promise.allSettled([prom1, prom2])
// p3.then((a) => {
//     console.log(a);
// }).catch(err=>{
//     console.log(err)
// })


//  Simple Promise Chaining
// Example: Socho, tumhare paas ek kaam hai jo teen steps me complete hoga. Pehla kaam khatam hone ke baad doosra start hoga, aur phir teesra.

// Step 1: Start a promise
// new Promise((resolve) => {
//     console.log("Step 1: Starting...");
//     resolve(10); // Passing initial value
// })
//     .then((result) => {
//         console.log(`Step 2: Received ${result}, doubling it.`);
//         return result * 2; // Passing doubled value
//     })
//     .then((result) => {
//         console.log(`Step 3: Received ${result}, adding 5.`);
//         return result + 5; // Adding 5
//     })
//     .then((finalResult) => {
//         console.log(`Final Result: ${finalResult}`);
//     });

// ******** XXXXXXXXXXXXXXXXX ********

// Attaching Multiple Promises ka matlab hai ek saath multiple promises ko execute karna ya handle karna. 

// 1. Promise.all
// 2. Promise.allSettled 
// 3. Promise.race
// 4. Promise.any

// Promise.all

// * Sab promises ko ek saath execute karta hai.
// * Tabhi resolve karega jab sab promises resolve ho jayein.
// * Agar ek promise bhi reject ho jaye, to poora Promise.all reject ho jata hai.

// const promise1 = Promise.resolve("Task 1 complete");
// const promise2 = Promise.resolve("Task 2 complete");
// const promise3 = Promise.reject("Task 3 complete");

// Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//         console.log("All tasks completed:", results);
//     })
//     .catch((error) => {
//         console.error("One of the tasks failed:", error);
//     });


// ******** XXXXXXXXXXXXXXXXX ********

// 2. Promise.allSettled

// * Sab promises ko execute karta hai aur har promise ka result return karta hai, chahe resolve ho ya reject.
// * Koi promise reject ho, tab bhi baki promises ka result milega.


// const promise1 = Promise.resolve("Task 1 complete");
// const promise2 = Promise.reject("Task 2 failed");
// const promise3 = Promise.resolve("Task 3 complete");

// Promise.allSettled([promise1, promise2, promise3]).then((results) => {
//     console.log("Results of all tasks:", results);
// });


// ******** XXXXXXXXXXXXXXXXX ********

// 3. Promise.race

// * Pehle complete hone wale promise ka result deta hai (resolve ya reject).
// * Baaki promises ko ignore kar deta hai.

// const promise1 = new Promise((resolve) => setTimeout(resolve, 100, "Task 1 complete"));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 200, "Task 2 complete"));

// Promise.race([promise1, promise2]).then((result) => {
//     console.log("First completed task:", result);
// });


// ******** XXXXXXXXXXXXXXXXX ********

// 4. Promise.any

// * Pehle resolve hone wale promise ka result deta hai.    
// * Agar sab promises reject ho jayein, to ek AggregateError deta hai.

// const promise1 = Promise.reject("Task 1 failed");
// const promise2 = Promise.resolve("Task 2 complete");
// const promise3 = Promise.resolve("Task 3 complete");

// Promise.any([promise1, promise2, promise3]).then((result) => {
//     console.log("First successful task:", result);
// });