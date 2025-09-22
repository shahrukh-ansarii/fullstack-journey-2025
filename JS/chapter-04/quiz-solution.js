// Video #62 JavaScript Exercise #10

/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/


// let obj1 = {
//     1: "Crazy",
//     2: "Amazing",
//     3: "Fire"
// }
// let obj2 = {
//     1: "Engine",
//     2: "Foods",
//     3: "Garments"
// };
// let obj3 = {
//     1: "Bros",
//     2: "Limited",
//     3: "Hub"
// };


// var ran1 = Math.floor(Math.random() * 3) + 1;
// var ran2 = Math.floor(Math.random() * 3) + 1;
// var ran3 = Math.floor(Math.random() * 3) + 1;


// console.log(obj1[ran1] + " " + obj2[ran2] + " " + obj3[ran3]);

// SECOND METHOD

// let rand = Math.random();
// let  first, second, third;

// if (rand < 0.33) {
//     first = "Crazy";
// }
// else if (rand < 0.66 && rand >= 0.33) {
//     first = "Amazing";
// }
// else {
//     first = "Fire"
// }

// if (rand < 0.33) {
//     second = "Engine";
// }
// else if (rand < 0.66 && rand >= 0.33) {
//     second = "Foods";
// }
// else {
//     second = "Garments"
// }

// if (rand < 0.33) {
//     third = "Bros";
// } 
// else if (rand < 0.66 && rand >= 0.33) {
//     third = "Limited";
// }
// else {
//     third = "Hub"
// }

// console.log(`${first} ${second} ${third}`);

// <<===== Second Exercise Video #65 =====>>

// Q. Write a program to calculte factorial of a give number using reduce & for loop

// 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720


// let var1 = 6;

// for (let i = 1; i <= 6; i++) {
//     let var2 = (var1 * i) ;
//     console.log(var2);

// }

// let arr = [];

// function factor(num) {
//     for (i = 1; i <= num; i++) {
//         arr.push(i);
//     }
//     return arr.reduce(function (a, b) {
//         return a * b;
//     }, 1)
// };
// console.log(factor(6));
