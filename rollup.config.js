const packageJSON = require('./package');

export default [
	{
		input: 'dist/index.js',
		output: {
			file: packageJSON.main,
			format: 'umd',
			name: 'typeScriptProLibraryProject'
		}
	}
]