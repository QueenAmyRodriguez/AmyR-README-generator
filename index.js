// TODO: Include packages needed for this application
const inquirer = require ('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project. (Required)'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Provide a table of contents for your project. (Required)'
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'What are the steps required to install your project? (Required)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your project be used? (Required)'
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What licenses are included in your project?. (Check all that apply)',
        choices: ['MIT License', 'Other']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can you contribute to the project? (Required)'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can you run tests on your project? (Required)'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt(questions)
    
}

// Function call to initialize app
init();
