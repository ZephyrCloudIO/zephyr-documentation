# Build with Zephyr
One of the initial design goals of Zephyr Cloud was to make it possible to incrementally adopt. When you first install the
Zephyr package it will operate in an "observe" only mode. Without changing your CI/CD pipeline or extensive configuration
Zephyr will begin to build the graph of your federated applications. 

:::tip
When first getting started Zephyr Cloud is a side effect of your build.
:::

## Dependency Graph
Zephyr requires that you build the furthest remote first in order to properly build the graph.
If you don't you will see the following error. 
```bash filename="Terminal"
[ConfigurationError: [zephyr]: Could not resolve remote entry points for urls:

        - remote1.zephyr-examples.zackarychapple
        - remote2.zephyr-examples.zackarychapple


        Please build them with Zephyr first or add as Unmanaged applications.

        Note: you can read application uid as follows:
                 - remote1 - project.json 'name' field of remote application
                 - zephyr-examples - git repository name
                 - zackarychapple - git organization name

        Or join and ask question in our discord: https://discord.gg/EqFbSSt8Hx
      ]
```
