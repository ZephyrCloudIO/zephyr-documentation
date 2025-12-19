/**
 * Categories for all error codes.
 */
export const Categories = {
  unknown: '00',
  build: '10',
  deploy: '20',
  browser: '30',
  config: '40',
} as const satisfies {
  [name: string]: `${Digit}${Digit}`;
};

/**
 * A collection of error types and the error code during local/build stage
 * @description if you are searching for an error globally, if it is a build related error, it starts with `ZE10`, if it's a deployment related error, search for `ZE20` and then followed with their ID.
 * - `ZE` at the front is a constant
 * - two digits at the middle PP (`10` for build error or `20` for deployment error) is their categories,
 * - last three digits is their ID.
 *
 * For example, if you have a `SNAPSHOT_NOT_FOUND` error, search for `ZE20023`, if you see an error showing up on terminal or application, the last three numbers are their IDs.
 * We might extend to have more errors in the future. */
export const Errors = {
  ERR_UNKNOWN: {
    id: '000',
    message:
      'Unknown error. Tell us about it in Discord https://discord.gg/zephyrcloud if you see this error',
    kind: 'unknown',
  },
  /** package.json not found error */
  ERR_PACKAGE_JSON_NOT_FOUND: {
    id: '010',
    message: 'Package.json not found',
    kind: 'build',
  },
  /** Package.json is not in a valid json format*/
  ERR_PACKAGE_JSON_NOT_VALID: {
    id: '011',
    message: 'Package.json is not in a valid json format.',
    kind: 'build',
  },
  /** Package.json must have a name and version field. */
  ERR_PACKAGE_JSON_MUST_HAVE_NAME_VERSION: {
    id: '013',
    message: 'Package.json must have a name and version field.',
    kind: 'build',
  },
  /** Git remote origin is not configured properly.*/
  ERR_GIT_REMOTE_ORIGIN: {
    id: '014',
    message: 'Git remote origin is not configured properly.',
    kind: 'build',
  },
  /** Git username or email is not configured. */
  ERR_NO_GIT_USERNAME_EMAIL: {
    id: '015',
    message: 'Git username or email is not configured.',
    kind: 'build',
  },
  /** Could not get git info */
  ERR_NO_GIT_INFO: {
    id: '016',
    message: 'Could not get git info.',
    kind: 'build',
  },
  /** Build error application_uid missing. */
  ERR_MISSING_APPLICATION_UID: {
    id: '017',
    message: '`application_uid` missing.',
    kind: 'build',
  },
  /** Auth error */
  ERR_AUTH_ERROR: {
    id: '018',
    message: 'Auth error.',
    kind: 'build',
  },
  /** Could not get build id. */
  ERR_GET_BUILD_ID: {
    id: '019',
    message: 'Could not get build id.',
    kind: 'build',
  },
  /** Deployment error, assets not found */
  ERR_ASSETS_NOT_FOUND: {
    id: '010',
    message: 'Assets not found.',
    kind: 'deploy',
  },
  /** assets not found in snapshot */
  ERR_ASSETS_NOT_FOUND_IN_SNAPSHOT: {
    id: '011',
    message: 'Assets not found in snapshot.',
    kind: 'deploy',
  },
  /** application_uid missing */
  ERR_DEPLOY_MISSING_APPLICATION_UID: {
    id: '012',
    message: '`application_uid` is required.',
    kind: 'deploy',
  },
  ERR_MISSING_FILE_HASH: {
    id: '013',
    message: 'Missing file hash.',
    kind: 'deploy',
  },
  /** Failed to load application configuration. */
  ERR_LOAD_APP_CONFIG: {
    id: '014',
    message: 'Failed to load application configuration.',
    kind: 'deploy',
  },
  /** Failed to upload assets. */
  ERR_FAILED_UPLOAD_ASSETS: {
    id: '017',
    message: 'Failed to upload assets.',
    kind: 'deploy',
  },
  /** Snapshot uploads gave no results. */
  ERR_SNAPSHOT_UPLOADS_NO_RESULTS: {
    id: '019',
    message: 'Snapshot uploads gave no results.',
    kind: 'deploy',
  },
  /**Failed to get application hash list */
  ERR_GET_APPLICATION_HASH_LIST: {
    id: '020',
    message: 'Failed to get application hash list.',
    kind: 'deploy',
  },
  ERR_SNAPSHOT_ID_NOT_FOUND: {
    id: '022',
    message: '`snapshot_id` not found.',
    kind: 'deploy',
  },
  ERR_SNAPSHOT_NOT_FOUND: {
    id: '023',
    message: 'Snapshot not found.',
    kind: 'deploy',
  },
  ERR_DEPLOY_LOCAL_BUILD: {
    id: '024',
    message: 'Failed to deploy local build.',
    kind: 'deploy',
  },
  ERR_CONVERT_GRAPH_TO_DASHBOARD: {
    id: '026',
    message: 'Failed to convert graph to dashboard data.',
    kind: 'browser',
  },
  /** Auth forbidden error */
  ERR_AUTH_FORBIDDEN_ERROR: {
    id: '022',
    message: 'Auth forbidden error.',
    kind: 'build',
  },
  /** Invalid Module Federation config */
  ERR_INVALID_MF_CONFIG: {
    id: '023',
    message: 'Invalid Module Federation config.',
    kind: 'build',
  },
  /** Invalid app ID */
  ERR_INVALID_APP_ID: {
    id: '024',
    message: 'Invalid app ID.',
    kind: 'build',
  },
  /** JWT invalid */
  ERR_JWT_INVALID: {
    id: '032',
    message: 'JWT invalid.',
    kind: 'build',
  },
  /** Max payload size exceeded */
  ERR_MAX_PAYLOAD_SIZE_EXCEEDED: {
    id: '037',
    message: 'Max payload size exceeded.',
    kind: 'deploy',
  },
  /** Resolve remotes error */
  ERR_RESOLVE_REMOTES: {
    id: '001',
    message: 'Resolve remotes error.',
    kind: 'config',
  },
  /** Cannot resolve app name with version */
  ERR_CANNOT_RESOLVE_APP_NAME_WITH_VERSION: {
    id: '003',
    message: 'Cannot resolve app name with version.',
    kind: 'config',
  },
  /** MF config missing filename */
  ERR_MF_CONFIG_MISSING_FILENAME: {
    id: '005',
    message: 'MF config missing filename.',
    kind: 'config',
  },
  /** Missing platform */
  ERR_MISSING_PLATFORM: {
    id: '006',
    message: 'Missing platform.',
    kind: 'config',
  },
  /** HTTP error */
  ERR_HTTP_ERROR: {
    id: '035',
    message: 'HTTP error.',
    kind: 'config',
  },
} as const satisfies {
  [name: string]: {
    id: `${Digit}${Digit}${Digit}`;
    message: string;
    kind: keyof typeof Categories;
  };
};

export type ZeErrors = {
  [K in keyof Errors]: ZeError<Categories[Errors[K]['kind']], Errors[K]['id']>;
}[keyof Errors];

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Errors = typeof Errors;
type Categories = typeof Categories;
type ZeError<
  Category extends string,
  Code extends string,
> = `ZE${Category}${Code}`;
