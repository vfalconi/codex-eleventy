const { constants } = require('fs');
const { copyFile, mkdir } = require('fs/promises');
const templateFiles = [
	[ './src/.env', '../../.env' ],
	[ './src/.eleventy.js', '../../.eleventy.js' ],
];
const mkdirs = [
	'../../src/templates/_data',
	'../../src/templates/_partials',
];

templateFiles.forEach(templateFile => {
	const [ src, dest ] = templateFile;
	copyFile(src, dest, constants.COPYFILE_EXCL)
		.then(result => console.log(`file template (${src}) was copied to ${dest}`))
		.catch(e => console.log(`existing file (${dest}) detected, template (${src}) not copied`));
});

mkdirs.forEach(dir => {
	mkdir(dir, { recursive: true })
		.then(result => console.log(`directory ${dir} created`))
		.catch(e => console.log(`(${dir}) not created`));
});

