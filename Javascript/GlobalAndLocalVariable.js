a();
b();
console.log(name);


var name = "abc";

function a(){
    var name= "xyz";
    console.log(name);
}

function b(){
    var name = "jkl";
    console.log(name);
}

{
    outPut:
         {
            xyz,
            jkl,
            abc
         }
}
/*
 * Global execution context will be created 
 * 1. all the variable will be allocated as undefined
 * 2. all the function will be copied as it is on the memory
 * 
 * And This GEC will be stored in the callStack 
 * 
 * On phase 2, line one will be executed and new execution context 
 * will be created and again memory allocation will happen for this function's variable and nexted function,
 * all the memory will be stored in local memory which will be different from the global memory. 
 * this execution context will be added to stack above the GEC and it will poped out as the function ends.
 */