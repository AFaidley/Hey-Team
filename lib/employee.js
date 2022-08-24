class Employee {

    // Constructor for Employee class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // return user input name
    getName() {
        return this.name;
    }

    // return user input ID
    getId() {
        return this.id;
    }

    // return user input email
    getEmail() {
        return this.email;
    }

    // return user input employee role
    getRole() {
        return 'Employee';
    }
};

// exports employee module
module.exports = Employee; 