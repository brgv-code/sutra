import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
	dir: './',
})

const customJestConfig: Config = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: 'tsconfig.jest.json',
				useESM: true,
			},
		],
		'^.+\\.m?js$': ['babel-jest', { configFile: './babel.config.test.js' }],
	},
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	transformIgnorePatterns: [
		'node_modules/(?!(string-width|strip-ansi|ansi-regex|@mdx-js|react-markdown|vfile|vfile-message|unified|bail|is-plain-obj|trough|remark-parse|trim-lines|property-information|space-separated-tokens|comma-separated-tokens|hast-util-whitespace|style-to-object|micromark|decode-named-character-reference|character-entities|markdown-table|react-syntax-highlighter)/)',
	],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/babel.config.test.js'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'mjs'],
	// Use the renamed Babel config for tests only
	globals: {
		'babel-jest': {
			configFile: './babel.config.test.js',
		},
	},
}

export default createJestConfig(customJestConfig)
