# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 15 app using the App Router, TypeScript, Prisma, Tailwind CSS, and NextAuth. Routes, layouts, and API handlers live in `src/app`; protected endpoints are under `src/app/api/protected`. Shared UI belongs in `src/components`, layout pieces in `src/partials`, hooks in `src/hooks`, context providers in `src/contexts`, and utilities in `src/lib`. Prisma schema, seed data, and migrations are in `prisma`. Static files are in `public`, insurer upload templates in `templates`, and notes in `docs`.

## Build, Test, and Development Commands

- `npm run dev`: start the local Next.js server on `http://localhost:4000`.
- `npm run build`: create a production build.
- `npm run start`: serve the production build on port `4000`.
- `npm run lint`: run Next.js ESLint checks.
- `npm run lint:errors`: fail on warnings; use before PRs.
- `npm run lint:fix`: apply supported lint fixes.
- `npm run prisma:generate`: regenerate Prisma Client after schema changes.
- `npm run prisma:migrate:dev`: create and apply local migrations.
- `npm run prisma:db:seed`: seed the database with `prisma/seed.ts`.
- `npm run prisma:studio`: inspect local data with Prisma Studio.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Follow existing formatting: two-space indentation, double quotes, semicolons, and Tailwind utilities. Name components and context providers in `PascalCase` (`ClientHeader.tsx`), hooks with `use` prefixes (`useClientSearch.ts`), and route handlers as `route.ts`. Keep insurer-specific logic grouped by insurer name (`philcare`, `maxicare`, `intellicare`).

## Testing Guidelines

There is no first-party test runner or `npm test` script currently configured. For now, validate changes with `npm run lint:errors` and `npm run build`, plus manual checks of affected flows on port `4000`. When adding tests, colocate them near the feature as `*.test.ts` or `*.test.tsx`, and prioritize parsing, report generation, permissions, and API routes.

## Commit & Pull Request Guidelines

Recent history uses short summaries such as `fixed build`, `Improved middleware`, and `Extended char fields`. Keep commits concise and focused on one change. Pull requests should include a brief description, linked issue or task when available, screenshots for UI changes, migration or seed notes, and validation commands run.

## Security & Configuration Tips

Do not commit environment files, credentials, generated secrets, or Terraform state/variable files. Review changes touching `src/auth.ts`, `src/lib/permissions.ts`, `src/middleware.ts`, S3 helpers, email helpers, and protected API routes carefully. After Prisma schema changes, commit the generated migration under `prisma/migrations` and run `npm run prisma:generate`.
