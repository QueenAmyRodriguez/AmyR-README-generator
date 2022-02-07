// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
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
        message: 'Table of Contents'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? (Required)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your project be used? (Required)'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license are you using in your project?. (Required)',
        choices: ['MIT', 'GNU_GPLv3', 'Apache_License_2.0', 'None']
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
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username? (Required)'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
    
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile('./dist/README.md', generateMarkdown(answers));
    });
};

// Function call to initialize app
init();
