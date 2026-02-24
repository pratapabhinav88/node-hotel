// Variable - var, let, const
var a = 5;
var b = 6;
var ans = a + b;
console.log(ans)
console.log("My name is Pratap")
console.log("answer: " + ans)

const name = 'Abhinav'  // ek bar assign karne ke baad change nahi kar sakte, const is block scope
console.log(name)  // block scope - let and const, function scope - var
console.log(typeof name) // Data Types - String, Number, Boolean, Array, Object

const cars = ["Fortuner", "Scorpio", "BMW"];  // Array - ordered collection of data, index starts from 0
cars.push("tesla");
console.log(cars); 
console.log(cars[2]); // Object - key value pair, unordered collection of data


// If Else
var hour = 10;
if(hour < 12){
    console.log("We are not allowed"); // condition true
}else{
    console.log("We are allowed");
}

//For Loop
var count = 10;
for(var i=1; i <=count; i++){
    console.log(i)
}

//Object- For data store

const person = {
    name: "Abhinav Pratap",
    age: 21,
    isStudent: true,
    hobbies: ["Blogging","Badminton"]
};
console.log(person) // Object Literal
console.log(person.age) // Dot Notation 


//Functions
const ages = [22,32, 42, 52];
const result = ages.filter(checkAge);

function checkAge(age){
    return age>= 25
}
console.log(result)

// // how to take user input in js
// var prompt = require('prompt-sync')();
// const age = prompt("Enter your age:");
// if(age>= 18){
//     console.log("You can Join Indian Army");
// }else{
//     console.log("You can't Join Indian Army");
// }


var prompt = require('prompt-sync')();
let age = prompt("Please enter your age:");
age = Number(age);

if(age< 18){
    console.log("You get a 20% discount!")
}else if(age>=18 && age <=65){
    console.log("Normal ticket price applies")
}else{
    console.log("You get a 30% senior discount")
}
