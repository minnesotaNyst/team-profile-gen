const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./src/template-logic.js');

const teamMembers = [];
const idArray = [];

function appMenu() {
	function createManager() {
		console.log('Please build your team');
		inquirer
			.prompt([
				//ask the user what the managers name
				{
					type: 'input',
					name: 'mName',
					message: "What is your manager's name?",
					validate: resposne => {
						if (resposne) {
							return true;
						} else {
							console.log('Please enter your name!');
							return false;
						}
					}
				},
				//ask the user what the manager's id is
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
				//ask the user what the manager's email address is
				{
					type: 'input',
					name: 'mMail',
					message: "What is the manager's email address?",
					/* Is there logic here that allows us to validate that it is a legitimate email address? */
					/* Take a look at RegEx*/
					validate: function (response) {
						const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
							response
						);

						if (valid) {
							return true;
						} else {
							console.log('Please enter a valid email!');
							return false;
						}
					}
				},
				//ask the user what the manager's office number is
				{
					type: 'input',
					name: 'mOfficeNumber',
					message: "What is the manager's office number?",
					validate: answer => {
						const valid = /^[1-9]\d*$/.test(answer);
						if (valid) {
							return true;
						}
						return 'Please enter a valid phone number!';
					}
				}
			])
			.then(answers => {
				const manager = new Manager(
					answers.mName,
					answers.mId,
					answers.mMail,
					answers.mOfficeNumber
				);
				teamMembers.push(manager);
				idArray.push(answers.mId);

				/* console.log(manager);
				console.log(idArray);
        console.log(teamMembers); */

				buildTeam();
			});
	}

	/*  function buildTeam(); */

	createManager();
}

appMenu();
