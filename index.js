const fs = require('fs');
const inquirer = require('inquirer');

let layOut = ``;

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
  titleFunc(response.title);
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
  
  writeToFile(layOut);

};  

function titleFunc(response) {
  const title = `# ${response}
  `
  layOut += title
}

function tableOfContents () {
  const tableHead = `
## Table of Contents:
`
  const table = `
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)
`
  layOut += tableHead ;
  layOut += table;
}

function description (descrip) {
  const description = `
## Description:
- ${descrip}
  `

  layOut += description ;
  // console.log(layOut)
}

function installation (response) {
  const installation = `
## Installation:
- ${response}
  `

  layOut += installation ;
  // console.log(layOut)
}

function usage (response) {
  const usage = `
## Usage:
- ${response}
`
  layOut += usage ;
  // console.log(layOut)
}

function license (response) {
  var license = ``
  var licenseInfo = ``
  
  if (response === 'Apache 2.0' ) {
    license = `
## License:
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
`
    licenseInfo = `
- Apache 2.0
`
    layOut += license
    layOut += licenseInfo ;
    // console.log(layOut);
  } else if (response === 'Boost' ) {
    license = `
## License:
[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]
`
    licenseInfo = `
- Boost Software License 1.0
`
    layOut += license
    layOut += licenseInfo ;
    // console.log(layOut);
  } else if (response === 'BSD' ) {
    license = `
## License:
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]
`
    licenseInfo = `
- BSD 3-Clause License
`
    layOut += license
    layOut += licenseInfo ;

  } else if ( response === 'MIT' ) {
    license = `
## License:
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`
    licenseInfo = `
- MIT License
`
    layOut += license
    layOut += licenseInfo ;
  } else if (response === 'None') {
    license = `
## License:
`;
    licenseInfo = `
- No License.
` ;
    layOut += license
    layOut += licenseInfo ;
}
};

function contributing (response) {
  const contribute = `
## Contributing:
- ${response}
`

  layOut += contribute ;
}

function test (response) {
  const test = `
## Test:
- ${response}
`

  layOut += test;
}

function questionEmail (response) {
  const question1 = `
## Questions:
- Please email questions to ${response}
`
  layOut += question1;
}

function questionGit (response) {
  const question2 = `
- GitHub username: https://github.com/${response}
`
  layOut += question2;
}

function questionlinkedIn (response) {
  const question3 = `
- LinkedIn: ${response}
`
  layOut += question3;
}

function writeToFile(data) {
  fs.writeFile(`README.md`, data,(err)=>
  err ? console.error(err) : console.log('File Write Success!'))
}