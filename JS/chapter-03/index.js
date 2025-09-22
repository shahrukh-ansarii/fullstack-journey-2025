// <========== CHAPTER #03 LOOP & FUNCTIONS ==========>


// <==========  For Loop ==========>

// let a = 10;

// for (let a = 1; a <= 100; a++) {
//     console.log(a);
// }

// <==========  For in loop (Work  with arrays) ==========>

let obj = {
    Name : "Shahrukh",
    Role : "Developer",
    Company : "CST"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element);

}

// <==========  For of loop (Itrate data structure like arrays) ==========>

// for (const x of "SHAHRUKH") {
//     console.log(x);

// }


// <==========  While loop ==========>

// let i = 0;

// while (i < 5) {
//     console.log(i);
//     i++;
// }

// <==========  Do While loop ==========>

// let i = 2;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// <==========  Function ==========> 

// function greet(name) {
//     return `Hello, ${name}!`;
// }

// console.log(greet("Shahrukh")); // Hello, Shahrukh!

// function add(a , b) {
//     let c = a + b;
//     return c;
// }

// let y = add(12 , 23);
// console.log(y);


// arrow function

// const sum = (a , b , c = 1 /*(c default value set )*/ ) =>{
//     console.log(a + b + c);
//     return a + b + c;
// }
//  result = sum(12 , 65)

// sum(13 , 2)

// Math.rendom();

