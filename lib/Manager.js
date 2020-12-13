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
	managerTemplateLiteral() {
		return `
			<div class="col s6 m6">
				<div class="card small hoverable">
				<div class="card-title blue darken-3">
				<h3 class=" white-text">${this.name}</h3>
				<h4 class=" white-text person">${this.getRole()}</h4>
			</div>
					<div class="card-content">
					<div>ID: ${this.id}</div>
					<div>Email:<a href="${this.email}"> ${this.email}</a></div>
				</div>
						<!-- only managers will have an office number -->
						<div>Office Number: ${this.officeNum}</div>
						<!-- only managers will have an office number -->
					</div>
				</div>
			</div>
		`;
	}
}

module.exports = Manager;
