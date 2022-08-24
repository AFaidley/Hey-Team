const Employee = require("./Employee");
// constructor for engineer class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.githubName = githubName; 
    }

    // return user input github
    getGithub () {
        return this.githubName;
    }
    // return user input employee role
    getRole () {
        return "Engineer";
    }
}

// exports engineer module
module.exports = Engineer; 