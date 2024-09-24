// Include packages needed for this application
// Imports inquirer and fs for command line prompts and file system writing
import inquirer from "inquirer";
import fs from "fs";
// Imports generateMarkdown function to create README content
import generateMarkdown from "./utils/generateMarkdown.js";

// Create an array of questions for user input
const questions = [];

// Create a function to write README file
function writeToFile(fileName, data) {
    // Writes README file with user input and produces error if unsuccessful
    fs.writeFile(fileName, data, (err) => {
        if (err) {
        console.log(err);
        } else {
        console.log("File created!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of your project?",
            },
            {
                type: "input",
                name: "description",
                message: "Please provide a description of your project. What was your motivation? Why did you build this project? What problem does it solve?",
            },
            {
                type: "input",
                name: "installation",
                message: "Please provide installation instructions.",
            },
            {
                type: "input",
                name: "usage",
                message: "Please provide usage information.",
            },
            {
                type: "input",
                name: "contribution",
                message: "Please provide contribution guidelines.",
            },
            {
                type: "input",
                name: "test",
                message: "Please provide test instructions.",
            },
            {
                type: "list",
                name: "license",
                message: "Please choose a license for your project.",
                choices: ["MIT", "Apache", "GPL", "BSD", "None"],
            },
            {
                type: "input",
                name: "github",
                message: "What is your GitHub username?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?",
            },
        ])
        .then((answers) => {
            // Calls generateMarkdown function to create README content
            const markdown = generateMarkdown(answers);
            // Calls writeToFile function to write README file
            writeToFile("README.md", markdown);
        });
}

// Function call to initialize app
init();
