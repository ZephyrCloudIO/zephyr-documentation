# Dependency Management (Beta)

:::danger
This feature is in beta and may change in future releases.
:::

A key initial design goal for Zephyr Cloud was to enable incremental adoption. Upon installing the Zephyr package, it operates in an "observe only" mode. This means it starts to build a graph of your federated applications without requiring changes to your CI/CD pipeline or extensive configuration efforts.

## Zephyr Dependencies Configuration

Zephyr provides a dependency management system through the `zephyr:dependencies` field in your `package.json`. This allows you to specify remote module federation dependencies that your application needs.

### Basic Usage

Add a `zephyr:dependencies` field to your `package.json` to specify remote applications your module depends on:

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

### Current Version Resolution Behavior

:::warning Current Limitation
**Zephyr currently always resolves dependencies to their latest available version**, regardless of the version specification you provide in `zephyr:dependencies`. Version-specific resolution (semantic versioning, tags, exact versions) is not yet implemented.
:::

The `zephyr:dependencies` field currently serves to:

1. **Declare** which remote applications your module depends on
2. **Map** local names to remote application UIDs
3. **Enable** Zephyr to validate that dependencies exist

### Supported Declaration Formats

While version resolution always returns the latest version, you can declare dependencies in these formats:

#### Zephyr Remote with App UID

```json
{
  "zephyr:dependencies": {
    "local-name": "zephyr:actual-app-uid@latest",
    "ui-components": "zephyr:design-system@stable",
    "shared-utils": "zephyr:utility-library@v2.1"
  }
}
```

The format `zephyr:app-uid@version` allows you to:

- Use a different local name (`local-name`) than the actual remote app UID (`actual-app-uid`)
- Document intended version requirements (though currently not enforced)

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

- Include `product-catalog` remote (mapped to `product-catalog` app UID)
- Include `shopping-cart` remote (mapped to `cart-service` app UID)
- Include `user-profile` remote (mapped to `user-profile` app UID)
- Include `payment-widget` remote (mapped to `payments-team-widget` app UID)

**Note**: All will resolve to their respective latest versions.

### Build-Time Behavior

During the build process, Zephyr:

1. **Parses** your `zephyr:dependencies` configuration
2. **Resolves** each dependency to the latest available version and URL
3. **Injects** the resolved dependencies into your module federation configuration
4. **Validates** that all dependencies are available and accessible

### Default Behavior

If you don't specify `zephyr:dependencies`, Zephyr will:

- Attempt to resolve any module federation remotes detected in your configuration
- Use the latest available versions of detected dependencies
- Issue warnings about unresolved dependencies during build

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

### Best Practices

1. **Document Intent**: Use version tags to document your intended version requirements, even though they don't affect resolution yet
2. **Consistent Declaration Format**: Use the `zephyr:app-uid@version` format consistently across your organization
3. **Monitor Dependencies**: Since all dependencies resolve to latest, monitor your remote applications for breaking changes
4. **Test Frequently**: With automatic latest version resolution, ensure your integration tests run frequently
5. **Dependency Comments**: Add comments in your package.json explaining critical dependencies
