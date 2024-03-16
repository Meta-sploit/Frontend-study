// lets say we need to create a frontend for a system where user comes and
// select the product after that he can add to cart and then only he can request to payment
// and once it's done then only he will get the notification saying order is placed

let options = ["shoes", "jeans", "watch"];

function selectItems(options, callback) {
    // Assuming options is an array of items to select
    // Simulating selecting each item and passing it to the callback function
    options.forEach(item => {
        callback(item);
    });
}

function addItemToCart(item, callback) {
    // Simulating adding item to cart and getting itemid
    let itemid = generateItemId(); // Assuming generateItemId is a function that generates a unique id
    callback(itemid);
}

function proceedToPayment(payment, callback) {
    // Simulating proceeding to payment and getting payment details
    let paymentDetails = generatePaymentDetails(); // Assuming generatePaymentDetails is a function that generates payment details
    callback(paymentDetails);
}

function notifyUser() {
    // Simulating notifying the user
    console.log("User has been notified.");
}

// calling function
selectItems(options, function (item) {
    addItemToCart(item, function (itemid) {
        proceedToPayment(payment, function (paymentDetails) {
            notifyUser();
        });
    });
});



// this code is growing horizontaly and each function is dependent on callbacks functions
// notifyUser is depend on proceedToPayment to complete and once it is completed 
// not sure when this callback is called.

// but using callbacks as a argument in the function we are giving full control to browser 
// to execute these functions.

// sometimes it might take so much time and main thread will be blocked.
// it is not advised to use callback chains.