//You can use the array.entries() method in JavaScript when you need to iterate over the key-value pairs of an array.
// This is useful when you need to access both the index and the value of each element in the array.

// const typeOF = require("../tools/typeOF");
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// // The entries() method does not change the original array.
// for (let x of f) {
//   console.log(x);
// }

//You can also use the array.entries() method
//to create a new array that contains the key-value pairs of the original array
const array = [1, 2, 3, 4, 5];

const testEntries = array.entries();

// for (let x of testEntries) {
//   console.log(x);
// }
const squaredArray = Array.from(array.entries()).map(([index, value]) => {
  return value * value + index;
});

console.log(squaredArray);
