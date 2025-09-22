// document.title = "Chapter #07 (DOM)";
//  DOM (Document Object Model) + Events

console.log('JS Intiallizing....');


//   TASK #1 JS Start

// const heading = document.getElementById('head');
// const button = document.getElementById('btn');

// button.addEventListener("click", () => {
//     heading.innerText = "Text Changed From JS"
// })

//   TASK #1 JS End

//   TASK #2 JS Start

// const userInput = document.getElementById('nameInput')
// const userOutput = document.getElementById('outputText')
// const btn = document.getElementById('showBtn')

// btn.addEventListener("click", () => {
//     const name = userInput.value.trim();

//     if (name === "") {
//         userOutput.innerText = "Please Enter Your Name!";
//         userOutput.style.color = "red";
//     }
//     else {
//         userOutput.innerText = `Welcome, ${name}!`;
//         userOutput.style.color = "green";
//     }
// })


const user_input = document.getElementById('userInput');
const user_output = document.getElementById('userOutput');
const user_btn = document.getElementById('userBtn');

user_btn.addEventListener('click', () => {
    const user_name = user_input.value.trim();

    if (user_name === "") {
        user_output.innerHTML = "Please Enter Your Name!!!";
        user_output.style.color = "red";
    }
    else {
        user_output.innerHTML = `Welcome, ${user_name}`;
        user_output.style.color = "green";
    }
})




//   TASK #2 JS End

// console.log(document.body.firstElementChild);
// console.log(document.body.firstElementChild.childNodes);
// console.log(document.body.firstElementChild.children);

// // target using variable

// let cont = document.body.childNodes[1];
// console.log(cont);

// // Next Sibling
// console.log(cont.children[2].nextElementSibling);

// // Previous Sibling
// console.log(cont.children[2].previousElementSibling.style);

// bg colo4 change on box 2
// console.log(cont.children[1].style.backgroundColor = "red");

// Second Element Table
// console.log(document.body.childNodes[3].rows.style.border ="2px solid black");

// Select Element By Class Name

// console.log(document.getElementsByClassName('box'));

// document.getElementsByClassName('box')[2].style.backgroundColor = 'red';

// Select Element By Id Name
// document.getElementById("boxGreen").style.backgroundColor = 'green'


// Select Element By Query Selector
// document.querySelector(".box").style.backgroundColor = 'grey'

// Select Element By Query Selector All
// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = 'grey'
// });

