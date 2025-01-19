# Zp CLI Tool

A command-line tool for managing project versions and branch workflows efficiently.

## Features

- Publish new versions with automated branch creation.
- Unpublish versions with cleanup operations.
- Validate branch status and uncommitted changes.
- Support for different versioning types (`patch`, `minor`, `major`).

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tony11tony11t/zp.git
   cd zp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Link the CLI tool globally:

   ```bash
   npm link
   ```

4. Verify installation:

   ```bash
   zp --help
   ```

---

## Commands

### `publish`

Publish a new version of the project and create a corresponding release branch.

#### Usage

```bash
zp publish [--minor] [--major]
```

#### Options

- `--minor`: Bump the minor version (e.g., 1.0.0 → 1.1.0).
- `--major`: Bump the major version (e.g., 1.0.0 → 2.0.0).
- Default (no flags): Bump the patch version (e.g., 1.0.0 → 1.0.1).

#### Description

1. Ensures you are on the `develop` or `main` branch.
2. Checks for uncommitted changes.
3. Updates the version in `package.json` and `package-lock.json`.
4. Creates a new branch named `release/<version>`.
5. Stages and commits the changes.

#### Example

```bash
zp publish --minor
```

Output:

```plaintext
Bumping minor version...
Creating release branch: release/1.1.0
Staging changes...
Committing changes...
Version bumped and branch created: release/1.1.0
```

---

### `unpublish`

Unpublish the current release branch and revert changes.

#### Usage

```bash
zp unpublish
```

#### Description

1. Ensures you are on a `release/<version>` branch.
2. Resets the last commit (soft reset).
3. Deletes the current branch.
4. Switches back to the `develop` or `main` branch.

#### Example

```bash
zp unpublish
```

Output:

```plaintext
Resetting last commit...
Deleting branch: release/1.1.0
Switching to branch: develop
Reset complete. Now on branch: develop
```

---

## Troubleshooting

- Ensure your working directory is clean (no uncommitted changes) before running commands.
- Make sure you have permissions to create and delete branches.

---

## License

This project is licensed under the MIT License.