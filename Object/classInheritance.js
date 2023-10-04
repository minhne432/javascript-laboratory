class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  login() {
    console.log(this.email, " logged in");
    return this;
  }

  logout() {
    console.log(this.email, " logged out");
    return this;
  }

  updateScore() {
    this.score++;
    console.log("update score");
    return this;
  }
}

var userOne = new User("user1@gamil.com", "Jonh");
var userTwo = new User("user2@gmail.com", "Sara");

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

var admin1 = new Admin("admin1@gmail.com", "David");

var users = [userOne, userTwo, admin1];
admin1.deleteUser(userTwo);

console.log(users);
