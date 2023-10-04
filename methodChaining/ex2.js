class user {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  login() {
    console.log("login");
    return this;
  }

  logout() {
    console.log("logout");
    return this;
  }

  updateScore() {
    this.score++;
    console.log("update score");
    return this;
  }
}

userOne = new user("xxx@gmail.com", "Minh");

userOne.login().updateScore().logout();
