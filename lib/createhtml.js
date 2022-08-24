// Create Engineer Card
const createEngineerCard = function (engineer) {
    return `
    <div class="col-4 mt-3">
        <div class="card h-90">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </div>
            <ul class="card-body list-group">
            <li class="list-group-item">Employee ID: ${id}</li>
            <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
    </div>`
};

// Create Intern Card
const createInternCard = function (intern) {
    return `
    <div class="col-4 mt-3">
        <div class="card h-90">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </div>
            <ul class="card-body list-group">
            <li class="list-group-item">Employee ID: ${id}</li>
            <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item school">School: ${intern.school}</li>
            </ul>
        </div>
    </div>`
};

// Create Manager Card
const createManagerCard = function (manager) {
    return `
    <div class="col-4 mt-3">
        <div class="card h-90">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
            <ul class="card-body list-group">
            <li class="list-group-item">Employee ID: ${id}</li>
            <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item office-num">Office Contact Number: ${officeNumber}</li>
            </ul>
        </div>
    </div>`
};