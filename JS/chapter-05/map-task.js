console.log("JS Intiallizong....");

// Mini Task: Discounted Product Prices

// Aapke paas ek list hai products ki jisme original prices hain. Aapko har product par 10% discount dena hai, aur naye prices ka array banana hai.

// const price = [40, 60, 100, 250, 400, 800];

// const discountedPrice = price.map((price) => {
//     return price - (price * 0.10)
// })

// console.log(discountedPrice);


// 📦 Scenario:
// Aapke paas product prices ka array hai. Aap chahte ho sirf wo products filter karna jinki price 200 se zyada ho.


// const newPrice = price.filter((e) => {
//     if (e >= 100) {
//         return true
//     }
//     return false
// })

// console.log(newPrice);

// FILTER TASK #2

// 🧠 Scenario:
// Aapke paas ek array hai students ka, jisme har student ka naam aur active status diya gaya hai.
// Aapko filter karne hain sirf active students.

// const students = [
//     { name: "Ali", isActive: true },
//     { name: "Sara", isActive: false },
//     { name: "Raza", isActive: true },
//     { name: "Areeba", isActive: false }
// ];

// const activeStudents = students.filter((e) => {
//     if (e) {
//         return e.isActive == true
//     }
//     return false
// })

// const activeStudents = students.filter(e => e.isActive);

// console.log(activeStudents);

// FILTER TASK #2

// const students = [
//   { name: "Ali", marks: 45 },
//   { name: "Sara", marks: 78 },
//   { name: "Raza", marks: 30 },
//   { name: "Areeba", marks: 85 },
//   { name: "Zara", marks: 50 }
// ];

// const Newstudents = students.filter(n => n.marks >= 50);


// console.log(Newstudents);

// reduce()

// ➡️ Reduce ka use karke total marks nikalo
// ➡️ Phir average bhi calculate karo (total / marks.length)

// const marks = [50, 80, 65, 90, 70];

// const newMarks = marks.reduce((a, b) => {
//     return a + b
// })

// const AvgMarks = newMarks / marks.length

// console.log(newMarks);
// console.log(AvgMarks);


const new1 = Array.from("Shahrukh")

console.log(new1);
