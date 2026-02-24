// Different types of function we can write
// function add(a,b){
//     return a + b;
// }


// var add = function(a,b){
//     return a + b;
// }

// var add = (a,b) => {return a + b};

// var add = (a,b) => a + b;  // use arrow function
// var result = add(56,67);
// console.log(result);


// (function(){
//     console.log("Abhinav is here");
// })()



// callback function
// function callback(){
//     console.log("Adding Sucessfully completed");
// }

// const add = function(a,b,callback){
//     var result = a+b;
//     console.log('result:'+result); //main function work complete 
//     callback();
// }
// add(399,5000, callback); 

// add(2, 3 , function(){
//     console.log("Adding completed");
// });

// add(20,3, () => console.log('add completed'));


//-----------------------------------------------------------

const notes = require('./notes.js');
var_ = require('lodash');

console.log('server file is available')

var age = notes.age;
var result = notes.addNumber(age+18, 10);

console.log(age);
console.log('result is now '+result);

var data = ["Person", "Person", "age", "2", 1 ,3, 4, 5, 6, 44, '2'];
var filter = _.uniq(data);
console.log(filter);


console.log(_.isString("person"));    