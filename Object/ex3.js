var userOne = {
  email: "minhb2014933@student.ctu.edu.vn",
  name: "minh",
  login() {
    console.log(this.email, " has logged in");
  },
  logout() {
    console.log(this.email, " has logged out");
  },
};
console.log(userOne["email"]);
console.log(userOne["name"]);
userOne.login();
userOne.logout();

//add attribute
userOne.age = 25;
console.log(userOne);
