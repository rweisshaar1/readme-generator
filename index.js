// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
  {
    input: 'type',
    message: 'What would you like the title of the README to be?',
    name: 'title'
  },
  {
    input: 'type',
    message: 'What would you like the description to say?',
    name: 'description'
  },
  
];

inquirer .prompt(questions)
.then(writeToFile(`${questions.title}`, ))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, data,(err)=>
  err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
