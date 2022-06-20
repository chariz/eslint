/* eslint-disable unicorn/prefer-module */
/** @type {import("eslint").Linter.Config} */
module.exports = {
	env: {
		browser: true,
		es6: true,
		es2022: true,
		node: true
	},

	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:jsx-a11y/strict",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:unicorn/all"
	],

	globals: {
		Atomics: "readonly",
		NodeJS: "readonly",
		SharedArrayBuffer: "readonly",
		$: "readonly"
	},

	overrides: [
		{
			files: ["test/**", "**/*.test.{,c,m}{j,t}s{,x}"],

			env: {
				"jest/globals": true
			},

			extends: "plugin:jest/all"
		}
	],

	parser: require.resolve("@typescript-eslint/parser"),
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2022,
		sourceType: "module"
	},

	plugins: ["simple-import-sort"],

	rules: {
		"array-callback-return": "error",
		"comma-dangle": ["error", "never"],
		eqeqeq: ["error", "always", { null: "ignore" }],
		indent: ["error", "tab", { SwitchCase: 1, offsetTernaryExpressions: true }],
		"newline-per-chained-call": ["error", { ignoreChainWithDepth: 1 }],
		"no-implicit-coercion": "error",
		// Disabling because this false-positives a lot when using spaces to align things. It’s too
		// noisy to use an eslint disable comment every time this gets in the way.
		"no-mixed-spaces-and-tabs": "off",
		"no-spaced-func": "off",
		"no-unused-vars": "off",
		"no-useless-return": "error",
		"no-var": "error",
		"object-shorthand": ["error", "always"],
		"prefer-const": ["error", { destructuring: "all" }],
		"prefer-template": "error",
		quotes: ["error", "double", { allowTemplateLiterals: true }],
		semi: ["error", "always", { omitLastInOneLineBlock: true }],
		"import/no-anonymous-default-export": "off",
		"react/no-unknown-property": ["error", { ignore: ["class", "for"] }],
		"unicorn/consistent-function-scoping": "off",
		"unicorn/custom-error-definition": "off",
		"unicorn/filename-case": [
			"warn",
			{
				cases: {
					pascalCase: true,
					kebabCase: true
				},
				ignore: ["API", "ID", "IP", "PDF", "URL", "OMG", "WTF", "BBQ"]
			}
		],
		"unicorn/no-array-callback-reference": "off",
		"unicorn/no-await-expression-member": "off",
		"unicorn/no-keyword-prefix": "off",
		"unicorn/no-null": "off",
		"unicorn/no-static-only-class": "off",
		// TODO: This rule is confusing. What am I meant to fix?
		"unicorn/no-unsafe-regex": "off",
		"unicorn/no-useless-undefined": ["error", { checkArguments: false }],
		"unicorn/prefer-node-protocol": "off",
		"unicorn/prevent-abbreviations": "off"
	}
};
