function developer(name) {
  this.name = name;
  this.type = "Developer";
}

function tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new developer(name);
        break;
      case 2:
        return new tester(name);
        break;
    }
  };
}

function say() {
  console.log(`hello, I am ${this.name}, I am a ${this.type}`);
}

const employeeFactory = new EmployeeFactory();
const employees = [];
employees.push(employeeFactory.create("Minh", 1));
employees.push(employeeFactory.create("Huy", 2));
employees.push(employeeFactory.create("Kien", 1));
employees.push(employeeFactory.create("Trung", 1));
employees.push(employeeFactory.create("Khanh", 1));
// console.log(employees);

employees.forEach((element) => {
  say.call(element);
});
