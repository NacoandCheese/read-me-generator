//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");



// Prompts user questions to populate the README
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process if any:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project usage for?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the appropriate license for this project:',
            choices: [
                'Apache',
                'Academic',
                'GNU',
                'ISC',
                'MIT',
                'Mozilla',
                'Open'
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who are the contributors of this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Is there a test included?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What do I do if I have an issue?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email:'
        }
    ]);
}

//This function will attach data to our markdown.


//Create a function to write README file
const writeToFile = (markdown) => {
    //write output to README.md file
    fs.writeFile('README.md', markdown, (error) =>
    error ? console.log('Error!') : console.log('Success!'));  //error handling is a required argument
}

//Create a function to initialize app
function init() {
    //Asks for the user's input
    promptUser()
        .then((answers)=> {
            //answers return data type object
            //Now we will create markdown with our answers.
            //Markdown is the result of generateMarkdown function.
           const markdown = generateMarkdown(answers)
           
           //Creating README file.
           writeToFile(markdown)
        })    
        
}

//Function call to initialize app
init();
