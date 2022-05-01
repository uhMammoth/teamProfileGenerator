const fs = require('fs');

//beginning of html sandwhich that goes before the team member cards
const beginningHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1 class="bg-red-500 text-center text-white text-4xl py-8">My Team</h1>
    </header>
    <main class="flex flex-wrap w-1/2 m-auto justify-center pt-6">
`;

//bottom of html sandwhich to go after html cards are added
const endingHtml = `
    </main>
</body>
</html>
`
//takes in employee and spits back html code of that employees card to be added
const addEmployee = function(employee){

    //since each employee has one unique attribute this if statement decides which one is used [ officenumber / github / school ]
    let uniqueIdentifier = '';
    if (employee.getRole() === 'Manager') {
        uniqueIdentifier = `Office Number: ${employee.getOffice()}`;
    } else if (employee.getRole() === 'Engineer') {
        uniqueIdentifier = `Github: <a class="text-blue-600 hover:underline" href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
    } else if (employee.getRole() === 'Intern') {
        uniqueIdentifier = `School: ${employee.getSchool()}`;
    }

    const teamMember = `
    <div class="rounded m-3 min-w-[30%] shadow-lg shadow-black overflow-hidden text-xl">
          <div class="text-white bg-blue-500 p-3">
              <h2 class="text-lg">${employee.getName()}</h2>
              <h2>${employee.getRole()}</h2>
          </div>  
          <div class="p-6 bg-gray-200">
              <ul class="">
                  <li class="border bg-white rounded p-3">ID: ${employee.getId()}</li>
                  <li class="border bg-white rounded p-3">Email: <a class="text-blue-600 hover:underline" href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                  <li class="border bg-white rounded p-3">${uniqueIdentifier}</li>
              </ul>
          </div>
    </div>
    `
    return teamMember;
}


//once user is done adding employees this will be called, takes in the html cards generated previously with manager and all employees then writes to file
const finished = function(teamHtml){
    let htmlPage = beginningHtml + teamHtml + endingHtml;
    fs.writeFile(`./dist/index.html`, htmlPage, (err) => {
        if(err) throw err;
        console.log('Check the dist folder for the generated HTML file!');
    });
}

module.exports = {addEmployee, finished};