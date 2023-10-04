class User {
  constructor() {
    console.log(this);
  }
}

var userOne = new User();
//the `new` keyword
//1. create an emtpy object
//2. sets the value of `this` to be the new empty object
//3. calls the constructor method
