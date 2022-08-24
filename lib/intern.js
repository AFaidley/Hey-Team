const Employee = require('./Employee');
// Constructor for intern class
class Intern extends Employee  {
    constructor (name, id, email, schoolName) {
        super (name, id, email); 
        this.schoolName = schoolName; 
    }
    // return user input for school
    getSchool() {
        return this.schoolName;
    }
    // return user input for employee role
    getRole() {
        return "Intern";
    }
}

// exports intern module
module.exports = Intern; 