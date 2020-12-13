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
	internTemplateLiteral() {
		return `<div class="col s6 m6">
		<div class="card small hoverable">
			<div class="card-title blue darken-3">
				<h3 class=" white-text">${this.name}</h3>
				<h4 class=" white-text school">${this.getRole()}</h4>
			</div>
			<div class="card-content">
				<div>ID: ${this.id}</div>
				<div>Email:<a href="mailto:${this.email}"> ${this.emali}</a></div>
				<!-- only the intern will have the school information -->
				<div>School: ${this.school}</div>
				<!-- only the intern will have the school information -->
			</div>
		</div>
	</div>`;
	}
}

module.exports = Intern;
