/**
 * Javascript doesn't wait while executing, so it will not wait for the setTimeout to be
 * completed...
 * It will attach time to teh print function and as time will be over it will trigger the function callback
 *
 */

// it will print 6 six times. as var i will have value 6 by the time setTime will be triggering the callback fn

function a() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function print() {
      console.log(i);
    }, i * 1000);
  }
}
a();

//let is blocked scope so it will print 1 to 6

function a() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function print() {
      console.log(i);
    }, i * 1000);
  }
}
a();

//same behaviour is achieved with var using closure

function a() {
  for (var i = 1; i <= 5; i++) {
    function closureExample(i) {
      setTimeout(function print() {
        console.log(i);
      }, i * 1000);
    }
    closureExample(i);
  }
}
a();
