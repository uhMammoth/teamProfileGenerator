const Manager = require('../lib/Manager');

test(`returns manager's name, id, email and office number`, () => {

  const manager = new Manager();
  
  expect(manager.getName()).toBe(manager.name);
  expect(manager.getId()).toBe(manager.id);
  expect(manager.getEmail()).toBe(manager.email);
  expect(manager.getOffice()).toBe(manager.officeNumber);
  expect(manager.getRole()).toBe('Manager');
});