//this is where you will render the tempalte literal
const path = require('path');
const fs = require('fs');

const templatesDir = path.resolve(__dirname, '../template');

// this was suggested by the TA, not claiming as my own work...
const render = employees => {
	const html = [];

	html.push(
		employees
			.filter(employee => employee.getRole() === 'Manager')
			.map(manager => renderManager(manager))
	);
	html.push(
		employees
			.filter(employee => employee.getRole() === 'Engineer')
			.map(engineer => renderEngineer(engineer))
	);
	html.push(
		employees
			.filter(employee => employee.getRole() === 'Intern')
			.map(intern => renderIntern(intern))
	);

	return renderMain(html.join(''));
};

const renderManager = manager => {
	let template = manager.managerTemplateLiteral();
	return template;
};

const renderEngineer = engineer => {
	let template = engineer.engineerTemplateLiteral();
	return template;
};

const renderIntern = intern => {
	let template = intern.internTemplateLiteral();
	return template;
};

const renderMain = html => {
	const template = fs.readFileSync(
		path.resolve(templatesDir, 'temp.html'),
		'utf8'
	);
	return replacePlaceholders(template, 'team', html);
};

const replacePlaceholders = (template, placeholder, value) => {
	const pattern = new RegExp(`{{ ${placeholder} }}`, 'gm');
	return template.replace(pattern, value);
};

module.exports = render;
