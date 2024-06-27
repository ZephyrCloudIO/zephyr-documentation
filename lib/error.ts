export const Errors = {
  // build specific errors
  build: [
    {
      code: "BU10010",
      name: "Package.json not found.",
    },

    {
      code: "BU10011",
      name: "Package.json is not in a valid json format.",
    },

    {
      code: "BU10013",
      name: "Package.json must have a name and version field.",
    },
    {
      code: "BU10014",
      name: "Git remote origin is not configured properly.",

    },
    {
      code: "BU10015",
      name: "Git username or email is not configured.",
    },
    {
      code: "BU10016",
      name: "Could not get git info.",
    },
    {
      code: "BU10017",
      name: "`application_uid` missing.",
    },
    {
      code: "BU10018",
      name: "Auth error.",
    },
    {
      code: "BU10019",
      name: "Could not get build id.",
    },
    {
      code: "BU10020",
      name: "Could not initialize Zephyr Agent.",
    },
    {
      code: "BU10021",
      name: "Failed to get application hash list.",
    },


  ],
  // deploy specific errors
  deploy: [
    {
      code: "DE20010",
      name: "Assets not found.",
    },
    {
      code: "DE20011",
      name: "Assets not found in snapshot",
    },
    {
      code: "DE20012",
      name: "application_uid is required.",
    },
    {
      code: "DE20013",
      name: "Missing file hash.",
    },
    {
      code: "DE20014",
      name: "Failed to load application configuration.",
    },
    {
      code: "DE20015",
      name: "Failed to upload build stats."
    },
    {
      code: "DE20016",
      name: "Did not receive envs from build stats upload."
    },
    {
      code: "DE20017",
      name: "Failed to upload assets."
    },
    {
      code: "DE20018",
      name: "Failed to upload snapshots."
    },

    {
      code: "DE20019",
      name: "Snapshot uploads gave no results."
    },
    {
      code: "DE20020",
      name: "Failed to get application hash list."
    },
    {
      code: "DE20021",
      name: "Could not resolve application name with version."
    },
    {
      code: "DE20022",
      name: "`snapshot_id` not found."
    }

  ]
}


export const DeployErrors = {

}
