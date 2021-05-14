const generateHtml = (employees) => {
  // Logs all of the employees passed into this function
  console.log(employees);

  // Creates empty container object which will then be updated based on incoming data for function
  let container = ''

  // For each employee in the list
  employees.forEach(employee => {
    // Beginning switch case
    switch (employee.constructor.name) {
      // Engineer Case
      case 'Engineer':
        let engineerCard = `
          <div class="card col s12 m8 l3 small" id="eng">
            <div class="card-content">
              <h1 class="card-name">${employee.name}</h1>
              <p class="card-title">Engineer</p>
              <hr>
              <p class="card-text">Emp. ID: ${employee.id}</p>
              <p class="card-text">Email Address: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></p>
              <p class="card-text">GitHub Profile: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></p>
            </div>
          </div>
        `
        //Add the current card to the container along with the other pre-existing ones
        container = container + engineerCard;
        // Break the statement if case === Engineer
        break;

      // Manager Case
      case 'Manager':
        let managerCard = `
          <div class="card col s12 m8 l3 small" id="man">
            <div class="card-content">
              <h1 class="card-name">${employee.name}</h1>
              <p class="card-title">Manager</p>
              <hr>
              <p class="card-text">Employee ID: ${employee.id}</p>
              <p class="card-text">Email Address: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></p>
              <p class="card-text">Office Number: ${employee.officeNumber}</p>
            </div>
          </div>
        `
        //Add the current card to the container along with the other pre-existing ones
        container = container + managerCard;
        // Break the statement if case === Manager
        break;

      // Intern Case
      case 'Intern':
        let internCard = `
          <div class="card col s12 m8 l3 small" id="int">
            <div class="card-content">
              <h1 class="card-name">${employee.name}</h1>
              <p class="card-title">Intern</p>
              <hr>
              <p class="card-text">Emp. ID: ${employee.id}</p>
              <p class="card-text">Email Address: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></p>
              <p class="card-text">School Attended: ${employee.school}</p>
            </div>
          </div>  
          `
        //Add the current card to the container along with the other pre-existing ones
        container = container + internCard;
        // Break the statement if case === Intern
        break;
    }
  })

  // HTML body to be used for code generation when all cards have been created
  finalString = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <!-- Google Fonts -->
    <link
    href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&family=Jost:wght@200&family=Raleway:wght@800&display=swap"
    rel="stylesheet">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <link rel="stylesheet" href="./stylesheet.css" />
    <title>Team Generator</title>
  </head>
  <body>
    <nav>
      <div class="nav-wrapper black">
        <a href="#" class="brand-logo center">Team Generator</a>
      </div>
    </nav>
    <div class="container flexbox">
      <div class="row center-align flexbox">
            ${container} 
      </div>
    </div>
  </body></html>`
  return finalString;

}

// Exports the generateHtml page for creation
module.exports = generateHtml