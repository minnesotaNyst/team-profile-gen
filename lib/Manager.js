const Employee = require('../lib/Employee');

//TODO: create continuity later

class Manager extends Employee {
	constructor(name, id, email, officeNum) {
		super(name, id, email);

		this.officeNum = officeNum;
	}

	getRole() {
		return 'Manager';
	}

	//this is where the template literal will go for the eingineer role
	//this will be rendered in the template-logic.js
	/* generateTemplateLiteral(){
		return ``
	} */
}

module.exports = Manager;
