// Requirements
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./lib/generateHtml');

// Employees array list to add to html once completed
const employees = [];

// Employee Function
function employee() {
  // QUESTIONS FOR THE USER
  inquirer.prompt([
    {
      // ROLE SELECTION
      type: 'list',
      name: 'role',
      message: 'Please choose on of the following roles:',
      choices: ['Engineer', 'Intern', 'Manager',],
    },
    {
      // USERS NAME
      type: 'input',
      name: 'name',
      message: 'Please enter the employee\'s name:',
    },
    {
      // USERS ID
      type: 'input',
      name: 'id',
      message: 'Please enter the employee\'s ID:',
    },
    {
      // USERS EMAIL
      type: 'input',
      name: 'email',
      message: 'Please enter employee\'s email address:'
    }
  ])
    .then((responses) => {
      // Gather Github information IF engineer is selected
      if (responses.role === 'Engineer') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'github',
            message: 'Please enter the Engineer\'s GitHub username:'
          }
        ])
          .then((additional) => {
            const engineer = new Engineer(responses.name, responses.id, responses.email, additional.github);
            employees.push(engineer);
            addAnother();
          })
      } 
      // Gather school information IF Intern is selected
      else if (responses.role === 'Intern') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'school',
            message: 'Please enter the Intern\'s school:'
          }
        ])
          .then((additional) => {
            const intern = new Intern(responses.name, responses.id, responses.email, additional.school);
            employees.push(intern);
            addAnother();
          })
      } 
      // Gather office number information IF Manager is selected
      else if (responses.role === 'Manager') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'office',
            message: 'Please enter the managers office number:'
          }
        ])
          .then((additional) => {
            const manager = new Manager(responses.name, responses.id, responses.email, additional.office);
            employees.push(manager);
            addAnother();
          })
      }
    })
};

// CHECKING TO SEE IF USER WANTS TO ADD ANOTHER EMPLOYEE
function addAnother() {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'another',
      message: 'Would you like to add another employee?'
    }
  ])
    .then((answer) => {
      if (answer.another) {
        employee()
      } else {
        console.log('Employees will be added')
        const employeeString = generateHtml(employees);
        // FILE WILL BE WRITTED TO 'DIST FOLDER' as Index.html
        fs.writeFile('./dist/index.html', employeeString, function (err) {
          // Error is thrown if the file fails to write
          console.error(err);
        });
      }
    })
};

// Invoke Method
employee();