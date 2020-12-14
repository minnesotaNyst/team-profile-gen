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
					<div class="blue darken-3 section">
						<span class="card-title">
						<h3 class=" white-text center">${this.name}</h3>
						<h4 class=" white-text center"><i class=" small material-icons">person</i>${this.getRole()}
						</h4>
						</span>
					</div>
					<div class="card-content">
						<div>ID: ${this.id}</div>
						<div>Email:<a href="mailto:${this.email}"> ${this.email}</a></div>
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
