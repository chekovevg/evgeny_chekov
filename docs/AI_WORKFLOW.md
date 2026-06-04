# AI Workflow

This document describes how to work on `evgeny_chekov` with Codex safely and consistently.

## Project Summary

`evgeny_chekov` is a static portfolio site with Vite, React entry points, Tailwind CSS, shadcn/ui-style components, static HTML pages, and image-heavy portfolio sections.

Use Codex for focused implementation, UI review, regression checks, documentation, and handoff summaries. Keep changes small and tied to one task at a time.

## Active Project Rules

Codex project rules live in `AGENTS.md` at the repository root.

Use `AGENTS.md` for durable repo-specific instructions:

- Stack and project structure.
- Build, test, and verification commands.
- Design quality rules.
- Safety rules around dependencies, secrets, and unrelated refactors.
- Final response expectations.

## Local Commands

- Install JavaScript dependencies: `npm install`
- Run dev server: `npm run dev`
- Build production output: `npm run build`
- Run Node tests: `npm test`
- Install Python test dependencies: `pip install -r requirements.txt`
- Run Python tests: `pytest`

On Windows PowerShell, if `npm` is blocked by execution policy, use:

```powershell
npm.cmd run build
npm.cmd test
```

## Verification Baseline

Last checked during setup:

- `npm.cmd run build` passed.
- `npm.cmd test` passed with 4/4 tests.
- `pytest` was not run because Python was not available in PATH.

Before relying on Python tests, install Python or add it to PATH, then run:

```powershell
pip install -r requirements.txt
pytest
```

## Recommended Codex Workflow

Use this loop for normal development:

1. Discover: inspect relevant files and current behavior.
2. Plan: for large or ambiguous tasks, outline the intended change.
3. Implement: make a small, focused diff.
4. Verify: run relevant checks or document why they were skipped.
5. Review: inspect the diff and risks.
6. Commit: commit focused changes with a clear message.
7. Handoff: summarize current state and next task when useful.

## When To Use Browser Checks

Use browser verification after changes to:

- Layout, spacing, typography, responsive behavior, or animation.
- Image galleries and media-heavy pages.
- Navigation links, tabs, dialogs, sheets, or interactive controls.
- React entry points or shared CSS.

Check at least one desktop and one mobile viewport when practical.

## Safety Rules

- Do not commit `.env`, API keys, tokens, or private credentials.
- Do not install dependencies without explicit approval.
- Do not touch deployment settings or production credentials without explicit approval.
- Review diffs before committing.
- Treat MCP servers, plugins, and external tools as additional permission surfaces.
- Prefer audit, then install, then restart, then verify for any new tool.

## Tooling Notes

Currently useful built-in or session-available capabilities:

- Codex app for threaded project work, diffs, commits, and long-running tasks.
- Browser/in-app browser for local UI verification.
- Frontend skills for React, Vite, shadcn/ui, and UI QA tasks.
- GitHub tooling when repository, PR, or CI work is needed.

Install additional MCP servers or plugins only for a concrete need.

Potential future tools:

- Figma MCP, if portfolio designs are managed in Figma.
- Playwright MCP or browser automation, if repeated UI checks become frequent.
- shadcn/ui MCP, if component discovery and installation becomes a regular workflow.

Skip for now unless the project grows:

- Docker, unless backend, database, queues, or local infrastructure are added.
- Extra memory/task-tracker plugins, unless long autonomous project planning becomes painful.
- Web scraping MCPs, unless external research needs structured ingestion.

## Handoff Template

Use this when moving work to a new Codex session:

```text
Current state:
- 

Files changed:
- 

Commands run:
- 

Known issues:
- 

Decisions made:
- 

Next task:
- 

Do not touch:
- 
```
