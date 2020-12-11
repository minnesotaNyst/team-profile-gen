const Employee = require('../lib/Employee');

//this is going to test against the constructor of the player
test('creates an employee object', () => {
	const employee = new Employee('Richard', 12, 'richard.doe@gmail.com');

	expect(employee.name).toBe('Richard');
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
});
