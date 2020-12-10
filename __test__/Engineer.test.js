const Engineer = require('../lib/Engineer')

jest.mock('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jim')

    expect(employee.name).toBe('Richard');
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toBe('john.doe@gmail.com');
})