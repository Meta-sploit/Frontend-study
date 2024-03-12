/**
 * Map is high orderfunction, which takes a function as a input.
 */

const radius = [1, 2, 3, 4];

// this is what a high order function looks like where logic is a function.

// Array.prototype allows you to add custom methods or properties to all instances of arrays.
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

const area = function (r) {
  return Math.PI * r * r;
};

const mapValue = radius.map(area);
console.log("value from the Map function ", mapValue);

// With function to be declared like Array.prototype
// this is how we can use function to work on array.
console.log("value from the function created by us ", radius.calculate(area));
