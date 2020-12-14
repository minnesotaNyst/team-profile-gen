const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'dist', 'team.html');
// const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./src/template-logic.js');

const teamMembers = [];
const idArray = [];

function appMenu() {
	//WHEN I start the application...THEN I am prompted to enter the team manager's name, id, email and office number
	function createManager() {
		console.log('Please build your team');
		inquirer
			.prompt([
				//ask the user for the managers name
				{
					type: 'input',
					name: 'mName',
					message: "What is your manager's name?",
					validate: resposne => {
						if (resposne) {
							return true;
						} else {
							console.log('Please enter a name!');
							return false;
						}
					}
				},
				//ask the user for the manager's id is
				{
					type: 'input',
					name: 'mId',
					message: "What is the manager's ID #?",
					validate: answer => {
						const valid = /^[1-9]\d*$/.test(answer);
						if (valid) {
							return true;
						}
						return 'Please enter a valid ID number!';
					}
				},
				//ask the user for the manager's email address is
				{
					type: 'input',
					name: 'mMail',
					message: "What is the manager's email address?",
					validate: function (response) {
						const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
							response
						);
						if (valid) {
							return true;
						}
						console.log('Please enter a valid email!');
						return false;
					}
				},
				//ask the user for the manager's office number is
				{
					type: 'input',
					name: 'mOfficeNumber',
					message: "What is the manager's office number?",
					validate: answer => {
						const valid = /(?:[-\/\s.]|\d)+/.test(answer);
						if (valid) {
							return true;
						}
						return 'Please enter a valid phone number!';
					}
				}
			])
			//create a new manager object with the data that was collected from the prompt above
			.then(answers => {
				const manager = new Manager(
					answers.mName,
					answers.mId,
					answers.mMail,
					answers.mOfficeNumber
				);
				teamMembers.push(manager);
				idArray.push(answers.mId);

				// console.log(manager);
				// console.log(idArray);
				console.log(teamMembers);

				//invoke a new function that will collect other team member data
				selectTeam();
			});
	}

	//WHEN I enter the team manager's name, id, email and number...THEN I am presented with a menu with the option to add an engineer, intern or finish building my team
	function selectTeam() {
		inquirer
			.prompt([
				//ask the user which type of team member they would like to add
				{
					type: 'list',
					name: 'mChoice',
					message: 'Which type of team member would you like to add?',
					choices: [
						'Engineer',
						'Intern',
						"I don't want to add any more team members"
					]
				}
			])
			//based on the end users selection, use a switch statement to call the proper function for questions pertaning to that employee type
			.then(selection => {
				switch (selection.mChoice) {
					case 'Engineer':
						createEngineer();
						break;
					case 'Intern':
						createIntern();
						break;
					default:
						buildTeam();
						console.log(teamMembers);
						break;
				}
			});
	}

	//WHEN I select the engineer option THEN I am prompted to enter the engineer’s name, id, email, and GitHub username and I am taken back to the menu
	function createEngineer() {
		inquirer
			.prompt([
				//ask the user for the engineers name
				{
					type: 'input',
					name: 'eName',
					message: "What is your engineer's name?",
					validate: resposne => {
						if (resposne) {
							return true;
						} else {
							console.log('Please enter a name!');
							return false;
						}
					}
				},
				//ask the user for the engineers ID
				{
					type: 'input',
					name: 'eId',
					message: "What is your engineer's id?",
					validate: answer => {
						const valid = /^[1-9]\d*$/.test(answer);
						if (valid) {
							return true;
						}
						return 'Please enter a valid ID number!';
					}
				},
				//ask the user for the engineers email
				{
					type: 'input',
					name: 'eEmail',
					message: "What is your engineer's email?",
					validate: function (response) {
						const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
							response
						);
						if (valid) {
							return true;
						}
						console.log('Please enter a valid email!');
						return false;
					}
				},
				//ask the user for the engineers github username
				{
					type: 'input',
					name: 'eGithub',
					message: "What is your engineer's GitHub username?",
					validate: response => {
						if (response) {
							return true;
						}
						return 'Please enter a GitHub username!';
					}
				}
			])
			//create a new Engineer object with the data that was collected from the prompts above
			.then(responses => {
				const engineer = new Engineer(
					responses.eName,
					responses.eId,
					responses.eEmail,
					responses.eGithub
				);
				teamMembers.push(engineer);
				idArray.push(responses.eId);
				//invoke the selectTeam function in the event there are more team members to add
				selectTeam();
			});
	}

	//WHEN I select the intern option... THEN I am prompted to enter the intern’s name, id, email, and school and I am taken back to the menu
	function createIntern() {
		inquirer
			.prompt([
				//ask the user for the interns name
				{
					type: 'input',
					name: 'iName',
					message: "What is your intern's name?",
					validate: resposne => {
						if (resposne) {
							return true;
						} else {
							console.log('Please enter a name!');
							return false;
						}
					}
				},
				//ask the user for the interns ID
				{
					type: 'input',
					name: 'iId',
					message: "What is your intern's id?",
					validate: answer => {
						const valid = /^[1-9]\d*$/.test(answer);
						if (valid) {
							return true;
						}
						return 'Please enter a valid ID number!';
					}
				},
				//ask the user for the interns email
				{
					type: 'input',
					name: 'iEmail',
					message: "What is your intern's email?",
					validate: function (response) {
						const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
							response
						);
						if (valid) {
							return true;
						}
						console.log('Please enter a valid email!');
						return false;
					}
				},
				//ask the user for the interns school
				{
					type: 'input',
					name: 'iSchool',
					message: 'What school does your intern attend?',
					validate: response => {
						if (response) {
							return true;
						}
						return 'Please enter the name of a school!';
					}
				}
			])
			//create a new Intern object with the data that was collected from the prompts above
			.then(responses => {
				const intern = new Intern(
					responses.iName,
					responses.iId,
					responses.iEmail,
					responses.iSchool
				);
				teamMembers.push(intern);
				idArray.push(responses.iId);
				//invoke the selectTeam function in the event there are more team members to add
				selectTeam();
			});
	}

	function buildTeam() {
		fs.writeFileSync(OUTPUT_DIR, render(teamMembers), 'utf-8');
	}
	createManager();
}

appMenu();
