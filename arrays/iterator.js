// const array = [1, 2, 3, 4, 5];

// for (const element of array) {
//   console.log(element);
// }
//reduce(firstParameter,secondParameter)
//firstParameter => a callback
//secondParameter =>  the initial value of the accumulator,

const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 1);

console.log(sum);
