/**
 * Browser provided api to make developers life easy like
 * Console, setTimeout, fetch, DOM api's
 *
 * window is global variable that containes all these api's, ideally setTimout and other
 * should be access as window.setTimeout(), or window.console.log()  but as it is global variable
 * they can be accessed directly.
 *
 * JS engine doesn't have any of these but browser provide these api's
 * There is also concept of callbacks, event loop , callback queue and microtask queue.
 */

document.addEventListener("click", function () {
  console.log("clicked");
});

setTimeout(function callbackTimeout() {
  console.log("setTimeout executing");
}, 5000);
// When execution will be at setTimeout line, it will attach a timer to
// callbackTimeout function and will put it to the callback queue and as the call stack is
// empty event loop will push the element from the callback queue to the call stack.

fetch("https://dummyjson.com/products/1").then(function callbackFetch() {
  console.log("fetch callback executing");
});
/**
 * fetch is also the browser component and it is used to make a http or https calls,
 * The "fetch" function is used to asynchronously fetch resources (such as JSON data,
 * images, etc.) from the network. It returns a Promise that resolves to the Response
 * object representing the response to the request.
 *
 * Event loop will push the callbacks of fetch first rather than of setTimeout
 * as microtask queue has more priority than the callbackqueue.
 **/

/*
The event loop is a fundamental concept in JavaScript that manages the execution of code.
It continuously checks the call stack for any pending tasks to execute. If the call stack
is empty, it looks into the task queue for any pending tasks. When a task is found, it moves 
it from the task queue to the call stack for execution. This process repeats indefinitely, 
allowing JavaScript to handle asynchronous operations efficiently while maintaining a 
single-threaded execution model.
*/
