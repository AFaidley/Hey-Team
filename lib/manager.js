const Employee = require('./Employee');
// Constructor for manager class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }
    // returns user input for employee role
    getRole () {
        return "Manager";
    }
}

// exports manager module
module.exports = Manager; 