# Contributing

## Branching

`main` is always deployable. All work happens on short-lived branches off `main`, named by type:

- `feature/<short-description>` — new functionality
- `fix/<short-description>` — bug fix
- `hotfix/<short-description>` — urgent production fix

There is no `develop` branch. Branch from `main`, merge back into `main`, delete the branch.

## Commits — Conventional Commits

Every commit message must follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <description>
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `build`, `ci`.

Examples:

```
feat: remember filter selection between sessions
fix(auth): stop redirect loop when the token has expired
chore: bump vite to 8.2
```

Commits are checked locally by commitlint via a husky hook — a malformed message is rejected before it's even made.

## Pull requests

Every change goes through a PR, including your own solo work — it's the checkpoint where CI runs (typecheck, lint, test, build).

**The PR title becomes the changelog entry.** Merging squashes the PR into a single commit on `main`, and that commit's subject is exactly the PR title — this is what Release Please reads to build `CHANGELOG.md`. Write it as a Conventional Commit that a future reader would find useful:

- Good: `feat: remember filter selection between sessions`
- Not useful: `feat: update store`

Nobody hand-writes the changelog — the PR title is where its quality gets decided.

## Hotfixes

A hotfix takes the same path as everything else: branch from `main`, open a PR, wait for CI to go green, merge. It is not a shortcut around review or protection.

This matters most exactly when it's tempting to skip it: a hotfix is usually written under time pressure, against a system that's already misbehaving — precisely the condition where a change is most likely to introduce a second problem. The CI run costs well under a minute; skipping it trades a small, known delay for an unbounded one if the fix is wrong.

The one real exception: if CI itself is broken or unavailable, verification isn't being skipped, it's unavailable. That's a different situation from "verification is inconvenient right now."

## Versions and changelog

Versions and `CHANGELOG.md` are managed automatically by [Release Please](https://github.com/googleapis/release-please), which keeps one open "release PR" up to date on `main`. Merging that PR is how a version gets cut — it bumps `package.json`, rewrites the changelog from commit history, tags the commit, and publishes a GitHub Release. You never edit the changelog by hand.
