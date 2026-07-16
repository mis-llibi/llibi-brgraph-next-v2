# Codebase Map

## Runtime Topology

```text
Browser
  -> Next.js App Router pages and client components
  -> /api/protected through src/lib/axios.ts or fetch
  -> route.ts handlers
  -> auth/permission helpers
  -> Prisma -> MySQL
  -> S3 client -> DigitalOcean Spaces or local MinIO
```

Global client providers are assembled in `src/app/layout.tsx` and
`src/app/providers.tsx`:

- NextAuth `SessionProvider`
- TanStack `QueryClientProvider`
- sidebar context
- generated-data context

The persistent generated-report payload is separate Zustand state in
`src/lib/store.ts`, stored in browser localStorage as `br-report-storage`.

## Source-of-Truth Files

| Concern | Primary files |
| --- | --- |
| Credentials/JWT auth | `src/auth.ts`, `src/app/api/auth/[...nextauth]/route.ts` |
| Fresh API auth and permissions | `src/lib/auth-middleware.ts`, `src/lib/permissions.ts` |
| Password-change redirect | `src/middleware.ts`, `src/components/account/PasswordChangeForm.tsx` |
| Database models | `prisma/schema.prisma` |
| Seed records | `prisma/seed.ts` |
| Workbook parsing and report aggregation | `src/lib/standard-data.ts` |
| Dataset resolution | `src/lib/datasets.ts` |
| Object storage | `src/lib/env.ts`, `src/lib/s3.ts` |
| Client-side API base | `src/lib/axios.ts` |
| Generated report persistence | `src/lib/store.ts` |
| Email credentials/reset messages | `src/lib/email.ts` |

## Page Map

| Route | Entry point | Current access mechanism |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Permanent redirect to `/dashboard` in `next.config.ts`. |
| `/dashboard` | `src/app/dashboard/page.tsx` | Server-side `requirePageAuth()`. |
| `/profile` | `src/app/profile/page.tsx` | Server-side `requirePageAuth()`. |
| `/change-password` | `src/app/change-password/page.tsx` | Middleware controls token-bearing users. |
| `/client/search-client` | `src/app/client/search-client/page.tsx` | Client session display; data API enforces auth. |
| `/client/[clientId]` | `src/app/client/[clientId]/page.tsx` | Client page; its client-data endpoint currently has no auth guard. |
| `/client/result/solo` | `src/app/client/result/solo/page.tsx` | Reads localStorage-backed report state. |
| `/client/result/multi` | `src/app/client/result/multi/page.tsx` | Reads localStorage-backed report state. |
| `/decks` | `src/app/decks/page.tsx` | Client page; all-deck API currently has no auth guard. |
| `/admin/client-management` | `src/app/admin/client-management/page.tsx` | Client-side admin check plus guarded mutation APIs. |
| `/admin/user-management` | `src/app/admin/user-management/page.tsx` | API enforces admin and management flags. |
| `/admin/admin-management` | `src/app/admin/admin-management/page.tsx` | Client redirect plus super-admin API enforcement. |
| `/debug/auth` | `src/app/debug/auth/page.tsx` | No guard; temporary diagnostics. |

Only `/dashboard` and `/profile` currently use the shared server-page auth
helper. Client-side redirects or hidden navigation are not security controls.

## API Groups and Current Guards

`src/app/api/protected` is not automatically protected. The table describes
the implementation as it exists, not an intended policy.

