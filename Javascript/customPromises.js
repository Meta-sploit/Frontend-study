let myCart = ["shoes", "jeans", "watch"];

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      reject(new Error("cart not available"));
    }

    orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}

function validateCart(cart) {
  return true;
}

function processToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment is successfull for ", orderId);
  });
}

createOrder(myCart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch((err) => console.log(err))
  .then(function (orderId) {
    return processToPayment(orderId);
  })
  .then(function (notification) {
    console.log(notification);
  })
  .then(() => {
    console.log("Congratulations");
  });
