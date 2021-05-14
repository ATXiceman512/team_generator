// Requirements
const Employee = require('../lib/Employee');

// Testing employee name
test('Employee Name', () => {
  const name = 'Justin';
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

// Testing employee ID
test('Employee ID', () => {
  const id = 123;
  const employee = new Employee('test', id);
  expect(employee.id).toBe(id);
});

// Testing employee Email address
test('Email', () => {
  const sampleEmail = 'something@something.com';
  const employee = new Employee('test', 120, sampleEmail);
  expect(employee.email).toBe(sampleEmail);
});