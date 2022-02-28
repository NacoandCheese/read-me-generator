//Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {}

//Create a function that returns license link
//If there is no license, return an empty string
function renderLicenseLink(license) {}

//Create a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {}

//Create a function to generate markdwon for README
function generateMarkdown(data) {
    //Data is our answers to the users questions. Answers become data.

    // Return sends data out of the function. 
    return `
    #${data.projectTitle}
    
    ## Description
        ${data.description}

    ## Table of Contents
    - [Description](#description)
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
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    <br/>
    This application is covered by the ${data.license} license.

    ## Contributing
        ${data.contributing}

    ## Tests
        ${data.tests}

    ## Questions
        ${data.questions}<br />
    <br />

    # Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
    <br />

    # Email me with any questions: ${data.email}<br /><br />
    `;    
}

module.exports = generateMarkdown;