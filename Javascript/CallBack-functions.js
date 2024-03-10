/**
 * functions that are dependent on other function for their execution
 * mean when they will be executed
 */

setTimeout(function () {
  console.log("setTimeout executing");
}, 3000);

function x(y) {
  console.log("x executing");
  y();
}

x(function y() {
  console.log("y executing");
});

/**  OUTPUT -
 * x executing
 * y executing
 * setTimeout executing
 */

/***
 *
 * Javascript is single threaded synchronous language, but it waits for none
 * so setTimeout will be triggered and it will move  to next line and trigger
 * x function and so on...
 *
 *
 * Basically callback helps to create the async env even if javascript is synchronous
 * language so recommeded to do all heavy task to be done as the async function as they
 * will not block the main thread
 */
