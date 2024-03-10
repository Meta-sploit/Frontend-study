a();
c(); // it will give error as c will act as a variable not function

//function statements and function declaration
function a() {
  console.log("it is function statement");
}

//function expressions
var c = function () {
  console.log("it is called function  expressions");
};

//Anonymous function
/***
  function that does not have name is termed as anonymous function
  anonymous function will be used when functions are used as the values (ex in function expressions)
function (){
    //function logic
}
****/

// Named function expressions
// It is same as the function  expression only thing is that here function has a name
var b = function abc() {
  console.log("abc function called");
};

b(); // it will print the log
abc(); // it will throw the error saying reference error
// as this function is never got memory allocation  in the global context
// but can be called inside the function itsefl as it will be ctreated in the local context


// first class function are the functiopn where we can use function as arguments 
// where we can return the function as value 

function e(){
    return function(){
        console.log("start");
    }
}

console.log(e())

// or

function f(param){
    console.log(param)
}

f(function(){
    console.log("restart");
})