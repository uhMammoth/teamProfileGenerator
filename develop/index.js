const inquirer = require('inquirer');
const addEmployee = require('./src/htmlGeneration.js');
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');

const promptQuestions = [{
    type: 'text',
    name: 'name',
    message: 'What is your name?'
},{
    type: 'text',
    name: 'email',
    message: 'What is your email?'
},{
    type: 'text',
    name: 'office',
    message: 'What is your office number?'
},{
    type: 'text',
    name: 'github',
    message: 'What is your github username?'
},{
    type: 'text',
    name: 'school',
    message: 'What school did you graduate from?'
},{
    type: 'checklist',
    name: 'add',
    message: 'Would you like to add another employee?'
}];

const [name, email, office, github, school, add] = promptQuestions;
const managerQuestions = [name, email, office];
const engineerQuestions = [name, email, github];
const internQuestions = [name, email, school];
const nextEmployee = [add];

// inquirer prompt
const teamPrompt = function(){
    inquirer
        .prompt(managerQuestions)
        .then(({answer}) => {
            const manager = new Manager();
            manager.name = answer.name;
            manager.id = Employee.id;
            Employee.id++;
            manager.email = answer.email;
            manager.officeNumber = answer.office;
            addEmployee(manager);
        });
    nextQuestion();
}

const nextQuestion = function(){

    let question = true;
    While (question) {

        let answer = await inquirer(add);
        if (answer == "engineer") {

        } else if (answer == "intern") {
            
        } 
        else {
        }

    }
}


teamPrompt();