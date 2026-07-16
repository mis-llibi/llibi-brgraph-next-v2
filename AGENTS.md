# Repository Guidelines

## Start Here

Use Node.js 22, matching `.nvmrc` and CI. Read these before changing a flow:

- `README.md` for setup and commands.
- `docs/codebase-map.md` for runtime topology, route groups, data models, and current security boundaries.
- `docs/flows.md` for end-to-end auth, upload, report, deck, and management flows.
- `docs/testing.md` for validation scope and known runtime behavior.

Do not infer behavior from route or folder names alone. Trace the page or component, API handler, permission helper, Prisma query, and storage/email integration involved.

## Project Structure

This is a Next.js 15 App Router application using TypeScript, React 19, Prisma/MySQL, Tailwind CSS, NextAuth credentials/JWT sessions, TanStack Query, Zustand, ExcelJS, and S3-compatible object storage.

- `src/app`: pages, layouts, and API route handlers.
- `src/app/api/protected`: application APIs. The name does not automatically enforce authentication.
- `src/components`: shared UI, charts, account forms, and deck modals.
- `src/partials`: global sidebar/navigation.
- `src/hooks`, `src/contexts`: shared client state and providers.
- `src/lib`: auth helpers, Prisma, storage, parsing/report logic, permissions, and state.
- `src/preApi`: client-side request wrappers for uploads and report generation.
- `prisma`: schema, migrations, and local seed.
- `docs`: agent navigation guides plus the generic downloadable upload templates.
- `templates/<insurer>`: insurer-specific spreadsheets retained in the repo, but the current download handlers read the generic files in `docs`.
- `public`: images and Aptos font files used by report rendering.

## Core Architecture and Flow Rules

- Insurer-specific route files under `intellicare`, `maxicare`, and `philcare` currently re-export shared parent handlers. Put shared parser/report fixes in `src/lib/standard-data.ts` or the parent route unless behavior truly diverges.
- A dataset is identified by `clientId + title`. It is usable for report generation only when both a masterlist and utilization upload exist.
- Masterlist/utilization uploads temporarily write the workbook to object storage, parse its first worksheet, replace dataset rows and upload metadata in a transaction, then delete the temporary object.
- Single and comparative reports are generated from normalized database rows in `src/lib/standard-data.ts`. Comparative reports compare chart 1 and chart 2 across selected datasets and use the last selected dataset for charts 3 through 6.
- Generated report data is persisted client-side in Zustand/localStorage under `br-report-storage`; result pages do not refetch the complete report payload.
- Deck files live in object storage while metadata lives in the `decks` table.
- Table 5 CSV imports replace `customIllnesses` rows for the same `clientId + py` and override generated Table 5 data when present.

## Authentication and Permission Guardrails

- `src/auth.ts` uses credential login and JWT sessions. `requireAuth()` fetches fresh database permissions for API requests.
- `src/middleware.ts` only enforces the forced-password-change redirect for users who already have a token. It does not reject unauthenticated requests.
- `/api/protected` is a naming convention, not middleware protection. Every new or modified sensitive handler must explicitly call `requireAuth()` and the appropriate permission helper.
- Several existing report-generation, legacy client, deck, and debug handlers do not currently call auth helpers. Treat this as a known audit area; do not copy their pattern into new endpoints.
- `superAdmin` bypasses `requirePermission`. Admin management is super-admin-only. User management requires an admin with at least one of `canAdd`, `canRemove`, or `canEdit`.
- Permission labels are broader than some current enforcement:
  - `canUpload`: masterlist and utilization uploads.
  - `canCreate`: client creation; report-generation endpoints currently do not enforce it.
  - `canViewDeck`: client-specific deck listing; all-deck listing, download, signed URL, and edit currently lack equivalent guards.
  - `canUploadDeck`: deck upload.
  - `canAdd`, `canEdit`, `canRemove`: user-management operations and client create/edit/delete APIs as applicable.
- Prefer server-side page guards with `requirePageAuth()` for protected server pages and API guards for all data access. Client-side redirects are UX only.

## Local Environment

`.env.local` is ignored. `.env.example` documents all variables. The local defaults use:

- MySQL on `127.0.0.1:3307`.
- phpMyAdmin on `http://localhost:8080`.
- MinIO on `127.0.0.1:9000`, console on `127.0.0.1:9001`.
- NextAuth on `http://localhost:4000`.

