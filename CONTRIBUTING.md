# Contributing to Portfoliem UI

- [Contributing to Portfoliem UI](#contributing-to-portfoliem-ui)
  - [Issues](#issues)
  - [Pull Requests (PRs)](#pull-requests-prs)
  - [Development Guide](#development-guide)
    - [Prerequisites](#prerequisites)
    - [Initial Setup](#initial-setup)

Thank you for your interest in Portfoliem UI. We are a project led by Yusuke Miyakawa, and we welcome all kinds of contributions, from discussions to documentation, bug fixes, and feature improvements.

Please review this document to streamline the process and save everyone valuable time.

This repo uses yarn workspaces, so you should install yarn as the package manager. See [installation guide](https://classic.yarnpkg.com/en/docs/install#mac-stable).

## Issues
All software has bugs. Therefore, if you encounter any problems, please follow the steps below.

- Search for current and old issues in the [issue list](https://github.com/portfoliem/portfoliem-ui/issues).
- If the problem persists, please create an issue using the following information
  - Clear title (the shorter the better).
  - Describe the problem in clear terms.
  - Share error logs, screenshots, etc.
  - To speed up the issue fixing process, send us a sample repo with the issue you faced

## Pull Requests (PRs)
We welcome all contributions. There are many ways in which you can help us.

Before sending a new PR, be sure to run the `yarn test` command.If the test fails, do not submit a PR.If you need help, the best way is to ask a question with a Mention on the issue (@chidoriashi1990).

## Development Guide

### Prerequisites
Please have the latest stable versions of the following on your machine
- node
- yarn

### Initial Setup
If you run into trouble here, make sure your node, npm, and yarn are on the latest versions (yarn at least v1.3.2).

1. `cd ~` (optional)
2. `git clone https://github.com/portfoliem/portfoliem-ui.git` bonus: use your own fork for this step
3. `cd portfoliem-ui`
4. `yarn install`
5. `yarn run storybook`
