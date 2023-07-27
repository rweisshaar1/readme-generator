// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
// const questions = [

  
// ];

const layOut = [];

inquirer 
  .prompt([  
  {
    type: 'input',
    message: 'What would you like the title of the README to be?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'What would you like the description to say?',
    name: 'description'
  },
  {    
    type: 'input',
    message: 'Please describe the installation process.',
    name: 'install'
  },
  {    
    type: 'input',
    message: 'Please describe how to use the application.',
    name: 'usage'
  },
  {
    type: 'list',
    message: 'Select a License:',
    name: 'license',
    choices: ['Apache 2.0', 'Boost', 'BSD', 'MIT', 'None' ]
  },
  {    
    type: 'input',
    message: 'How can other people contribute to the repo?',
    name: 'contribute'
  },
  {    
    type: 'input',
    message: 'Any Information regarding testing?',
    name: 'test'
  },
  {    
    type: 'input',
    message: 'Please Enter your Email:',
    name: 'email'
  },
  {    
    type: 'input',
    message: 'Please Enter your GitHub Username:',
    name: 'git'
  },
  {    
    type: 'input',
    message: 'Please enter your LinkedIn:',
    name: 'linkedIn'
  },
])
  .then((response) => {
  createLayout (response)})
  

function createLayout (response) {
  // titleFunc(response.title);
  tableOfContents();
  description(response.description);
  installation(response.install);
  usage(response.usage);
  license(response.license);
  contributing(response.contribute);
  test(response.test) ;
  questionEmail(response.email);
  questionGit(response.git) ;
  questionlinkedIn(response.linkedIn) ;

  
  writeToFile(`# ${response.title}
  `);

  layOut.forEach(appendFunc) // <== this wont work!
  // function layoutFunction () {
  //   ;
  // }
  
  function appendFunc (data) {
    fs.appendFile(`README.md`,data, (err) =>
    err ? console.log(err) : console.log('Apphend successful!'));
  }
}


// function titleFunc (title) {
//   const titleHeader = `# ${title}
//   `

//   layOut.push(titleHeader);
//   // console.log(layOut)
// }

function tableOfContents () {
  const table = `
  ## Table of Contents:
  
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)
  `

  layOut.push(table);
}

function description (descrip) {
  const description = `
  ## Description of Project:
  - ${descrip}
  `

  layOut.push(description) ;
  // console.log(layOut)
}

function installation (response) {
  const installation = `
  ## Installation:
  - ${response}
  `

  layOut.push(installation) ;
  // console.log(layOut)
}

function usage (response) {
  const usage = `
  ## Usage:
  - ${response}
  `

  layOut.push(usage) ;
  // console.log(layOut)
}

function license (response) {
  var license = ``
  var licenseInfo = ''
  
  if (response === 'Apache 2.0' ) {
    license = `
    ## License:
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    licenseInfo = `
    - Apache 2.0`
    layOut.push(license,licenseInfo) ;
    // console.log(layOut);
  } else if (response === 'Boost' ) {
    license = `
    ## License:
    [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
    licenseInfo = `
    - Boost Software License 1.0`
    layOut.push(license,licenseInfo) ;
    // console.log(layOut);
  } else if (response === 'BSD' ) {
    license = `
    ## License:
    [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
    licenseInfo = `
    - BSD 3-Clause License`
    layOut.push(license,licenseInfo) ;
    // console.log(layOut);
  } else if ( response === 'MIT' ) {
    license = `
    ## License:
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    licenseInfo = `
    - MIT License`
    layOut.push(license,licenseInfo) ;
    // console.log(layOut);
  } else if (response === 'None') {
    license = `
    ## License:`;
    licenseInfo = `
    - No License.` ;
    layOut.push(license,licenseInfo) ;
    // console.log(layOut);
}
};

function contributing (response) {
  const contribute = `
  ## Contributing:
  - ${response}`

  layOut.push(contribute) ;
  // console.log(layOut)
}

function test (response) {
  const test = `
  ## Test:
  - ${response}`

  layOut.push(test);
    // console.log(layOut)
}

function questionEmail (response) {
  const question = `
  ## Questions:
  - ${response}`
  layOut.push(question);
}

function questionGit (response) {
  const question = `
  - ${response}`
  layOut.push(question);
}

function questionGit (response) {
  const question = `
  - ${response}`
  layOut.push(question);
}

function questionlinkedIn (response) {
  const question = `
  - ${response}`
  layOut.push(question);
  console.log(layOut);
}


// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile(`README.md`, data,(err)=>
  err ? console.error(err) : console.log('File Write Success!'))
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
