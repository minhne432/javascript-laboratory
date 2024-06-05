function logger({ name, ...obj }) {
  console.log(name);
  console.log(obj.age);
  console.log(obj.sex);
}

logger({
  name: "Nguyen Hoang Minh",
  age: 22,
  sex: "Nam",
});
