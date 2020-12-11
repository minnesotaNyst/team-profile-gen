const Employee = require('../lib/Employee');

//variables to use in the tests
let tName = 'Richard';
let tId = 1234;
let tMail = 'richard.doe@gmail.com';

test('test to see if an object is created with the new Employee() constructor', () => {
	const employee = new Employee();
	expect(typeof employee).toBe('object');
});

test('test to see if we can create a new employee with name, id and email properties', () => {
	const employee = new Employee(tName, tId, tMail);

	expect(employee.name).toEqual(expect.any(String));
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
});

test('test the getName() method', () => {
	const employee = new Employee(tName);
	expect(employee.getName()).toBe(tName);
});

test('test the getId() method', () => {
	const employee = new Employee(tName, tId);
	expect(employee.getId()).toBe(tId);
});

test('test the getEmail() method', () => {
	const employee = new Employee(tName, tId, tMail);
	expect(employee.getEmail()).toBe(tMail);
});

test('test that getRole() returns "Employee"', () => {
	const tRole = 'Employee';
	const employee = new Employee(tName, tId, tMail);
	expect(employee.getRole()).toBe(tRole);
});
