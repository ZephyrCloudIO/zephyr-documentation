# Versioning 

Zephyr utilizes familiar versioning concepts by adopting [SemVer](https://semver.org/) (Semantic Versioning) as its foundational versioning methodology, ensuring a systematic and meaningful progression of project versions.

## Semantic Versioning Overview

Semantic versioning is structured as `MAJOR.MINOR.PATCH`:
- **MAJOR:** Introduces breaking changes.
- **MINOR:** Adds new, backward-compatible features.
- **PATCH:** Makes backward-compatible bug fixes.

## Advantages of Semantic Versioning with Tags

1. **Clarity and Communication:** Provides explicit guidelines on version progression, facilitating clear communication across the development team and stakeholders.
2. **Backward Compatibility:** Aids in maintaining compatibility and understanding the implications of new updates.
3. **Issue Tracking:** Simplifies the process of tracking bugs and changes back to specific releases.
4. **Dependency Management:** Crucial for effectively managing dependencies, particularly in complex projects.

## Application Name and Version Calculation in Zephyr

- **Application Name:** Derived from the `name` field in `package.json`.
- **Versions:** Extracted from the `version` field in `package.json`, and further contextualized with the current `branch name` and a formatted `username` to trace development history accurately.

## Zephyr Tag Management

To streamline the tagging process and ensure seamless integration with continuous integration and delivery (CI/CD) pipelines, Zephyr adopts specific rules for generating tags based on branch names during CI processes. This approach not only automates tag creation but also aligns with the development workflow to accurately reflect the state of the software at any given point.

### Tagging Strategy in CI

When code is pushed through a CI pipeline, tags are dynamically assigned based on the branch from which the push originates:

- **`master` or `main` branches:** Automatically tagged as `latest`. This tag is used for the most stable, production-ready version of the application.
- **`development` branch:** Assigned the `next` tag. This is used for pre-release versions that may still be under active development but are stable enough for testing purposes.
- **Other branches:** Receive a tag that matches the branch name. This allows for unique identification of builds coming from feature branches or other non-standard development paths.

### Non-CI Tagging Considerations

For manual pushes (i.e., those not done through a CI pipeline), the tagging format incorporates the branch name followed by the username of the developer who made the push. This format is particularly useful for:

- **Traceability:** Allows teams to easily trace back versions to specific developers, enhancing accountability and understanding of changes made.
- **Collaborative Development:** Supports collaborative environments where multiple developers may be working on different aspects of the project simultaneously.

These tagging strategies ensure that every build on Zephyr can be uniquely identified and correlated with its source, enhancing both the development process and version control.