const htmlMinifier = require('html-minifier');

module.exports.htmlmin = (content, outputPath) => {
	if (outputPath.endsWith('.html') && process.env.BUILD_ENVIRONMENT === 'production') {
		return htmlMinifier.minify(content, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true,
			removeAttributeQuotes: true,
		});
	}

	return content;
};
