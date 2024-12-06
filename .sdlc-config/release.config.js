const commitConvention = [
	{ type: "build", release: "patch", section: "Internal changes" },
	{ type: "chore", release: false, section: "Non functional changes" },
	{ type: "ci", release: false, section: "Other changes" },
	{ type: "docs", release: false, section: "Other changes" },
	{ type: "feat", release: "minor", section: "Features" },
	{ type: "fix", release: "patch", section: "Bug fixes" },
	{ type: "perf", release: "patch", section: "Internal changes" },
	{ type: "refactor", release: "patch", section: "Internal changes" },
	{ type: "revert", release: "patch", section: "Revert" },
	{ type: "style", release: false, section: "Other changes" },
	{ type: "test", release: false, section: "Other changes" },
];

const releaseRules = commitConvention.flatMap(({ type, release }) => [
	{ type, release },
	{ type: type.toLowerCase(), release },
]);
const types = commitConvention.map(({ type, section }) => ({
	type: type.toLowerCase(),
	section,
	hidden: false,
}));

module.exports = {
	branches: [
		{ name: "development", prerelease: "next" },
		{ name: "*", prerelease: "preview" },
	],
	plugins: [
		[
			"@semantic-release/commit-analyzer",
			{ preset: "conventionalcommits", releaseRules },
		],
		[
			"@semantic-release/release-notes-generator",
			{ preset: "conventionalcommits", presetConfig: { types } },
		],
		["@semantic-release/changelog"],
		["@semantic-release/npm", { npmPublish: false }],
		"@semantic-release/git",
		"@semantic-release/github",
	],
};
