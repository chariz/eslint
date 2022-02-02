module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},

	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"preact"
	],

	globals: {
		Atomics: "readonly",
		NodeJS: "readonly",
		SharedArrayBuffer: "readonly",
		$: "readonly"
	},

	parser: require.resolve("@typescript-eslint/parser"),
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2020,
		sourceType: "module",
	},

	plugins: [
		"react",
		"@typescript-eslint"
	],

	rules: {
		"array-callback-return": "error",
		"comma-dangle": [
			"error",
			"never"
		],

		eqeqeq: [
			"error",
			"always",
			{
				null: "ignore"
			}
		],
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
				offsetTernaryExpressions: true
			}
		],
		quotes: [
			"error",
			"double",
			{
				allowTemplateLiterals: true
			}
		],
		semi: [
			"error",
			"always",
			{
				omitLastInOneLineBlock: true
			}
		],

		"newline-per-chained-call": [
			"error",
			{
				ignoreChainWithDepth: 1
			}
		],
		"object-shorthand": [
			"error", "always"
		],
		"prefer-const": "off",
		"no-var": "error",
		"no-unused-vars": "off",
		"prefer-template": "error",
		"no-useless-return": "error",
		"no-implicit-coercion": "error",
		"no-spaced-func": "off",
		"react/no-unknown-property": [
			"error",
			{
				ignore: [
					"class",
					"for"
				]
			}
		]
	}
}
