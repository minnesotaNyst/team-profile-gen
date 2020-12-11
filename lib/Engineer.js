const Employee = require('../lib/Employee');

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);

		this.github = github;
	}

	//this method is used to grab the gitHub username from the inquier prompts in the indes.js file
	getGithub() {
		return this.github;
	}

	//overridden to return 'Engineer'
	getRole() {
		return 'Engineer';
	}

	//this is where the template literal will go for the eingineer role
	//this will be rendered in the template-logic.js
	/* generateTemplateLiteral(){
		return ``
	} */
}

module.exports = Engineer;
