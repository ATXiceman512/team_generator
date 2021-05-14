// Requirements
const Manager = require('../lib/Manager');

// Testing setting office number
test('Valid Office Number', () => {
  const room = 32;
  const manager = new Manager('test', 32, 'something@something.com', room);
  expect(manager.officeNumber).toBe(room);
});