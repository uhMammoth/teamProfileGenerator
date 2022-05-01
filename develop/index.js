//imports from 4 class files as well as htmlGeneration file in dist folder
const inquirer = require('inquirer');
const {addEmployee, finished} = require('./dist/htmlGeneration');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//contains all questions in inquirer format
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
    message: 'What is your email?',
    validate: function(email){
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
    }
},{
    type: 'text',
    name: 'employeeEmail',
    message: `What is the employee's email?`,
    validate: function(email){
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
    }
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

//assigns variables for all questions
const [fullName, employeeName, id, email, employeeEmail, office, github, school, nextEmployee] = promptQuestions;

//groups questions based on employee prompt
const managerQuestions = [fullName, id, email, office];
const engineerQuestions = [employeeName, id, employeeEmail, github];
const internQuestions = [employeeName, id, employeeEmail, school];

const employee = new Employee();

// initial prompt where manager inputs information
async function teamPrompt(){    
    let teamHtml = ``;
    await inquirer
        .prompt(managerQuestions)
        .then((answer) => {
            const manager = new Manager();
            manager.name = answer.fullName;
            manager.email = answer.email;
            manager.officeNumber = answer.office;
            manager.id = answer.id;
            //seeks function from other js file and returns html code that will be used later
            teamHtml = addEmployee(manager);
        });
    //sends html code with manager data to next function 
    nextQuestion(teamHtml);
}

//this function continually prompts user to add other employees and concat each employee after the managers html code
async function nextQuestion(teamHtml){
    let question = true;
    while (question) {
        let answer = await inquirer.prompt(nextEmployee);
        //chooses which prompt to ask based on user choice of employee
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
            //if no more employees are to be added the loop breaks. Html code with manager and all employees entered is then sent to htmlGeneration.js to writeFile
            finished(teamHtml);       
            question = false;
        }
    }    
}

teamPrompt();
