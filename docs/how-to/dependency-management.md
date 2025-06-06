# Dependency Management

A key initial design goal for Zephyr Cloud was to enable incremental adoption. Upon installing the Zephyr package, it operates in an "sample only" mode. This means it starts to analyze the dependencies of your federated applications without requiring changes to your CI/CD pipeline or extensive configuration efforts.

## How Dependency Resolution Works

When you build a micro-frontend application, one of the most complex challenges is ensuring that all remote dependencies are available at the correct versions. Zephyr's dependency resolution system solves this by providing a sophisticated resolution engine that works at build time to ensure your applications always load the right dependencies.

The resolution process follows a deterministic order, attempting multiple strategies until a valid dependency is found. This approach ensures that your applications can handle various deployment scenarios - from simple latest version deployments to complex multi-environment setups with feature branches.

## Zephyr Dependencies Configuration

Zephyr provides a dependency management system through the `zephyr:dependencies` field in your `package.json`. This allows you to specify remote module federation dependencies that your application needs.

### Basic Usage

Add a `zephyr:dependencies` field to your `package.json` to specify remote applications your module depends on (more examples provided below):

```json title="package.json"
{
  "name": "my-host-app",
  "version": "1.0.0",
  "zephyr:dependencies": {
    "remote-app": "zephyr:remote-app@latest",
    "another-remote": "zephyr:my-org-remote@stable",
    "versioned-remote": "zephyr:versioned-remote@v2.1"
  }
}
```

The `zephyr:dependencies` field currently serves to:

1. **Declare** which remote applications your module depends on
2. **Rename** local names (aliases) to remote applications
3. **Map** remote applications living in a separate repository or organization
4. **Enable** Zephyr to validate that dependencies exist
5. **Support** multiple version resolution strategies for different deployment scenarios

### Supported Declaration Formats

Zephyr's dependency resolution engine supports multiple version selector formats, each designed for specific use cases in your development and deployment workflows.

#### Standard Version Selectors

```json title="package.json"
{
  // ...
  "zephyr:dependencies": {
    "local-name": "zephyr:actual-app-uid@latest",
    "ui-components": "zephyr:design-system@stable",
    "shared-utils": "zephyr:utility-library@v2.1",
    "beta-feature": "zephyr:experimental-module@next"
  }
}
```

The format `zephyr:app-uid@version` allows you to:

- Use a different local name (`local-name`) than the actual remote app UID (`actual-app-uid`)
- Target specific version tags like `@latest`, `@stable`, `@next`, or custom tags
- Reference specific versions by tag name (e.g., `@v2.1`)

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

These selectors provide fine-grained control:

- `^1.2.3` - Compatible with version 1.2.3 (allows 1.x.x updates)
- `~2.0.0` - Approximately equivalent to 2.0.0 (allows 2.0.x updates)
- `1.5.0` - Exact version match only
- `>=1.0.0 <2.0.0` - Any version within the specified range

:::info Semver Resolution
Zephyr uses the official semver specification for version matching. When multiple versions match a range, the highest matching version is selected.
:::

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

This enables powerful workflows where feature branches automatically use matching versions of dependencies, eliminating the need for manual version updates during development.

### Example: Multi-Remote Setup

```json title="package.json"
{
  "name": "ecommerce-host",
  "version": "1.0.0",
  "zephyr:dependencies": {
    "product-catalog": "zephyr:product-catalog@latest",
    "shopping-cart": "zephyr:cart-service@stable",
    "user-profile": "zephyr:user-profile@latest",
    "payment-widget": "zephyr:payments-team-widget@latest"
  }
}
```

This configuration tells Zephyr:

- Include `product-catalog` remote (mapped to `product-catalog` app name)
- Include `shopping-cart` remote (mapped to `cart-service` app name)
- Include `user-profile` remote (mapped to `user-profile` app name)
- Include `payment-widget` remote (mapped to `payments-team-widget` app name)

### Building Across Different Repositories

If you have a poly-repo support (remotes live on different repositories than the remote), you will need to specify that in order for Zephyr to resolve to the right remotes. The reason behind it is because Zephyr application names are unique only in the same project. Different project might contain the same name so we need specification to resolve. The whole application UID will be needed this time.

```json title="package.json"
{
  "name": "ecommerce-host",
  "version": "1.0.0",
  "zephyr:dependencies": {
    "product-catalog": "zephyr:product-catalog.product-project.ecommerce-org@latest"
  }
}
```

## Build Context and Dynamic Resolution

One of Zephyr's most sophisticated features is its ability to understand and utilize build context for dependency resolution. This enables scenarios where the same codebase can automatically resolve to different dependency versions based on where and how it's being built.

### Understanding Build Context

Build context is a collection of metadata about your current build environment that Zephyr uses to make intelligent resolution decisions:

```typescript
interface BuildContext {
  target: string; // Platform target: 'web', 'node', 'react-native'
  isCI: boolean; // Whether building in CI/CD environment
  branch: string; // Current git branch name
  username: string; // Developer or CI username
}
```

