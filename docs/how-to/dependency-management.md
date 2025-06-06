# Dependency Management

Zephyr implements a comprehensive dependency resolution system that enables micro-frontend applications to dynamically resolve and load their dependencies at build time, eliminating the need for hardcoded remote URLs and manual version coordination between teams.

The dependency management system operates through a combination of build-time analysis and intelligent resolution strategies. During the build process, Zephyr plugins capture contextual information about the build environment and use this data to resolve abstract dependency declarations into concrete URLs and versions.

## Dependency Resolution Architecture

The resolution engine implements a multi-strategy approach to dependency resolution, attempting different resolution methods in a deterministic order until a valid dependency is found. Applications can adapt to various deployment scenarios without configuration changes.

Each resolution strategy is designed for specific use cases:

- **Workspace resolution** enables automatic version matching based on build context
- **Semantic versioning** provides fine-grained control over acceptable version ranges
- **Label-based resolution** allows targeting specific deployment stages
- **Platform-specific resolution** ensures correct implementations for different runtime environments

The system maintains backward compatibility while enabling advanced workflows that were previously difficult to implement in distributed architectures.

## Understanding Application UIDs

Before working with dependencies, it's essential to understand how Zephyr identifies applications. Every application has a unique Application UID following this structure:

```
{application}.{project}.{organization}
```

Where:

- **application**: The `name` field from the remote application's `package.json`
- **project**: The git repository name
- **organization**: The GitHub/GitLab organization or username

For example, if you have:

- `package.json` name: `"ui-components"`
- Repository: `design-system`
- Git organization: `my-company`

The Application UID would be: `ui-components.design-system.my-company`

## Zephyr Dependencies Configuration

Zephyr provides a dependency management system through the `zephyr:dependencies` field in your `package.json` to specify remote module federation dependencies that your application needs.

### Basic Usage

Add a `zephyr:dependencies` field to your `package.json` to specify remote applications your module depends on:

```json title="package.json"
{
  "name": "my-host-app",
  "version": "1.0.0",
  "zephyr:dependencies": {
    "header": "ui-library@latest",
    "shoppingCart": "cart-service@stable",
    "analytics": "zephyr:analytics-module@v2.1"
  }
}
```