| API group | Main operations | Current guard behavior |
| --- | --- | --- |
| `account/change-password` | Change own password | `requireAuth()` |
| `masterlist`, `utilization` | Parse and replace dataset rows | `requireAuth()` + `canUpload` |
| `clients`, `clients/getClients` | List clients | `requireAuth()` |
| `clients/getClient`, `clients/getClientId` | Client details/navigation | No explicit guard |
| `client-management` | List/create/update/delete clients | Auth on all; mutations use `canCreate`, `canEdit`, `canRemove` |
| `insurers` | List insurers | `requireAuth()` |
| `generate/new`, `generate/old` | Single/comparative report data | No explicit guard |
| `generate/exportT5`, `importT5`, `checkCustomIllnesses` | Table 5 override flow | No explicit guard |
| `decks/getDecks` | Client-specific deck list | Auth + `canViewDeck` |
| `decks/uploadDeck` | Upload deck | Auth + `canUploadDeck` |
| `decks/getAllDecks`, `downloadDeck`, `getSignedUrl`, `updateDeck` | Global list/view/download/edit | No explicit guard |
| `user-management` | Regular-user CRUD/reset | Auth + admin management flags |
| `admin-management` | Admin CRUD/reset | Auth + super admin |
| `downloadMasterTemp`, `downloadUtilTemp` | Download generic templates | `requireAuth()` |
| `debug/auth-session` | Token/session diagnostics | No guard |

Insurer child routes such as
`src/app/api/protected/masterlist/maxicare/route.ts` only re-export their
shared parent operation. They are compatibility aliases, not separate
implementations.

## Permission Semantics

The database stores booleans on `user`:

- `admin`, `superAdmin`
- `canUpload`, `canCreate`
- `canViewDeck`, `canUploadDeck`
- `canAdd`, `canRemove`, `canEdit`
- `isActive`, `mustChangePassword`

`requireAuth()` reloads these values from MySQL for API requests, avoiding
stale JWT permissions. `superAdmin` bypasses `requirePermission()`.

Important implementation details:

- `canCreate` is enforced for client creation, not the current report
  generation endpoints.
- `canEdit` and `canRemove` are reused for client-management mutations and
  user-management operations.
- User management additionally requires `admin` or `superAdmin`.
- The client-management page is admin-only in the UI, while its APIs enforce
  the individual permission flags.
- The all-decks page exposes controls without checking session permissions;
  only upload and client-specific listing have API guards.

Verify both UI gating and API enforcement whenever permission behavior changes.

## Data Model

`clients` optionally belongs to one `insurers` record.

Each `datasets` row belongs to a client and insurer and is unique by
`clientId + title`. It owns:

- `masterlistEntries`
- `utilizationEntries`
- `uploads` metadata

`uploads` tracks whether a dataset has a masterlist or utilization import,
including the dataset title in `year` and utilization month span in `months`.

`decks` stores metadata and an object-storage key for a client.

`customIllnesses` stores imported Table 5 override rows keyed in practice by
`clientId + py`.

The `user.createdBy` self-relation records which user created another account.

## Storage and Templates

`src/lib/env.ts` validates all DigitalOcean-style variables when imported.
`src/lib/s3.ts` uses S3-compatible APIs for:

- temporary workbook upload/read/delete under `brgraphv2/masterlist/`;
- persistent deck upload under `brgraphv2/decks/<clientId>/`;
- signed deck viewing and direct downloads.

The local environment enables path-style S3 URLs and disables the
`public-read` object ACL because MinIO uses a bucket policy. Production Spaces
can retain virtual-host addressing and the public-read ACL.

The active template download routes read the generic workbooks in `docs`.
They do not use the insurer-specific files in `templates`.

The local Compose stack also exposes phpMyAdmin at `http://localhost:8080`.
It connects to the internal `mysql` service and is intended only for local
database inspection and maintenance.

## Legacy and Audit Areas

- `src/app/client/search-client/page-old.tsx`: retained older search page.
- `src/app/api/protected/user-management/[id]/user-route.ts`: duplicate-looking
  code that is not routable under App Router because the filename is not
  `route.ts`.
- `src/preApi`: active client request wrappers despite the legacy-sounding
  directory name.
- `src/contexts/GeneratedDataContext.tsx`: global provider exists, while the
  result flow uses Zustand in `src/lib/store.ts`.
- `/debug/auth` and `/api/debug/auth-session`: unguarded temporary diagnostics.
- Several `console.log` calls remain in report rendering and upload paths.
- Prisma Client and Prisma CLI versions are declared independently; check both
  after dependency updates.
- GitHub Actions targets PRs to `main`, while this checkout tracks `master`.
