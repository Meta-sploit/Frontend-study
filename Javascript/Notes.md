# Notes.md

## Execution Context

1. **Memory -> Variable Environment:**
   - Stores variables and functions in key-value pairs.

2. **Code -> Thread of Execution:**
   - Reads and executes every line of code.

## JavaScript as a Single-Threaded Synchronous Language

- It executes a single line of code at a time and follows a specific order.

## How Code Execution Works in JavaScript

1. When a JavaScript code block is running, an execution context is created.
   - All variables and functions are stored in memory.
   - Variables are stored as global variables with an initial value of `undefined`.

2. During the execution phase:
   - The code is scanned.
   - Variable values are assigned.
   - Functions are treated as code blocks, creating new execution contexts.

## Call Stack in JavaScript

- A mechanism that keeps track of the execution context.
- Follows the Last In, First Out (LIFO) principle.
- Manages function calls, tracks the current execution point, and handles the flow of execution.

## JavaScript Hoisting

- Refers to the process of moving declarations to the top of their scope before execution.
- Applies to functions, variables, classes, or imports.

## Loosely Typed Nature of JavaScript

- JavaScript is loosely typed, allowing variables to dynamically change their type based on the assigned value.
  ```javascript
  var a = 0;
  a = "abc";


Let is block scoped while var is not.
Var is function scoped 

## Scope:

- var: Variables declared with var are function-scoped, meaning they are only accessible within the function where they are defined. If a variable is declared with var outside any function, it becomes a global variable.
  ```javascript
  function example() {
    if (true) {
        var x = 10;
        console.log(x); // 10
    }
    console.log(x); // 10 (accessible outside the block)
  }  

- let: Variables declared with let are block-scoped, meaning they are only accessible within the block (enclosed by curly braces) where they are defined.
  ```javascript
  function example() {
    if (true) {
        let y = 20;
        console.log(y); // 20
    }
    console.log(y); // ReferenceError: y is not defined
  }


## js is synchronous language the how it manages async calls

JavaScript is often described as a single-threaded, synchronous language, meaning that it processes one task at a time and executes code in a sequential manner. However, JavaScript also supports asynchronous programming through mechanisms like callbacks, Promises, and async/await.

When JavaScript encounters an asynchronous operation, such as making an HTTP request with fetch or setting a timer with setTimeout, it doesn't wait for the operation to complete before moving on to the next line of code. Instead, it delegates the asynchronous task to the browser or runtime environment, and continues executing other code.

When the asynchronous operation completes, a callback function associated with it is placed in the task queue. JavaScript's event loop, which is part of the runtime environment, continuously checks the call stack for any pending tasks. If the call stack is empty, it takes the first task from the task queue and pushes it onto the call stack for execution. This allows JavaScript to handle asynchronous operations without blocking the main execution thread.

In summary, while JavaScript executes code synchronously in a single thread, it can manage asynchronous calls using mechanisms like callbacks and event loop, allowing it to handle I/O operations efficiently without blocking the main thread.




