// function add(a, b){
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

//--------------------------------

/* callback function
function callback(){
     console.log("Adding Sucessfully completed");
}

  const add = function(a,b,callback){
     var result = a+b;
    console.log('result:'+result); //main function work complete 
    callback();
}
add(399,5000, callback);
*/



//  var fs = require('fs'); // Important module for file system operations
//  var os = require('os');

//  var user = os.userInfo();
//  console.log(user)
//  console.log(user.username);

//  fs.appendFile('greeting.txt', 'Hii ' + user. username + '!\n', ()=>{
//     console.log('File is created');
//  })

// console.log(os); //functionality use
//--------------------------------------------------------

//convert JSON to Javascript Object
const objectToConvert = {
   name: "Abhinav",
   age: 21
};
const json = JSON.stringify(objectToConvert); //Convert obect to JSON String
console.log(json);

console.log(typeof json);

