// 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
// 2. Inversion of control is overcome by using promise.
//   2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
//   2.2) A promise has 3 states: pending | fulfilled | rejected.
//   2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
//   2.4) A promise resolves only once and it is immutable.
//   2.5) Using .then() we can control when we call the cb(callback) function.

// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

let options = ["shoes", "jeans", "watch"];

function selectItems(options) {
  return new Promise((resolve, reject) => {
    // Simulating selecting items from options
    // Here, we resolve with the selected item
    options.forEach((item) => {
      resolve(item);
    });
  });
}

function addItemToCart(item) {
  return new Promise((resolve, reject) => {
    // Simulating adding item to cart and generating itemid
    let itemid = generateItemId(); // Assuming generateItemId is a function that generates a unique id
    resolve(itemid);
  });
}

function proceedToPayment(payment) {
  return new Promise((resolve, reject) => {
    // Simulating proceeding to payment and generating payment details
    let paymentDetails = generatePaymentDetails(); // Assuming generatePaymentDetails is a function that generates payment details
    resolve(paymentDetails);
  });
}

function notifyUser() {
  // Simulating notifying the user
  console.log("User has been notified.");
}

// Example usage using promise chains
selectItems(options)
  .then((item) => addItemToCart(item))
  .then((itemid) => proceedToPayment(payment))
  .then((paymentDetails) => notifyUser())
  .catch((error) => console.error("An error occurred:", error));

// here we are attaching the callback function to a promise which eventually we will get
// in future, Using promises like this makes the asynchronous code more readable and helps avoid callback hell. Additionally,
// it's easier to handle errors and exceptions using promise chains.
