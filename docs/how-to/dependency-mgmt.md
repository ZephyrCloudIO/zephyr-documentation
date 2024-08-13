# Build

A key initial design goal for Zephyr Cloud was to enable incremental adoption. Upon installing the Zephyr package, it operates in an "observe only" mode. This means it starts to build a graph of your federated applications without requiring changes to your CI/CD pipeline or extensive configuration efforts.

:::tip
Initially, Zephyr Cloud acts as a side effect of your build process.
:::

## Dependency Graph

Zephyr necessitates that you build the most distant remote first to accurately construct the dependency graph. Failing to do so will result in the following error:

```bash filename="Terminal"
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


