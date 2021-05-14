// Requirements
const Intern = require('../lib/Intern');

// Testing the Intern's school
test('Intern School Test', () => {
  const school = 'school'
  const intern = new Intern('bar', 121, 'something@something.com', school);
  expect(intern.school).toBe(school);
});