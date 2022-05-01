const inquirer = require('inquirer');
const addEmployee = require('./src/htmlGeneration.js');
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');

const promptQuestions = [{
    type: 'text',
    name: 'fullName',
    message: 'What is your name?'
},{
    type: 'text',
    name: 'employeeName',
    message: `What is the employee's name?`
},{
    type: 'text',
    name: 'email',
    message: 'What is your email?'
},{
    type: 'text',
    name: 'employeeEmail',
    message: 'What is their email?'
},{
    type: 'text',
    name: 'office',
    message: 'What is your office number?'
},{
    type: 'text',
    name: 'github',
    message: `What is the employee's github username?`
},{
    type: 'text',
    name: 'school',
    message: 'What school did the employee graduate from?'
},{
    type: 'list',
    name: 'add',
    message: 'Would you like to add another employee?',
    choices: ['I want to add an engineer', 'I want to add an intern', 'No more employees to add']
}];

const [fullName, employeeName, email, employeeEmail, office, github, school, nextEmployee] = promptQuestions;

const managerQuestions = [fullName, email, office];
const engineerQuestions = [employeeName, employeeEmail, github];
const internQuestions = [employeeName, employeeEmail, school];

const employee = new Employee();

// inquirer prompt
async function teamPrompt(){
    await inquirer
        .prompt(managerQuestions)
        .then((answer) => {
            const manager = new Manager();
            manager.name = answer.fullName;
            manager.email = answer.email;
            manager.officeNumber = answer.office;
            // addEmployee(manager);
            console.log(manager);
            employee.addId();
        });
    nextQuestion();
}

async function nextQuestion(){
    let question = true;
    while (question) {

        let answer = await inquirer.prompt(nextEmployee);
        if (answer.add === 'I want to add an engineer') {
            let engineer = await inquirer.prompt(engineerQuestions);
            console.log(engineer);
            // addEmployee(employee);
        } else if (answer.add === 'I want to add an intern') {
            let intern = await inquirer.prompt(internQuestions);
            // addEmployee(employee);
            console.log(intern);
        } 
        else {
            console.log('Check the dist folder for the generated HTML file!');
            question = false;
        }

    }
    
}

teamPrompt();
