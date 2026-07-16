# LLIBI BR Graph

LLIBI BR Graph ingests client masterlist and utilization spreadsheets, normalizes them into MySQL, generates single-dataset or comparative business-review charts/tables, supports Table 5 CSV overrides, and stores PowerPoint decks in S3-compatible object storage.

The application uses Next.js 15 App Router, React 19, TypeScript, Prisma/MySQL, NextAuth credentials/JWT sessions, Tailwind CSS, TanStack Query, Zustand, ExcelJS, Chart.js, and DigitalOcean Spaces-compatible storage.

## Quick Start

Prerequisites:

- Node.js 22 (`.nvmrc`)
- Docker with Docker Compose
- npm

```bash
nvm use
npm ci
cp .env.example .env.local
docker compose up -d
npm run prisma:generate
npm run prisma:migrate:dev
npm run prisma:db:seed
npm run dev
```

Open [http://localhost:4000](http://localhost:4000).

The repository already includes an ignored `.env.local` configured for the local Docker services. On a fresh clone, copy `.env.example` and replace `AUTH_SECRET`/`NEXTAUTH_SECRET` with the same strong random value.

Local seed credentials:

- Email: `admin@example.com`
- Password: `admin123`

These credentials are for local bootstrap only. Change the password immediately and never reuse them in a deployed environment.

## Local Services

`compose.yaml` starts:

- MySQL on `127.0.0.1:3307`
- phpMyAdmin on [http://localhost:8080](http://localhost:8080)
- MinIO S3 API on `127.0.0.1:9000`
- MinIO console on [http://localhost:9001](http://localhost:9001)

Sign in to phpMyAdmin with:

- Server: automatically configured as `mysql`
- Username: `llibi`
- Password: `llibi-local`

The MinIO bootstrap creates the `llibi-local` bucket and allows downloads. Local deck download and upload can use it. Office Online preview cannot load a signed URL pointing to localhost because Microsoft must be able to reach the URL.

Stop services without deleting data:

```bash
docker compose down
```

Delete local service data and start fresh:

```bash
docker compose down -v
docker compose up -d
```

## Environment Variables

See `.env.example` for the complete local shape.

| Group | Variables | Notes |
| --- | --- | --- |
| Database | `DATABASE_URL`, `SHADOW_DATABASE_URL` | Prisma uses MySQL. The shadow database is required by `prisma migrate dev`. |
| Auth | `AUTH_SECRET`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL` | Keep both secret values identical for current auth/middleware compatibility. |
| Object storage | `DO_LLIBI_ACCESS_KEY_ID`, `DO_LLIBI_SECRET_ACCESS_KEY`, `DO_LLIBI_DEFAULT_REGION`, `DO_LLIBI_ENDPOINT`, `DO_LLIBI_BUCKET`, `DO_LLIBI_CDN_ENDPOINT` | Required at build time because storage configuration is eagerly loaded. |
| S3 compatibility | `S3_FORCE_PATH_STYLE`, `S3_USE_PUBLIC_READ_ACL` | Local MinIO uses `true` and `false`; production Spaces normally uses `false` and `true`. |
| Email | `RESEND_API_KEY`, `SMTP_FROM_NAME`, `SMTP_FROM_EMAIL` | Actual sending uses Resend. A valid API key and verified sender are required. |
| Email diagnostics | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` | Currently logged for diagnostics; no SMTP transporter is configured. |

## First-Run Database Setup

Generate Prisma Client, apply migrations, and seed:

```bash
npm run prisma:generate
npm run prisma:migrate:dev
npm run prisma:db:seed
```

Inspect local data:

```bash
npm run prisma:studio
```

After changing `prisma/schema.prisma`, create a named migration and regenerate the client:

```bash
npm run prisma:migrate:dev -- --name describe_the_change
npm run prisma:generate
```

## Main Product Flows

- Credential login and forced first-login password change.
- Client search and client detail navigation.
- Masterlist and utilization upload into a shared dataset title.
- Single-dataset and comparative BR report generation.
- Table 5 CSV export, edit, and re-import override.
- Chart/table PNG export bundled as a ZIP.
- Client-specific and all-client PowerPoint deck management.
- Client, user, and administrator management with permission flags.

For implementation references, read:

- [Documentation index](docs/README.md)
- [Codebase map](docs/codebase-map.md)
- [End-to-end flows](docs/flows.md)
- [Testing guide](docs/testing.md)

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Run development server on port `4000`. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build on port `4000`. |
| `npm run lint` | Show ESLint errors and warnings. |
| `npm run lint:errors` | Report ESLint errors only; warnings are suppressed. |
| `npm run lint:fix` | Apply supported lint fixes. |
| `npm run test:unit` | Run the Vitest suite once. |
| `npm run test:watch` | Run Vitest in watch mode. |
| `npm run test:ci` | Prisma generate, unit tests, then build. |
| `npm run prisma:generate` | Generate Prisma Client. |
| `npm run prisma:migrate:dev` | Apply/create development migrations. |
| `npm run prisma:migrate:reset` | Reset the local database. Destructive. |
| `npm run prisma:db:seed` | Seed the super admin and insurers. |
| `npm run prisma:studio` | Open Prisma Studio. |

## Validation

Before a pull request, run:

```bash
npm run lint:errors
npm run test:unit
npm run build
```

Use Node 22. The multipart upload tests rely on Node's `FormData`/`File` implementation and are known to fail under Node 24 even when they pass under Node 22.

Manual checks remain important for authenticated navigation, forced password change, upload/download behavior, report localStorage hydration, chart ZIP export, and Office deck preview.

The latest local Playwright audit, generated fixtures, per-flow screenshots,
downloads, and documented defects are under
[agentic-tests](agentic-tests/README.md). Start with the
[audit summary](agentic-tests/run-summary.md).

## Deployment Notes

`vercel.json` runs `npm run vercel-build`, which currently executes:

1. Prisma Client generation
2. `prisma migrate deploy`
3. database seed
4. Next.js build

Review that seed-on-every-build behavior before using the command outside the current deployment setup.

The GitHub Actions workflow currently listens for pull requests targeting `main`, while the repository's default branch in this checkout is `master`.

## Security Notes

The `protected` API directory is not automatically protected. Handlers must explicitly call `requireAuth()` and the relevant permission helper. Some existing report, deck, legacy client, and auth-debug handlers do not yet do so; see `docs/codebase-map.md` before extending them.

Do not commit `.env.local`, production credentials, generated secrets, or real customer spreadsheets. The files under `docs` and `templates` are repository-provided templates only.
