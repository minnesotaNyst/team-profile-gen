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
	engineerTemplateLiteral() {
		return `
		<div class="col s6 m6">
			<div class="card small hoverable">
				<div class="blue darken-3 section">
					<span class="card-title">
					<h3 class=" white-text center">${this.name}</h3>
					<h4 class=" white-text center"><i class=" small material-icons">computer</i>${this.getRole()}
					</h4>
					</span>
				</div>
				<div class="card-content">
					<div>ID: ${this.id}</div>
					<div>Email:<a href="mailto:${this.email}"> ${this.email}</a></div>
						<!-- only engineers will have this section -->
					<div>
						<a href="https://github.com/${this.github}" target="_blank">GitHub</a>
					</div>
						<!-- only engineers will have this section -->
				</div>
			</div>
		</div>
		`;
	}
}

module.exports = Engineer;
