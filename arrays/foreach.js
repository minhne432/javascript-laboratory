const fruits = ["apple", "orange", "cherry"];
fruits.forEach((value, index) => {
  fruits[index] = fruits[index] + "!!";
});

console.log(fruits);
