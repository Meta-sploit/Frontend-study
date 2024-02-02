/*
 * When we are trying to access the x and getName before even initializing them 
 * we will get the output like      
 *  undefined
 *  Hello world
 *  f getName{
 *  console.log("Hello world");
 *  }
 * 
 *  because in first phase of code execution Memory is already allocated for x= undefined and for fn it will copy 
 *  whole fn when code get executed we get undefined for the x and function get executed because in memory it's available
 * 
 *  Note:- If we have not defined x anywhere then in memory it is not allocated so while running the code 
 *  output will print error (ReferenceError: x is not defined)  
 */

console.log(x);
getName2(); //error getName2 is not a function, as it will be treated as the variable
getName();
console.log(getName);

function getName(){
    console.log("Hello world");
}

/**
 * For getName2 and getName3 in first phase memory allocation will happen and will be treated as the variable 
 * and allocated as undefined
 */

var getName2= function (){
    console.log("getName2");
}

var getName3= () =>{
    console.log("getName3");
}