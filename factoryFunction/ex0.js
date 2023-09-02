function createEmployeeObjects(name) {
    return {
        name: name,
        work: function () {
            console.log('New Employee Created with name: ' + name);
        }
    };
}
//Creating an Employee with factory function
const emp1 = createEmployeeObjects('Steve Jobs');
emp1.work();

// Create a robot with name Chitti 2.O Upgraded
const emp2 = createEmployeeObjects('Bill Gates');
emp2.work();