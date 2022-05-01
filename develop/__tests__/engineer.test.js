const Engineer = require('../lib/Engineer');

test(`returns engineer's name, id, email and github`, () => {

  const engineer = new Engineer();
  
  expect(engineer.getName()).toBe(engineer.name);
  expect(engineer.getId()).toBe(engineer.id);
  expect(engineer.getEmail()).toBe(engineer.email);
  expect(engineer.getGithub()).toBe(engineer.github);
  expect(engineer.getRole()).toBe('Engineer');
});