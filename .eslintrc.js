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
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": ["error", "never"],
		"array-callback-return": "error",
		"array-element-newline": ["error", "consistent"],
		"comma-dangle": ["error", "never"],
		"dot-location": ["error", "property"],
		eqeqeq: ["error", "always", { null: "ignore" }],
		"func-call-spacing": ["error", "never"],
		"function-call-argument-newline": ["error", "consistent"],
		indent: ["error", "tab", { SwitchCase: 1, offsetTernaryExpressions: true }],
		"max-lines-per-function": ["warn", { max: 300 }],
		"max-params": ["warn", { max: 5 }],
		"multiline-comment-style": ["error", "separate-lines"],
		"multiline-ternary": ["error", "always-multiline"],
		"newline-per-chained-call": ["error", { ignoreChainWithDepth: 1 }],
		"no-empty": "off",
		"no-implicit-coercion": "error",
		// Disabling because this false-positives a lot when using spaces to align things. It’s too
		// noisy to use an eslint disable comment every time this gets in the way.
		"no-mixed-spaces-and-tabs": "off",
		"no-spaced-func": "off",
		// Has a lot of false positives
		"no-unused-vars": "off",
		"no-useless-return": "error",
		"no-var": "error",
		"no-warning-comments": "warn",
		"object-curly-newline": [
			"error",
			{
				multiline: true,
				consistent: true
			}
		],
		"object-curly-spacing": ["error", "always"],
		"object-shorthand": ["error", "always"],
		"one-var": ["error", "never"],
		"padded-blocks": ["error", "never"],
		"prefer-const": ["error", { destructuring: "all" }],
		"prefer-template": "error",
		"quote-props": ["error", "as-needed"],
		quotes: ["error", "double", { allowTemplateLiterals: true }],
		semi: ["error", "always", { omitLastInOneLineBlock: true }],
		"sort-imports": [
			"error",
			{
				ignoreCase: true,
				ignoreDeclarationSort: true
			}
		],
		"space-before-function-paren": [
			"error",
			{
				anonymous: "always",
				asyncArrow: "always",
				named: "never"
			}
		],
		"spaced-comment": ["error", "always", { markers: ["/", "!", "*"] }],
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
		// This rule is confusing. What am I meant to fix?
		"unicorn/no-unsafe-regex": "off",
		"unicorn/no-useless-undefined": ["error", { checkArguments: false }],
		"unicorn/prefer-node-protocol": "off",
		"unicorn/prevent-abbreviations": "off"
	},

	settings: {
		jest: {
			version: "28"
		},

		react: {
			version: "latest"
		}
	}
};
