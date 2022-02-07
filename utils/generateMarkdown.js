// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'MIT') {
    licenseBadge = "https://img.shields.io/badge/MIT-MIT-brightgreen";
  } else if (license === 'GNU GPLv3') {
    licenseBadge = "https://img.shields.io/badge/GNU-GNU GPLV3-green"
  } else if (license === 'Apache License 2.0') {
    licenseBadge = "https://img.shields.io/badge/APACHE-APACHE-blue"
  } else if (license === 'None') {
    return ('');
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    licenseLink = "https://choosealicense.com/licenses/mit/";
  } else if (license === 'GNU GPLv3') {
    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/"
  } else if (license === 'Apache License 2.0') {
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/"
  } else if (license === 'None') {
    return ('');
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## ${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![](https://img.shields.io/badge/${data.licenses}-License)

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
You can find me on [Github](https://github.com/${data.username}) or through the email ${data.email}

`;
}

module.exports = generateMarkdown;
