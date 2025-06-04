# Dependency Management

A key initial design goal for Zephyr Cloud was to enable incremental adoption. Upon installing the Zephyr package, it operates in an "sample only" mode. This means it starts to analyze the dependencies of your federated applications without requiring changes to your CI/CD pipeline or extensive configuration efforts.

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

### Supported Declaration Formats

You can declare dependencies in these formats:

#### Zephyr Remote with App Name

```json title="package.json"
{
  // ...
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
    "product-catalog": "zephyr:product-catalog.product-project.ecommerce-org@latest",
  }
}
```

### Build-Time Behavior

During the build process, Zephyr:

1. **Parses** your `zephyr:dependencies` configuration
2. **Resolves** each dependency to the latest available version and URL
3. **Injects** the resolved dependencies into your module federation configuration
4. **Validates** that all dependencies are available and accessible

:::info Note
If you don't specify `zephyr:dependencies`, Zephyr will not be able to resolve your remotes properly.
:::

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
