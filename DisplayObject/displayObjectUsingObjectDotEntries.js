const Person = {
  name: "Minh",
  age: 21,
  city: "Vinh Long",
};

console.log(Object.entries(Person));

for (let [key, value] of Object.entries(Person)) {
  console.log(key, value);
}
