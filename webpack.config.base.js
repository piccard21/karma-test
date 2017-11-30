module.exports = {
	// aliases simplifying require/import
	resolve: {
		alias: {
			Assets: path.resolve(__dirname, 'resources/assets/'),
			Components: path.resolve(__dirname, 'resources/components/')
		}
	},

	// never actually import following libs, relying on their global availability
	externals: {
		jquery: 'jQuery',
		lodash: {
			commonjs: 'lodash',
			commonjs2: 'lodash',
			amd: 'lodash',
			root: '_',
			var: '_'
		}
	}
};
