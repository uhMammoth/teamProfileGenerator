const Employee = require('../lib/Employee.js');

test(`returns employee's name`, () => {

  const employee = new Employee();
  
  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getRole()).toBe('Employee');
});