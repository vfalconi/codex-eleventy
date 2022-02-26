require('dotenv').config();
const shortcodes = require('./src/shortcodes');
const transforms = require('./src/transforms');
const filters = require('./src/filters');
const passthroughCopy = require('./src/passthroughCopy');
const plugins = require('./src/plugins');
const watchTargets = require('./src/watchTargets');
const { options } = require('./src/options');

module.exports = function(eleventyConfig) {
	eleventyConfig.setBrowserSyncConfig({
		files: watchTargets,
	});

	passthroughCopy.forEach((copy) => {
		eleventyConfig.addPassthroughCopy(copy)
	});

	Object.keys(shortcodes).forEach((name) => {
		eleventyConfig.addShortcode(name, shortcodes[name]);
	});

	Object.keys(transforms).forEach((name) => {
		eleventyConfig.addTransform(name, transforms[name]);
	});

	Object.keys(filters).forEach((name) => {
		eleventyConfig.addFilter(name, filters[name]);
	});

	Object.keys(plugins).forEach((name) => {
		eleventyConfig.addPlugin(plugins[name]);
	});

	return options;
};
