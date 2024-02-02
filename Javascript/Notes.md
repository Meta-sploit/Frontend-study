everything in javascript executed in execution context


Execution context
    1. Memory -> variable environment 
       stores variable, functions in key value pair  
    
    2. Code --> thread of execution
       read and execute every line of codes 

Javascript is single threaded synchronous language.
    means it can execute single line of code in a thread 
    at once also it will execite in specific order 


How the code execution works in javascript

    When a javascript code block is runing execution context will be created
    and for once all the variable and function(it will store the full function)
    will be stored in the memory where variable will be stored as global variable with value undefined

    When for the second phase code will be scaned during the Execution
    then value of the variable will be assigned and if there is function then it 
    will be treated as a code block and again execution context will be created and so on.

    
In JavaScript, the call stack is a mechanism that keeps track of the execution context of a program. It follows the Last In, First Out (LIFO) principle, where the last function called is the first one to be resolved. The call stack is used to manage function calls, track the current execution point, and handle the flow of execution.

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

JavaScript is a loosely typed language, you are not required to correctly predict the kind of data that will be kept in a variable. Depending on the information you supply to a variable (such as this ‘ ‘ or " " to signify string values), JavaScript will automatically type it
    var a = 0
        a = "abc"
