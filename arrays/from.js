// The Array.from() method is a versatile and useful tool for working with arrays in JavaScript.
// It can be used to convert iterators to arrays,
// create new arrays from existing arrays,
// and create new arrays from other data types, such as strings.

const string = "ABCDEF";

const array = Array.from(string, (vaule) => {
  return vaule + "!";
});

console.log(array);
