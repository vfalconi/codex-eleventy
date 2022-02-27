const { DateTime } = require('luxon');

module.exports.htmlDateString = (dateObj) => {
	const date = dateObj instanceof Date ? dateObj : new Date(dateObj);
	const format = 'LLLL d, yyyy';
	const options = { zone: 'utc' };
	return DateTime.fromJSDate(date, options).toFormat(format);
};

module.exports.machineTime = (dateObj) => {
	const date = dateObj instanceof Date ? dateObj : new Date(dateObj);
	const format = 'yyyy-LL-dd';
	const options = { zone: 'utc' };
	return DateTime.fromJSDate(date, options).toFormat(format);
};

module.exports.RSSTimeFormat = (dateObj) => {
	return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISO();
};

module.exports.machineTimeISO = (dateObj) => {
	return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISO();
};

module.exports.trim = (str) => {
	// TODO: what is this?
	if (typeof str !== 'string' || (chr !== null && typeof chr !== 'string'))
		return str;
	if (chr === null) return str.trim;

	let result = str;
	if (str.startsWith(chr)) result = result.slice(chr.length);
	if (str.endsWith(chr)) result = result.slice(0, result.length - chr.length);
	return result;
};

module.exports.date = (obj, format = null) => {
	if (format === null) format = 'yyyy-mm-dd';
	return DateTime.fromJSDate(obj).toFormat(format);
};

module.exports.babek = (str) => {
	if (typeof str !== 'string') return str;
	return str.replace('-', ' ');
};

module.exports.lemac = (str) => {
	if (typeof str !== 'string') return str;
	const chars = str.split('').map(char => {
		if (char === char.toUpperCase()) return ` ${char.toLowerCase()}`;
		return char;
	});

	return chars.join('');
};