Start dependencies with `docker compose up -d`, then run migrations and seed. `src/lib/env.ts` eagerly validates object-storage variables when storage code is imported, so builds require those values even when upload flows are not being exercised.

Email delivery uses Resend in `src/lib/email.ts`. `SMTP_HOST`, `SMTP_PORT`, and `SMTP_USER` are currently diagnostic values, not an SMTP transport. Do not claim local email works without a valid `RESEND_API_KEY` and verified sender.

## Commands

- `nvm use`: select Node 22.
- `npm ci`: install from the lockfile.
- `docker compose up -d`: start local MySQL and MinIO.
- `docker compose down`: stop local services without deleting volumes.
- `npm run dev`: start Next.js on `http://localhost:4000`.
- `npm run build`: production build.
- `npm run start`: serve the build on port `4000`.
- `npm run lint`: show ESLint errors and warnings.
- `npm run lint:errors`: report ESLint errors only; warnings are suppressed.
- `npm run lint:fix`: apply supported lint fixes.
- `npm run test:unit`: run Vitest once.
- `npm run test:watch`: run Vitest in watch mode.
- `npm run test:ci`: Prisma generate, unit tests, then build. It does not run lint.
- `npm run prisma:generate`: regenerate Prisma Client.
- `npm run prisma:migrate:dev -- --name <name>`: create/apply a local migration.
- `npm run prisma:db:seed`: seed the local super admin and insurers.
- `npm run prisma:studio`: inspect data.

The GitHub workflow currently targets pull requests to `main`, while this checkout uses `master` as its default branch. Verify the PR target and CI trigger before relying on the workflow.

## Testing and Validation

Vitest tests are colocated as `*.test.ts` and use `vitest.config.ts` plus `src/test/api.ts`. Prioritize tests for:

- workbook header normalization and row parsing;
- dataset replacement transactions;
- report aggregation;
- auth and permission helpers;
- API validation and permission failures;
- client search behavior.

For most changes run `npm run lint:errors`, `npm run test:unit`, and `npm run build`. Also manually verify affected authenticated flows on port `4000`, especially browser-only chart export, localStorage hydration, file uploads, Office deck viewing, and forced-password redirects.

`agentic-tests/` contains the latest Playwright end-to-end audit, generated
fixtures, machine-readable results, per-flow screenshots, and known defects.
Use it as evidence and a navigation aid; reruns intentionally use the
user-level Playwright installation rather than adding Playwright to this
project's dependencies.

## Coding Style

Use TypeScript and React function components. For new or modified code, follow the dominant modern style: two-space indentation, double quotes, semicolons, and Tailwind utilities. Preserve nearby style instead of reformatting unrelated legacy files.

Name components/providers in `PascalCase`, hooks with a `use` prefix, and API files `route.ts`. Keep shared business logic out of pages and insurer alias routes. Prefer typed Prisma access; existing `any` casts mark refactor debt and should not be expanded without need.

## Migrations, Seeds, and Generated Files

After schema changes:

1. Update `prisma/schema.prisma`.
2. Create and commit a migration under `prisma/migrations`.
3. Run `npm run prisma:generate`.
4. Update seed data only when local/default records must change.
5. Validate both a fresh migration path and affected queries.

The seed creates `admin@example.com` with password `admin123`. This is local bootstrap data only and must not be treated as a production credential.

## Legacy and Duplicate Paths

Before deleting or extending old-looking files, trace imports and runtime calls. Notable examples:

- `src/app/client/search-client/page-old.tsx` is a retained older UI.
- `src/app/api/protected/user-management/[id]/user-route.ts` is not an App Router handler because it is not named `route.ts`.
- `src/app/page.tsx` is empty; `/` redirects to `/dashboard` in `next.config.ts`.
- Insurer child routes are compatibility aliases to shared handlers.
- The generic templates in `docs` are the files served by download APIs; `templates/<insurer>` is not currently selected by those handlers.

## Security and Review

Never commit `.env.local`, credentials, generated secrets, or production storage/database values. Review changes touching auth, middleware, permissions, password reset, email, object storage, debug endpoints, protected APIs, or destructive Prisma operations carefully.

`/debug/auth` and `/api/debug/auth-session` expose auth diagnostics and are currently not guarded. Treat them as temporary diagnostics and do not add sensitive values to their output.

Keep commits concise and focused. Pull requests should describe the behavior changed, linked task, screenshots for UI work, migration/seed implications, security impact, and exact validation commands run.
