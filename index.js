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

}