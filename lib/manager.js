const Employee = require('./Employee');
// Constructor for manager class
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
    // Return user input for office number
    getOfficeNum() {
        return this.officeNum;
    }
    // returns user input for employee role
    getRole() {
        return "Manager";
    }
}

// exports manager module
module.exports = Manager; 