This context is automatically captured by Zephyr plugins during the build process and can be used for advanced dependency resolution strategies.

### Platform-Specific Resolution

Zephyr supports building applications for multiple platforms, and dependencies can be resolved differently based on the target platform:

```json title="package.json"
{
  "zephyr:dependencies": {
    "ui-library": "zephyr:cross-platform-ui@latest",
    "native-module": "zephyr:mobile-components@^2.0.0"
  }
}
```

When building for different platforms:

- **Web builds** will receive web-optimized versions of dependencies
- **React Native builds** will receive mobile-specific implementations
- **Node.js builds** will receive server-compatible versions

If a platform-specific version isn't available, Zephyr automatically falls back to the 'web' platform version, ensuring your build never fails due to missing platform variants.

### Environment-Based Resolution

Dependencies can also be resolved based on deployment environments:

```json title="package.json"
{
  "zephyr:dependencies": {
    "analytics": "zephyr:analytics-service@production",
    "feature-flags": "zephyr:feature-service@staging"
  }
}
```

Zephyr will resolve these to the appropriate environment-specific versions, with automatic fallback to the default environment if the specified one doesn't exist.

## Resolution Order and Strategies

When Zephyr encounters a dependency declaration, it follows a deterministic resolution order to find the best matching version. Understanding this order helps you design your versioning strategy effectively.

### Resolution Priority

1. **Exact Version Match**: If the selector specifies an exact version (e.g., `1.2.3`), Zephyr looks for that specific version.

2. **Workspace Resolution**: For `workspace:*` selectors, Zephyr uses the build context to find matching versions based on branch, environment, and platform.

3. **Semver Range Resolution**: For semver selectors (e.g., `^1.0.0`), Zephyr finds all matching versions and selects the highest one.

4. **Label Resolution**: For labeled versions (e.g., `@latest`, `@stable`), Zephyr resolves to the version tagged with that label.

5. **Latest Version Fallback**: If no specific version is found, Zephyr falls back to the latest available version.

6. **Default Environment**: As a final fallback, Zephyr checks the default environment for the application.

:::danger Important
Every application must have a unique environment created in Zephyr Cloud. If no environment is specified, Zephyr will fail to resolve the dependency.
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

### Error Handling and Fallbacks

Zephyr's resolution system is designed to be resilient. If a dependency cannot be resolved:

1. It first attempts platform fallbacks (e.g., falling back to 'web' platform)
2. Then tries environment fallbacks (e.g., falling back to default environment)
3. Finally, provides detailed error messages to help diagnose the issue

```bash title="Resolution Error Example"
[Zephyr Error] Failed to resolve dependency 'zephyr:ui-components@^3.0.0':
- No versions found matching semver range '^3.0.0'
- Available versions: 2.5.0, 2.4.1, 2.3.0
- Suggestion: Update version constraint or publish a new version
```

## Dependency Graph

Zephyr necessitates that you build the most distant remote first to accurately construct the dependency graph. Failing to do so will result in the following error:

```bash title="Terminal"
[ConfigurationError: [zephyr]: Could not resolve remote entry points for urls:

        - remote1.zephyr-examples.zackarychapple
        - remote2.zephyr-examples.zackarychapple

        Please build them with Zephyr first or add as Unmanaged applications.

        Note: you can read application uid as follows:
                 - remote1 - project.json 'name' field of remote application
                 - zephyr-examples - git repository name
                 - zackarychapple - git organization name

        Or join and ask a question in our discord: https://zephyr-cloud.io/discord
      ]
```

## Best Practices

### Development Workflow with Workspace Resolution

The `workspace:*` selector is particularly powerful for feature branch development:

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

With this configuration:

- On `feature/new-checkout` branch, dependencies automatically resolve to matching feature branch versions
- In CI/CD pipelines, dependencies resolve to the appropriate environment versions
- Developers can work on multiple related services without manual version updates

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

### Platform-Specific Applications

When building cross-platform applications, leverage platform resolution:

```json title="Cross-platform package.json"
{
  "name": "mobile-commerce",
  "zephyr:dependencies": {
    // Platform-aware dependencies
    "navigation": "zephyr:router-lib@latest",
    "storage": "zephyr:data-layer@latest",

    // Platform-specific overrides handled automatically
    "ui-kit": "zephyr:universal-components@^4.0.0"
  }
}
```

### Debugging Resolution Issues

When troubleshooting dependency resolution:

1. **Check Available Versions**: Ensure the version you're requesting exists
2. **Verify Access Rights**: Confirm you have access to the application in Zephyr Cloud
3. **Review Build Context**: Use Zephyr's debug mode to see the captured build context
4. **Test Fallback Behavior**: Understand how your dependencies behave with fallbacks

```bash title="Debug mode example"
# Enable debug logging to see resolution decisions
DEBUG=zephyr* npm run build
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
