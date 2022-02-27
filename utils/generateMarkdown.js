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
    return `# ${data['projectTitle']}`    
}

module.exports = generateMarkdown;