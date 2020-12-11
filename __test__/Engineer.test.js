const Engineer = require('../lib/Engineer');

let tName = 'Jane';
let tId = 1234;
let tGitHub = 'ghusername';
let tMail = 'ghuser@gmail.com';

test('test to create a new engineer with extended properties from employee and new github information', () => {
	const engineer = new Engineer(tName, tId, tMail, tGitHub);
	expect(engineer.github).toBe(tGitHub);
});

test('test that the getRole() method should return "Engineer"', () => {
	const tRole = 'Engineer';
	const engineer = new Engineer(tName, tId, tMail, tGitHub);
	expect(engineer.getRole()).toBe(tRole);
});

test('test that the getGithub() method returns a username', () => {
	const engineer = new Engineer(tName, tId, tMail, tGitHub);
	expect(engineer.getGithub()).toBe(tGitHub);
});
