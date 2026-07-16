# Testing

This project uses Vitest with a jsdom environment. Tests are colocated with the
code as `*.test.ts` or `*.test.tsx`.

## Runtime

Use Node.js 22, matching `.nvmrc` and `.github/workflows/main.yml`.

The multipart upload tests create native `FormData` and `File` objects in
`src/test/api.ts`. They pass on Node 22 but currently fail on Node 24 because
the request parser rejects the cross-realm `File` object used by the jsdom test
environment.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run test:unit` | Run all Vitest tests once. |
| `npm run test:watch` | Run Vitest in watch mode. |
| `npm run test:ci` | Generate Prisma Client, run unit tests, then build. |
| `npm run lint` | Show ESLint errors and warnings. |
| `npm run lint:errors` | Report ESLint errors only; `test:ci` does not include lint. |

## Current Coverage Areas

- auth and permission helpers;
- masterlist/utilization route validation and transactions;
- client-management APIs;
- shared workbook parsing and report aggregation;
- single/comparative generation routes;
- client-search normalization and filtering.

## Recommended Validation

For most changes:

```bash
npm run lint:errors
npm run test:unit
npm run build
```

Add manual browser checks for authenticated navigation, forced password
changes, file uploads, object-storage downloads, report localStorage
hydration, chart/table ZIP generation, and Office deck preview.

## Agentic Browser Audit

`agentic-tests/` contains a Playwright audit of the non-email application
flows, including generated Intellicare workbooks, screenshots, downloaded
artifacts, database-backed report generation, and documented failures or local
limitations.

Read `agentic-tests/run-summary.md` before repeating the full audit. The runner
uses the user-level Playwright runtime and does not add Playwright to
`package.json`.
