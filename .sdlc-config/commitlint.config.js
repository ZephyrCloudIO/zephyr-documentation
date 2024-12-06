const { commitConvention } = require("./commit-convention");

const types = commitConvention.map(({ type }) => type);

module.exports = {
	extends: "@commitlint/config-conventional",
	ignores: [(message) => message.includes("[skip ci]")],
	rules: {
		"type-case": [2, "always", ["lower-case", "sentence-case"]],
		"type-enum": [2, "always", types],
	},
};
