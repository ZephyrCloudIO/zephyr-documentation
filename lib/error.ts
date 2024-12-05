export const Errors = {
	// Build specific errors
	build: [
		{
			code: "ZE10010",
			name: "Package.json not found.",
		},

		{
			code: "ZE10011",
			name: "Package.json is not in a valid json format.",
		},

		{
			code: "ZE10013",
			name: "Package.json must have a name and version field.",
		},
		{
			code: "ZE10014",
			name: "Git remote origin is not configured properly.",
		},
		{
			code: "ZE10015",
			name: "Git username or email is not configured.",
		},
		{
			code: "ZE10016",
			name: "Could not get git info.",
		},
		{
			code: "ZE10017",
			name: "`application_uid` missing.",
		},
		{
			code: "ZE10018",
			name: "Auth error.",
		},
		{
			code: "ZE10019",
			name: "Could not get build id.",
		},
		{
			code: "ZE10020",
			name: "Could not initialize Zephyr Agent.",
		},
	],
	// Deploy specific errors
	deploy: [
		{
			code: "ZE20010",
			name: "Assets not found.",
		},
		{
			code: "ZE20011",
			name: "Assets not found in snapshot",
		},
		{
			code: "ZE20012",
			name: "application_uid is required.",
		},
		{
			code: "ZE20013",
			name: "Missing file hash.",
		},
		{
			code: "ZE20014",
			name: "Failed to load application configuration.",
		},
		{
			code: "ZE20015",
			name: "Failed to upload build stats.",
		},
		{
			code: "ZE20016",
			name: "Did not receive envs from build stats upload.",
		},
		{
			code: "ZE20017",
			name: "Failed to upload assets.",
		},
		{
			code: "ZE20018",
			name: "Failed to upload snapshots.",
		},

		{
			code: "ZE20019",
			name: "Snapshot uploads gave no results.",
		},
		{
			code: "ZE20020",
			name: "Failed to get application hash list.",
		},
		{
			code: "ZE20021",
			name: "Could not resolve application name with version.",
		},
		{
			code: "ZE20022",
			name: "`snapshot_id` not found.",
		},
		{
			code: "ZE20023",
			name: "Snapshot not found.",
		},
		{
			code: "ZE20024",
			name: "Failed to deploy local build.",
		},
	],
};
