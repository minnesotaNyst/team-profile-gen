const Employee = require('../lib/Employee');

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}
	getSchool() {
		return this.school;
	}
	getRole() {
		return 'Intern';
	}

	//this is where the template literal will go for the intern role
	//this will be rendered in the template-logic.js
	generateTemplateLiteral(){
		
	}
}

module.exports = Intern;
