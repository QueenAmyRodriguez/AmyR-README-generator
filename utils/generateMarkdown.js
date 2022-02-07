// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `
  ![License](https://img.shields.io/badge/License-MIT-brightgreen)
    `
  } else if (license === "GNU_GPLv3") {
    return `
  ![License](https://img.shields.io/badge/License-GNU_GPLv3-blue)
    ` 
  } else if (license === "Apache_License_2.0") {
    return `
  ![License](https://img.shields.io/badge/License-Apache_License_2.0-blue)
    ` 
  } else if (license === "None") {
    return `` 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `
  [MIT License](https://choosealicense.com/licenses/mit/)
    `
  } else if (license === "GNU_GPLv3") {
    return `
  [GNU GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/)
    ` 
  } else if (license === "Apache_License_2.0") {
    return `
  [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)
    ` 
  } else if (license === "None") {
    return `` 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `
    A short and simple permissive license with conditions only requiring preservation of copyright and license notices.
    `
  } else if (license === "GNU_GPLv3") {
    return `
    Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license.
    ` 
  } else if (license === "Apache_License_2.0") {
    return `
    A permissive license whose main conditions require preservation of copyright and license notices.
    ` 
  } else if (license === "None") {
    return `` 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

## ${data.description}
-----
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
-----
${data.installation}

## Usage
------
${data.usage}

## License
-------
${renderLicenseLink(data.licenses)}
${renderLicenseSection(data.licenses)}


## Contributing
------
${data.contribute}

## Tests
-----
${data.tests}

## Questions
-----
You can find me on [Github](https://github.com/${data.username}) or through the email ${data.email}

`;
}

module.exports = generateMarkdown;
