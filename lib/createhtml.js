// Create Engineer Card
const createEngineerCard = function (engineer) {
    return `
    <div class="col-4 mt-3" id="cards">
        <div class="card h-90">
            <div class="card-header bg-primary">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </div>
            <ul class="card-body list-group">
            <li class="list-group-item">Employee ID: ${engineer.id}</li>
            <li class="list-group-item">Email Address: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item github">Github: <a href="https://github.com/${engineer.githubName}">${engineer.githubName}</a></li>
            </ul>
        </div>
    </div>`
};

// Create Intern Card
const createInternCard = function (intern) {
    return `
    <div class="col-4 mt-3" id="cards">
        <div class="card h-90">
            <div class="card-header bg-secondary">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </div>
            <ul class="card-body list-group">
            <li class="list-group-item">Employee ID: ${intern.id}</li>
            <li class="list-group-item">Email Address: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item school">School: ${intern.schoolName}</li>
            </ul>
        </div>
    </div>`
};

// Create Manager Card
const createManagerCard = function (manager) {
    return `
    <div class="col-4 mt-3" id="cards">
        <div class="card h-90">
            <div class="card-header bg-info">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
            <ul class="card-body list-group">
            <li class="list-group-item">Employee ID: ${manager.id}</li>
            <li class="list-group-item">Email Address: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item office-num">Office Contact Number: ${manager.officeNum}</li>
            </ul>
        </div>
    </div>`
};

// Create employee cards on HTML page
const createHtml = function (employeeCards) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <h1 class="display-4 col-4">Team Members</h1>
        <br>
    </div>
    </div>
    <main>
    <div class="container">
        <div class="row justify-content-center">
            ${employeeCards}
        </div>
    </div>
</main>
    </body>
    </html>`;
}

// Export all functions 
module.exports = { createHtml, createManagerCard, createInternCard, createEngineerCard }