# Mental Model

The simplest way to think of Zephyr Cloud is like [Kubernetes](https://kubernetes.io/) for the frontend. While this is not
a perfect analogy it is close.

## Instant gratification
Many organizations use tools to expedite the ability to share the local development environment
with other team members. Some of these tools include [ngrok](https://ngrok.com/) and [zrok](https://zrok.io/). 
These applications work by creating opening a tunnel from the developers machine to the consumer.

Zephyr on the other hand publishes a snapshot on every save to the cloud provider. This gives consumer the ability to
continue to see the code after the developer shuts down their local development environment. Additionally, with Zephyr
snapshots it is now possible to see how software evolves with each iteration. 

## Incremental Snapshots
