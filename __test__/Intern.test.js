const Intern = require('../lib/Intern.js');

let tName = 'Jim';
let tId = 1234;
let tMail = 'ghuser@gmail.com';
let tSchool = 'Vandy';

test('create an intern constructor', () => {
	const intern = new Intern(tName, tId, tMail, tSchool);
	expect(intern.school).toEqual(expect.any(String));
});
test('gets interns school', () => {
	const intern = new Intern(tName, tId, tMail, tSchool);
	expect(intern.getSchool()).toEqual(expect.any(String));
});
test('gets interns role', () => {
	const tRole = 'Intern';
	const intern = new Intern(tName, tId, tMail, tSchool);
	expect(intern.getRole()).toBe(tRole);
});
