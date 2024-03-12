/*
 * function that takes another function as input or returns the function
 * is termed as the high order function
 * 
 * High order functions are possible because in js In JavaScript, functions are considered 
 * first-class citizens, which means they can be treated just like any other data type. This includes:
        1. Functions can be assigned to variables.
        2. Functions can be passed as arguments to other functions.
        3. Functions can be returned as values from other functions.
        4. Functions can be stored in data structures like arrays or objects.
 * 
 */

let radius = [1, 2, 3, 4];

const calculate = function (radius, formula) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(formula(radius[i]));
  }
  return output;
};

const area = function (r) {
  return Math.PI * r * r;
};

const cercumference = function (r) {
  return 2 * Math.PI * r;
};

console.log(calculate(radius, area));
console.log(calculate(radius, cercumference));