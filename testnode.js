
//object Destructing
// var {addition,substract,division,multiply} = require('./modules/module2.js');
var module2 = require('./modules/module2.js');  
var module1 = require('./modules/module1.js');  

//Line 4 and Line 5 are same

// console.log(addition());
console.log("Module2",module2.addition(2,4));
console.log("Module1",module1.addition());

//Line 9 and Line 10 are same

var {addition,substract,division,multiply} = require('./modules/module1.js');
console.log(addition());

console.log(addition,substract,division,multiply);
console.log(addition());
