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

module.exports = { commitConvention };
