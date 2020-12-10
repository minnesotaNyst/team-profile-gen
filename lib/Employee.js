const Employee = require('../lib/Employee');

class Employee {
	constructor(name, id, email) {
		//when we extend the constructor we can add in the super
		//super(name);

		this.name = name;
		this.id = id;
		this.email = email;
	}

	getName() {}
	getId() {}
	getEmail() {}
	getRole() {}
}
