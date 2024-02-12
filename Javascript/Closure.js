/**
 * fn along with its lexical scope is closure
 */
function x() {
  let a = 7;
  function y() {
    //  here fn a have the value of a as it will inherit all the variable value from it's parent
    console.log(a);
  }
  y();
}
x();

function xy() {
  let a = 7;
  function yz() {
    //  here fn a have the value of a as it will inherit all the variable value from it's parent
    console.log(a);
  }
  return yz;
}
var val = xy();
/*
   once the line no 21 is executed the function memory and execution context will be gone
   but in javascript whenever the function will return from inside of any fn they remember from where they are triggered and 
   maintain their lexical scope (reference of the variable)...

   so when fn yz is returned it contains closure inclosed fn along with its lexical scope.
*/
