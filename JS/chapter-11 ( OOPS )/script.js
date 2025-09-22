console.log('JS Intiallizing....');

let user = {
    name: "shahrukh",
    age: 28,
    greet() {
        console.log(`My name is ${this.name} i am ${this.age} years old`);
    }
}

user.greet()