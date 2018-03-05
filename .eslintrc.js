module.exports = {
	env: {
		node: true,
		es6: true,
    browser: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 7,
		sourceType: 'module'
	},
	extends: 'airbnb-base',
	rules: {
		'linebreak-style': [
			'error',
			'unix'
		],
    'import/no-extraneous-dependencies': 'off'
	}
};
