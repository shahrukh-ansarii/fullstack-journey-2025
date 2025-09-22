console.log("JS Intializing!!!!!");

// Events in JS

// let button = document.getElementById("btn")

// button.addEventListener("dblclick", () => {
//     // alert("This is Alert Text")
//     document.querySelector(".box").innerHTML = "This is Updated text using addEventListener"
// })


// Event Bubbling in JS

// document.querySelector(".box").addEventListener("click", (e) => {
//     // e.stopPropagation()z
//     alert("child was clicked ")
// })

// document.querySelector(".childContainer").addEventListener("click", (e) => {
//     // e.stopPropagation()
//     alert("childContainer was clicked ")
// })

// document.querySelector(".container").addEventListener("click", (e) => {
//     alert("container was clicked ")
// }) 

function rendomColorGenerator() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`
}

// setInterval(() => {
//     document.querySelector(".childContainer").style.backgroundColor = rendomColorGenerator();
//     document.querySelector(".box").style.backgroundColor = rendomColorGenerator();
// }, 1000);

setTimeout(() => {
    document.querySelector(".childContainer").style.backgroundColor = rendomColorGenerator();
    document.querySelector(".box").style.backgroundColor = rendomColorGenerator();
}, 1000);
