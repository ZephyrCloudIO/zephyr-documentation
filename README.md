# Zephyr Cloud Docs

Welcome to the Zephyr Cloud documentation repository.

## Building docs

Built using [Rspress](https://rspress.dev/).
Run:

```bash
pnpm install
pnpm build
```

## Analytics

Client analytics currently run on both PostHog and Google Analytics.

- `PUBLIC_POSTHOG_KEY` (required to enable tracking)
- `PUBLIC_POSTHOG_HOST` (optional, defaults to `https://us.i.posthog.com`)

## Sitemap Note

Because sitemap is not visible to the bundler (for now). We need to manually update
the site map file in the root of the repo when adding pages.

## Contributors

![Alt](https://repobeats.axiom.co/api/embed/fd0de09aa25d444bf55d21d43902d7c71f4e69d2.svg 'Repobeats analytics image')
