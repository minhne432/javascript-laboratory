const typeOF = require("../tools/typeOF");
const fruits = ["Banana", "Orange", "Apple", "Mango", "O"];
const keys = fruits.keys();

//Use the built in Object.keys() Method:
// const keys = Object.keys(fruits);

let text = "";
for (let x of keys) {
  text += x + " ";
}

console.log(text);
typeOF(text);
