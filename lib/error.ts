export const Errors = {
    // build specific errors
    build: [
        {
            code: "ZE10010",
            name: "Package.json not found.",
            link: "/guide/error/ze10010"
        },

        {
            code: "ZE10020",
            name: "Package.json in current directory is not a valid json",
            link: "/guide/error/ze10020"
        },
        {
            code: "ZE10030",
            name: "Package.json doesn't have a name or version field.",
            link: "/guide/error/ze10030"
        },
        {
            code: "ZE10110",
            name: "Git remote origin is not configured properly.",
            link: "/guide/error/ze10110"

        },
        {
            code: "ZE10120",
            name: "Error getting git credentials.",
            link: "/guide/error/ze10120"
        }

    ],
    // deploy specific errors
    deploy: [
        {
            code: "ZE10040",
            name: "Assets not found.",
            link: "/guide/error/ze10040"
        },
        {
            code: "ZE10041",
            name: "Assets not found in snapshot",
            link: "/guide/error/ze10041"
        },
        {
            code: "ZE10042",
            name: "application_uid is required.",
            link: "/guide/error/ze10042"
        },
        {
            code: "ZE10043",
            name: "snapshot_id not found.",
            link: "/guide/error/ze10043"
        },
        {
            code: "ZE10044",
            name: "Missing file hash",
            link: "/guide/error/ze10044"
        }

    ]
}


export const DeployErrors = {

}