You will see more examples [later in this guide](#standard-version-selectors)

### Understanding Dependency Mapping

In the `zephyr:dependencies` configuration, there are three key concepts:

1. **Local Name** (left side): The name you'll use in your code to import the remote module (e.g., `header`, `shoppingCart`)
2. **Application UID** (right side, before @): The remote application's identifier (e.g., if they are in the same repository as host app, use `ui-library`, if they are in different repositories, use `cart-service.repo-name.org-name`)
3. **Version Selector** (right side, after @): The version constraint (e.g., `latest`, `stable`, `v2.1`)

The mapping works as follows:

```json
{
  "zephyr:dependencies": {
    "local-name": "application-uid@version"
    // Your code imports as 'local-name'
    // Resolves to application with UID 'application-uid'
  }
}
```

:::info Registry Prefix
The `zephyr:` prefix is optional. Both `"ui-library@latest"` and `"zephyr:ui-library@latest"` work identically, as `zephyr` is the default registry. While the prefix is currently optional, we recommend including it for future compatibility when Zephyr supports multiple registries (e.g., `npm:`, `github:`, or custom enterprise registries).
:::

The `zephyr:dependencies` field serves to:

1. **Declare** which remote applications your module depends on
2. **Create local aliases** for remote applications, mapping the local name in your module federation configuration to the remote application name.
3. **Map** remote applications from different repositories or organizations
4. **Enable** Zephyr to validate that dependencies exist and are accessible
5. **Support** multiple version resolution strategies for different deployment scenarios

### Supported Declaration Formats

Zephyr's dependency resolution engine supports multiple version selector formats, each designed for specific use cases in your development and deployment workflows.

#### Standard Version Selectors

```json title="package.json"
{
  "zephyr:dependencies": {
    // Local alias -> Remote application @ version tag
    "header": "header-component@latest",
    "uiKit": "design-system@stable",
    "utils": "shared-utilities@v2.1",
    "experimental": "beta-features@next"
  }
}
```

Version tags allow you to:

- Target lifecycle stages: `@latest`, `@stable`, `@next`
- Reference specific releases: `@v2.1`, `@release-3.0`
- Use custom environment tags: `@production`, `@staging`

#### Semantic Version Ranges

For more precise version control, Zephyr supports the full semver specification:

```json title="package.json"
{
  "zephyr:dependencies": {
    "compatible-updates": "zephyr:shared-lib@^1.2.3",
    "patch-only": "zephyr:critical-service@~2.0.0",
    "exact-version": "zephyr:legacy-module@1.5.0",
    "range-constraint": "zephyr:api-client@>=1.0.0 <2.0.0"
  }
}
```

The selectors provide fine-grained control:

- `^1.2.3` - Compatible with version 1.2.3 (allows 1.x.x updates)
- `~2.0.0` - Approximately equivalent to 2.0.0 (allows 2.0.x updates)
- `1.5.0` - Exact version match only
- `>=1.0.0 <2.0.0` - Any version within the specified range

:::info Semver Resolution
Zephyr uses the [official semver specification](https://semver.org/) for version matching. When multiple versions match a range, the highest matching version is selected.
:::

#### Wildcard Version

The wildcard `"*"` selector matches any available version of a dependency, similar to `workspace:*` but with different resolution behavior:

```json title="package.json"
{
  "zephyr:dependencies": {
    "header": "header-component@*",
    "footer": "footer-module@*"
  }
}
```

The `"*"` wildcard:

- Matches any published version of the dependency
- Uses the same workspace resolution logic as `workspace:*` when in development
- Falls back to the latest available version if no workspace match is found
- Provides a simpler syntax for cases where any version is acceptable

#### Workspace Resolution

The most powerful feature of Zephyr's dependency system is workspace resolution - the ability to automatically resolve dependencies based on your current build context:

```json title="package.json"
{
  "zephyr:dependencies": {
    "header": "workspace:*",
    "footer": "workspace:*",
    "shared-components": "workspace:*"
  }
}
```

When you use `workspace:*`, Zephyr intelligently resolves dependencies based on:

- Your current git branch
- The CI/CD environment
- The build target platform
- The developer's local environment

Feature branches automatically use matching versions of dependencies, eliminating the need for manual version updates during development.

### Example: Multi-Remote Setup

```json title="package.json"
{
  "name": "ecommerce-host",
  "version": "1.0.0",
  "zephyr:dependencies": {
    // Local name     -> Remote application UID @ version
    "catalog": "product-catalog@latest",
    "cart": "cart-service@stable",
    "userProfile": "user-profile@latest",
    "paymentWidget": "payments-widget@latest"
  }
}
```

In your code, you would import these as:

```javascript
// The local names are what you use in your imports
import Catalog from "catalog/ProductList";
import Cart from "cart/ShoppingCart";
import UserProfile from "userProfile/Profile";
import PaymentWidget from "paymentWidget/Checkout";
```

### Cross-Repository Dependencies

When depending on applications from different repositories or organizations, use the full Application UID format to avoid ambiguity:

```json title="package.json"
{
  "name": "ecommerce-host",
  "version": "1.0.0",
  "zephyr:dependencies": {
    // Short form (works within same project/org)
    "header": "header-component@latest",

    // Full UID form (required for cross-repo/org dependencies)
    "catalog": "product-catalog.shop-repo.acme-corp@latest"
    //          └─ app name ──┘└─ repo ─┘└─ org ─┘
  }
}
```

Use the full UID format when:

- The remote application is in a different repository
- The remote application is in a different organization
- You need to disambiguate between applications with the same name

## Build Context and Dynamic Resolution

The dependency resolution system leverages build context to enable dynamic version selection based on environmental factors. A single codebase can resolve to different dependency versions depending on the build environment, target platform, and deployment context.

### Build Context Architecture

The build context represents a structured collection of environmental metadata that the resolution engine uses to make deterministic version selections:

```typescript
interface BuildContext {
  target: string; // Platform target: 'web', 'node', 'ios', 'android` etc
  isCI: boolean; // Whether building in CI/CD environment
  branch: string; // Current git branch name
  username: string; // Developer or CI username
}
```

The Zephyr plugins automatically capture this context during the build initialization phase. The resolution engine then uses these values to select appropriate dependency versions through pattern matching and fallback chains.

### Platform-Specific Resolution

The resolution engine implements platform-aware dependency selection, allowing applications to receive platform-optimized implementations of their dependencies:

```json title="package.json"
{
  "zephyr:dependencies": {
    "ui-library": "zephyr:cross-platform-ui@latest",
    "native-module": "zephyr:mobile-components@^2.0.0"
  }
}
```

The platform resolution follows a hierarchical approach:

- **Web platform**: Default target, optimized for browser environments
- **React Native platform**: Mobile-specific implementations with native module support
- **Node.js platform**: Server-side implementations without browser dependencies

The resolution engine implements automatic fallback to the 'web' platform when platform-specific versions are unavailable, ensuring build reliability while maintaining platform optimization when available.

### Environment-Based Resolution

Dependencies can also be resolved based on deployment environments and tags:

```json title="package.json"
{
  "zephyr:dependencies": {
    "analytics": "zephyr:analytics-service@production", // first zephyr will try to find if there is an environment called `production`, and if not, zephyr will find if there is a tag called `production`
    "feature-flags": "zephyr:feature-service@staging"
  }
}
```

Zephyr will resolve these to the appropriate environment-specific versions, with automatic fallback to the default environment if the specified one doesn't exist.

## Resolution Order and Strategies

The resolution engine processes dependency declarations through a deterministic pipeline of resolution strategies. Each strategy is attempted in order until a valid resolution is found or all strategies are exhausted.

### Resolution Pipeline

1. **Exact Version Match**: If the selector specifies an exact version (e.g., `1.2.3`), Zephyr looks for that specific version.

2. **Workspace Resolution**: For `workspace:*` selectors, Zephyr uses the build context to find matching versions based on branch, environment, and platform.

3. **Semver Range Resolution**: For semver selectors (e.g., `^1.0.0`), Zephyr finds all matching versions and selects the highest one.

4. **Label Resolution**: For labeled versions (e.g., `@latest`, `@stable`), Zephyr resolves to the version tagged with that label.

5. **Latest Version Fallback**: If no specific version is found, Zephyr falls back to the latest available version.

6. **Default Environment**: As a final fallback, Zephyr checks the default environment for the application.

:::warning Environment Requirement
Applications must have at least one environment created in Zephyr Cloud to be resolvable as dependencies. Without an environment, resolution will fail. Create environments through the Zephyr dashboard after building your application.
:::

### Build-Time Behavior

During the build process, Zephyr:

1. **Captures** the current build context automatically
2. **Parses** your `zephyr:dependencies` configuration
3. **Resolves** each dependency using the resolution strategies above
4. **Validates** that all resolved dependencies are accessible
5. **Injects** the resolved URLs into your module federation configuration
6. **Generates** a dependency manifest for runtime verification

:::info Resolution Caching
Resolved dependencies are cached during the build process to ensure consistency. If the same dependency is referenced multiple times, it will resolve to the same version throughout the build.
:::

### Error Handling and Fallback Chain

The resolution engine implements a multi-level fallback system to maximize resolution success rates:

1. **Platform fallback**: When platform-specific resolution fails, automatically attempts with 'web' platform
2. **Environment fallback**: Falls back to the application's default environment when other strategies fail
3. **Structured error codes**: Returns specific error codes to help diagnose resolution failures

## Dependency Graph

Zephyr requires building applications in dependency order - the most distant remotes must be built first to accurately construct the dependency graph. When a dependency cannot be resolved, you'll see detailed error messages:

```bash filename="Terminal"
Failed to resolve remote dependency: ui-components.design-system.my-org version ^3.0.0

This could be due to one of the following reasons:
- The remote application 'ui-components' has not been built with Zephyr yet
- The specified version '^3.0.0' does not exist
- You don't have access to this application
- The application exists but no environment has been created

Steps to resolve:
1. Ensure the remote application is built with Zephyr first
2. For newly created applications, create an environment in the dashboard
3. Check that the version exists by visiting the dashboard
4. Verify you have access to my-org/design-system/ui-components
```

For applications using multiple remotes, unresolved dependencies will be listed together, helping you identify which applications need to be built first.

## Best Practices

The following patterns and strategies optimize dependency resolution for different deployment scenarios and team workflows.

### Development Workflow with Workspace Resolution

The `workspace:*` selector enables automatic local version coordination across branches:

```json title="Feature branch package.json"
{
  "name": "checkout-flow",
  "zephyr:dependencies": {
    "cart": "workspace:*",
    "payment": "workspace:*",
    "user-profile": "workspace:*"
  }
}
```

The configuration enables:

- Feature branches resolve to matching feature branch versions of dependencies
- CI/CD environments receive environment-appropriate versions
- Local development automatically uses developer-specific builds

### Version Strategy for Production

For production deployments, combine different selectors for optimal stability:

```json title="Production package.json"
{
  "zephyr:dependencies": {
    // Critical dependencies: exact versions
    "payment-processor": "zephyr:payment-service@2.1.0",

    // Stable dependencies: compatible updates
    "ui-components": "zephyr:design-system@^3.2.0",

    // Internal services: environment-based
    "analytics": "zephyr:analytics@production",

    // Feature toggles: label-based
    "experiments": "zephyr:ab-testing@stable"
  }
}
```

### Debugging Resolution Issues

The resolution system provides several mechanisms for troubleshooting dependency resolution failures:

1. **Version availability verification**: Query the available versions for the target application
2. **Access control validation**: Verify organization and project access permissions
3. **Build context inspection**: Enable debug logging to examine captured context values
4. **Fallback chain analysis**: Trace the resolution attempts through each fallback level

```bash filename="Terminal"
# View detailed remote resolution logs
DEBUG=zephyr:remotes npm run build
```

### Migration Strategies

When migrating existing applications to use advanced selectors:

1. **Start with explicit versions** to establish a baseline
2. **Gradually introduce semver ranges** for stable dependencies
3. **Adopt workspace resolution** for active development
4. **Use environment labels** for deployment-specific versions

:::tip Progressive Adoption
You don't need to use all features at once. Start with basic version tags and gradually adopt more sophisticated selectors as your needs grow.
:::

### Common Patterns

**Monorepo Development**:

```json
{
  "zephyr:dependencies": {
    "shared-ui": "workspace:*",
    "shared-utils": "workspace:*",
    "shared-types": "workspace:*"
  }
}
```

**Gradual Rollout**:

```json
{
  "zephyr:dependencies": {
    "legacy-module": "zephyr:old-service@~1.0.0",
    "new-module": "zephyr:new-service@next",
    "stable-module": "zephyr:core-service@stable"
  }
}
```
