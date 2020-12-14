const Manager = require('../lib/Manager.js');

let mName = 'Jack';
let mId = 1234;
let mMail = 'manager.email@gmail.com';
let mNumber = 7018675309;

test('creates the property for github', () => {
	const manager = new Manager(mName, mId, mMail, mNumber);
	expect(manager.officeNum).toEqual(expect.any(Number));
});

test('gets role of manager', () => {
	const manager = new Manager('Manager');
	expect(manager.getRole()).toBe('Manager');
});
