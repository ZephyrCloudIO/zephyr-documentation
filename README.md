# Zephyr Cloud Docs

Welcome to the Zephyr Cloud documentation repository.

[![Netlify Status](https://api.netlify.com/api/v1/badges/a6a769b6-39a8-4a3b-84f4-d4b970f68c1f/deploy-status)](https://app.netlify.com/sites/zephyr-cloud-docs/deploys)

## Building docs

Built using [Rspress](https://rspress.dev/).
Run:

```bash
pnpm install
pnpm build
```

## Commit guidelines

We follow conventional commits [guidelines](https://www.conventionalcommits.org/en/v1.0.0/).

Default message structure is as follows:
```markdown
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Additional format description:
```markdown
1) fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
2) feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
3) BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
4) types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
5) footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.
```

## Contributors
![Alt](https://repobeats.axiom.co/api/embed/fd0de09aa25d444bf55d21d43902d7c71f4e69d2.svg "Repobeats analytics image")
