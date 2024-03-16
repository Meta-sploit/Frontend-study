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

createOrder(myCart)
  .then((orderId) => console.log(orderId))
  .catch((err) => console.log(err));
