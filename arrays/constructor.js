// The constructor property returns the function that created the Array prototype.
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = fruits.constructor;
console.log(text);

let arr = text("1", 2, 3, 4, 5, "6");
console.log(arr);

arr.forEach((element) => {
  console.log(element);
});
