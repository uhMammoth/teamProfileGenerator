const fs = require('fs');

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

const endingHtml = `
    </main>
</body>
</html>
`

const addEmployee = function(employee){
    console.log('working');
    const teamMember = `
    <div class="rounded m-3 min-w-[30%] shadow-2xl overflow-hidden text-xl">
          <div class="text-white bg-blue-500 p-3">
              <h2>${employee.getName()}</h2>
              <h2>${employee.getRole()}</h2>
          </div>  
          <div class="p-6 bg-gray-200">
              <ul class="">
                  <li class="border bg-white rounded p-3">ID:</li>
                  <li class="border bg-white rounded p-3">Email:</li>
                  <li class="border bg-white rounded p-3">Phone:</li>
              </ul>
          </div>
    </div>
    `
    return teamMember;
}

const finished = function(teamHtml){
    let htmlPage = beginningHtml + teamHtml + endingHtml;
    fs.writeFile(`./dist/index.html`, htmlPage, (err) => {
        if(err) throw err;
        console.log('Check the dist folder for the generated HTML file!');
    });
}

module.exports = {addEmployee, finished};