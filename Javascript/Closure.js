/**
 * fn along with its lexical scope is closure 
 */
function x(){
    let a = 7;
    function y(){    //  here fn a have the value of a as it will inherit all the variable value from it's parent
        console.log(a);
    }
    y();
}
x();
