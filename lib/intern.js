const Employee = require('./Employee');
// Constructor for intern class
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 
        this.school = school; 
    }
    // return user input for school
    getSchool () {
        return this.school;
    }
    // return user input for employee role
    getRole () {
        return "Intern";
    }
}

// exports intern module
module.exports = Intern; 