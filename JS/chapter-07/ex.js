// document.body.firstElementChild.children[0].style.backgroundColor="red";
// document.body.firstElementChild.children[1].style.backgroundColor="grey";
// document.body.firstElementChild.children[2].style.backgroundColor="brown";
// document.body.firstElementChild.children[3].style.backgroundColor="orange";
// document.body.firstElementChild.children[4].style.backgroundColor="pink";

// let txtColor = ['Tomato', 'Orange', 'DodgerBlue', 'MediumSeaGreen', 'SlateBlue', ''];
// let bgColor = ['black', 'lightblue', 'yellow', 'green', 'Violet', 'black'];
// let box = document.querySelectorAll(".box")
// for (let i = 0; i < 5; i++) {
//     box[i].style.backgroundColor = bgColor[i];
//     box[i].style.color = txtColor[i];
// }


console.log("JavaScript initialiing");


// let boxes = document.querySelector(".container").children
// let boxes = document.getElementsByClassName('box')
// console.log(boxes);


// function getRendomColor() {
//     let val1 = Math.ceil(0 + Math.random() * 255);
//     let val2 = Math.ceil(0 + Math.random() * 255);
//     let val3 = Math.ceil(0 + Math.random() * 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }

// Array.from(boxes).forEach(e => {
//     e.style.backgroundColor = getRendomColor();
//     e.style.color = getRendomColor();
// });


let boxes = document.querySelector(".container").children

function getRendomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRendomColor();
    e.style.color = getRendomColor()
});
