// @ts-check
import petal from '@flowr/eslint-config';

export default petal({
	// remove this for now
	jsonc: false,
	toml: false,

	overrides: {
		javascript: {
			'no-undef': 'off',
		},
	},
});
