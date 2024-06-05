const typeOF = require("../tools/typeOF");

obj1 = {
  name: "Nguyen Hoang Minh",
};

obj2 = {
  age: 22,
};

obj3 = {
  ...obj1,
  ...obj2,
  address: "Can Tho",
};

console.log(obj3);
