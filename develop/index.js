const inquirer = require('inquirer');
const {addEmployee, finished} = require('./dist/htmlGeneration');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const promptQuestions = [{
    type: 'text',
    name: 'fullName',
    message: 'What is your name?'
},{
    type: 'text',
    name: 'employeeName',
    message: `Enter the employee's name:`
},{
    type: 'text',
    name: 'id',
    message: 'Enter employee ID:'
},{
    type: 'text',
    name: 'email',
    message: 'What is your email?'
},{
    type: 'text',
    name: 'employeeEmail',
    message: `What is the employee's email?`
},{
    type: 'text',
    name: 'office',
    message: 'What is your office number?'
},{
    type: 'text',
    name: 'github',
    message: `Enter the employee's github username?`
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

const [fullName, employeeName, id, email, employeeEmail, office, github, school, nextEmployee] = promptQuestions;

const managerQuestions = [fullName, id, email, office];
const engineerQuestions = [employeeName, id, employeeEmail, github];
const internQuestions = [employeeName, id, employeeEmail, school];

const employee = new Employee();

// inquirer prompt
async function teamPrompt(){    
    let teamHtml = ``;
    await inquirer
        .prompt(managerQuestions)
        .then((answer) => {
            const manager = new Manager();
            manager.name = answer.fullName;
            manager.email = answer.email;
            manager.officeNumber = answer.office;
            teamHtml = addEmployee(manager);
        });
    nextQuestion(teamHtml);
}

async function nextQuestion(teamHtml){
    let question = true;
    while (question) {
        let answer = await inquirer.prompt(nextEmployee);
        if (answer.add === 'I want to add an engineer') {
            
            const engineer = new Engineer();
            let employee = await inquirer.prompt(engineerQuestions);

            engineer.name = employee.employeeName;
            engineer.id = employee.id;
            engineer.email = employee.employeeEmail;
            engineer.github = employee.github;

            const employeeHtml = addEmployee(engineer);
            teamHtml += employeeHtml;

        } else if (answer.add === 'I want to add an intern') {

            const intern = new Intern();
            let employee = await inquirer.prompt(internQuestions);

            intern.name = employee.employeeName;
            intern.id = employee.id;
            intern.email = employee.employeeEmail;
            intern.school = employee.school;
            
            const employeeHtml = addEmployee(intern);
            teamHtml += employeeHtml;
        } 
        else {
            finished(teamHtml);       
            question = false;
        }

    }
    
}

teamPrompt();
