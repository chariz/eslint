import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import a11y from "eslint-plugin-jsx-a11y";
import eslintReact from "eslint-plugin-react";
import eslintVue from "eslint-plugin-vue";
import importSort from "eslint-plugin-simple-import-sort";
import reactHooks from "eslint-plugin-react-hooks";
import tsEslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";

export default function ({ react = false, vue = false, node = true, browser = true } = {}) {
	return defineConfig([
		// Base JS
		js.configs.recommended,

		// TypeScript
		tsEslint.configs.strict,
		tsEslint.configs.stylistic,

		// React
		react
			? [
					eslintReact.configs.flat.recommended,
					eslintReact.configs.flat["jsx-runtime"],

					reactHooks.configs.flat.recommended
				]
			: [],

		vue
			? [
					eslintVue.configs["flat/recommended"]
				]
			: [],

		// Unicorn
		unicorn.configs.all,

		// a11y
		a11y.flatConfigs.strict,

		// Our config
		{
			name: "eslint-config-chariz/main",
			files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}", "!**/.nuxt/**/*"],

			languageOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				globals: {
					...globals.builtin,
					...globals.es2026,
					...(node ? globals.node : {}),
					...(browser
						? {
								...globals.browser,
								...globals.serviceworker,
								...globals.jquery
					 }
						: {})
				}
			},

			plugins: {
				"simple-import-sort": importSort
			},

			rules: {
				"@typescript-eslint/no-non-null-assertion": "off",
				// Has a lot of false positives, tsc catches this anyway
				"@typescript-eslint/no-unused-vars": "off",

				"array-bracket-newline": ["error", "consistent"],
				"array-bracket-spacing": ["error", "never"],
				"array-callback-return": "error",
				"array-element-newline": ["error", "consistent"],
				"comma-dangle": ["error", "never"],
				"dot-location": ["error", "property"],
				eqeqeq: ["error", "always", { null: "ignore" }],
				"func-call-spacing": ["error", "never"],
				"function-call-argument-newline": ["error", "consistent"],
				indent: ["error", "tab", { SwitchCase: 0, offsetTernaryExpressions: true }],
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
				"space-before-function-paren": "off",
				"spaced-comment": ["error", "always", { markers: ["/", "!", "*"] }],
				"import/no-anonymous-default-export": "off",
				"unicorn/consistent-function-scoping": "off",
				"unicorn/custom-error-definition": "off",
				"unicorn/filename-case": [
					"warn",
					{
						cases: {
							pascalCase: true,
							kebabCase: true,
							camelCase: true
						},
						ignore: ["API", "ID", "IP", "PDF", "URL", "OMG", "WTF", "BBQ"]
					}
				],
				"unicorn/no-anonymous-default-export": "off",
				"unicorn/no-array-callback-reference": "off",
				"unicorn/no-array-sort": "off",
				"unicorn/no-await-expression-member": "off",
				"unicorn/no-keyword-prefix": "off",
				"unicorn/no-negated-condition": "off",
				"unicorn/no-null": "off",
				"unicorn/no-static-only-class": "off",
				// This rule is confusing. What am I meant to fix?
				"unicorn/no-unsafe-regex": "off",
				"unicorn/no-useless-undefined": ["error", { checkArguments: false }],
				"unicorn/prefer-node-protocol": "off",
				"unicorn/prevent-abbreviations": "off",
				"unicorn/switch-case-braces": ["error", "avoid"]
			}
		},

		// React/Vue
		react || vue
			? {
					name: "eslint-config-chariz/jsx",
					files: ["**/*.{jsx,tsx,vue}"],

					languageOptions: {
						parserOptions: {
							ecmaFeatures: {
								jsx: true
							}
						}
					}
				}
			: {},

		react
			? {
					name: "eslint-config-chariz/react",
					files: ["**/*.{jsx,tsx}"],

					settings: {
						react: {
							version: "19"
						}
					},

					rules: {
						"react/no-unknown-property": ["error", { ignore: ["class", "for"] }]
					}
				}
			: {},

		vue
			? {
					name: "eslint-config-chariz/vue",
					files: ["**/*.vue"],

					rules: {
						"vue/multi-word-component-names": "off"
					}
				}
			: {}
	]);
}
