/**
 * Let and const variables can not be accessed before their initialization unlike var variables, although they are hoisted,
 * it's because they will not be attached to global execution context, instead we will see them in ...
 * 
 * window between let and const variable get hoisted and initialized is called as temporal dead zone
 * this window can be reduced to zero by initializing all the variables on the top of code.
 * 
 * In code it's better to use const and let as much as possible to avoid the unexpected error as these will throw error 
 * if get accessed before initialized so will be easy to debug.
 * 
 * also const should have declaration and initialisation on the same time, and can not use same variable again in case of let.
 */
 
console.log(a); // output : undefined
var a=10;
var a=100;
console.log(a); //output : 100
console.log(b); //output : Uncaught ReferenceError: b is not defined
let b=9;


const c=11;
