// Global vars and packages
const inquirer = require("inquirer");
const fs = require("fs");
const {createHtml, createManagerCard, createInternCard, createEngineerCard} = require('./lib/createhtml');
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const teamArr = [];

// Questions for user to answer, for info to fill in cards
const userQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Select the Employee role',
            choices: ['Manager','Engineer','Intern']
        },
        {
            type: 'input',
            message: 'Enter name of Employee',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter ID of Employee',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter email address of Employee',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter contact number for Office',
            name: 'officeNum',
            when: (input) => input.role === "Manager",
        },
        {
            type: 'input',
            name: 'githubName',
            message: "Enter engineer's github name:",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'schoolName',
            message: "Enter the intern's school name:",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'addTeam',
            message: 'Would you like to add more employees to your team?',
            default: false,
        }
    ])
    .then (output => {
        // takes output of user input to create employee cards
        let { name, id, email, role, officeNum, githubName, schoolName, addTeam } = output; 
        let employee; 
        let employeeObj;

        if (role === "Manager") {
            employeeObj= new Manager (name, id, email, officeNum);
            employee = createManagerCard(employeeObj);
        }
        else if (role === "Engineer") {
            employeeObj = new Engineer (name, id, email, githubName);
            employee = createEngineerCard(employeeObj);

        } else if (role === "Intern") {
            employeeObj = new Intern (name, id, email, schoolName);
            employee = createInternCard(employeeObj);
        }

        teamArr.push(employee); 

        // If user answers yes to adding more members, present questions again else return populated team array
        if (addTeam) {
            return userQuestions(); 
        } else {
            return teamArr;
        }
    }) 
};

// Function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, createHtml(data.join('')), function(err) { 
        console.log(err)
    })
}

// Init func to start app
function init() {
   userQuestions()
       .then(answers => {
           console.log(answers)
            writeToFile('./dist/index.html',answers);
       }
   );
}

// Call functions
init();