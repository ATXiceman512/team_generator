// Requirements
const Engineer = require('../lib/Engineer');

// Test Engineer Github
test('Engineer Github', () => {
  const github = 'GitHub'; 
  const engineer = new Engineer('test', 55, 'something@something.com', github);
  expect(engineer.github).toBe(github);
});