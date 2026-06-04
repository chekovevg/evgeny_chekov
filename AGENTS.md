# AGENTS.md

## Project

`evgeny_chekov` is a static portfolio site with React/Vite entry points, standalone HTML pages, Tailwind CSS, and shadcn/ui-style components.

The project goal is a polished personal portfolio, not a generic template. Preserve the visual identity, layout intent, and existing content structure unless the task explicitly asks to change them.

For the project AI workflow, verification baseline, and handoff template, see `docs/AI_WORKFLOW.md`.

## Stack

- Frontend: Vite, React, Tailwind CSS, static HTML pages.
- UI components: shadcn/ui-style components under `src/components/ui`.
- Package manager: npm with `package-lock.json`.
- Python tests validate static HTML/resources.

## Key Files And Folders

- `src/` - React entries, site data, UI components, and shared CSS.
- `css/` - static stylesheet for HTML pages.
- `img/` - image assets used by the portfolio.
- `tests/` - Node and Python regression tests.
- `*.html` - static portfolio pages and React mount pages.

## Commands

- Install JavaScript dependencies: `npm install`
- Run dev server: `npm run dev`
- Build: `npm run build`
- Run Node tests: `npm test`
- Install Python test dependencies: `pip install -r requirements.txt`
- Run Python tests: `pytest`

## Working Rules

- Inspect relevant files before editing.
- For large or ambiguous changes, propose a short plan before implementation.
- Keep changes small, focused, and tied to the user's request.
- Do not make unrelated refactors or broad rewrites.
- Do not add, remove, or upgrade dependencies without explicit approval.
- Do not touch secrets, environment files, auth, billing, deployment credentials, or production settings without explicit approval.
- Prefer existing components, styles, naming, and project patterns over new abstractions.
- Preserve user changes in the working tree; never revert unrelated changes.

## Design Rules

- Avoid generic AI-looking UI, filler copy, and decorative effects that do not support the portfolio.
- Keep portfolio pages responsive, readable, and visually intentional on desktop and mobile.
- Use existing design tokens, CSS patterns, and UI components first.
- Do not introduce one-off visual systems unless the task is specifically a redesign.
- After UI changes, verify layout behavior in a browser when practical.

## Verification

- For markup, asset, or static-page changes, run `pytest` when Python dependencies are available.
- For React, Vite, CSS, or build-sensitive changes, run `npm run build`.
- For frontend regression-sensitive changes, run `npm test`.
- If a relevant check cannot be run, explain why and describe the remaining risk.

## Final Response Format

End implementation tasks with:

- Changed files.
- Checks run and results.
- Risks or unverified areas.
- Confidence from 1 to 10.
- Suggested next step when useful.

Keep summaries concise and evidence-based.
