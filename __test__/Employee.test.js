//TDD
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

//this is going to test against the constructor of the player
test('creates an employee object', () => {
	const employee = new Employee('Richard');

	expect(employee.name).toBe('Richard');
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toBe('john.doe@gmail.com');
});
