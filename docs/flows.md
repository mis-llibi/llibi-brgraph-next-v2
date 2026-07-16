# End-to-End Flows

## 1. Login and Forced Password Change

1. NextAuth credentials are configured in `src/auth.ts`.
2. The provider loads `user` by email through Prisma and verifies the bcrypt
   password with `src/lib/hash.ts`.
3. Successful login updates `lastLogin` but does not block authentication if
   that update fails.
4. User fields and permission flags are copied into the JWT and session.
5. `src/middleware.ts` reads the token:
   - `mustChangePassword=true` redirects every page route to
     `/change-password`;
   - `mustChangePassword=false` redirects `/change-password` to `/dashboard`;
   - no token is allowed through.
6. `src/components/account/PasswordChangeForm.tsx` posts to
   `/api/protected/account/change-password`.
7. The API verifies the current password, minimum eight-character new
   password, confirmation, and password difference, then clears
   `mustChangePassword`.

Server-rendered page checks are centralized in
`src/lib/auth-middleware.ts#requirePageAuth`, currently used by dashboard and
profile. API checks use `requireAuth()`, which reloads the user from MySQL and
rejects inactive accounts.

## 2. Client Search and Navigation

1. `/client/search-client` renders
   `src/app/client/search-client/components/ClientSearchContainer.tsx`.
2. `useClients()` fetches `/api/protected/clients`, which requires auth and
   returns all clients.
3. `useClientSearch()` performs debounced local filtering and keyboard
   selection.
4. Selecting Search calls `/api/protected/clients/getClientId?clientId=...`.
5. That handler returns `/client/<id>`.
6. `/client/[clientId]` fetches
   `/api/protected/clients/getClient?clientId=...`.
7. The detail response includes insurer, legacy masterlist/utilization upload
   arrays, and formatted datasets with `hasMasterlist` and `hasUtilization`.

The two navigation/detail handlers do not currently call `requireAuth()`.

## 3. Client Management

UI: `src/app/admin/client-management/page.tsx`

API:

- `GET /api/protected/client-management`
- `POST /api/protected/client-management`
- `GET|PUT|DELETE /api/protected/client-management/[id]`
- `GET /api/protected/insurers`

Behavior:

- Listing requires authentication.
- Creating requires `canCreate`.
- Updating requires `canEdit`.
- Deleting requires `canRemove`.
- Duplicate detection uses client name plus insurer.
- Client deletion is blocked when uploads, decks, masterlist entries, or
  utilization entries exist.

The UI only allows admins/super admins onto the page, but the API mutation
policy is permission-flag-based. Preserve or deliberately reconcile that
difference when changing access rules.

## 4. Dataset Upload

UI entry points:

- `src/app/client/[clientId]/ClientHeader.tsx`
- `src/app/client/[clientId]/modals/UploadMasterlist.tsx`
- `src/app/client/[clientId]/modals/UploadUtilization.tsx`
- `src/preApi/FileUploadApi.tsx`

API entry points:

- `POST /api/protected/masterlist`
- `POST /api/protected/utilization`

Both require auth and `canUpload`.

Flow:

1. The user chooses an existing dataset title or types a new one.
2. The client submits a file, client ID, insurer ID, and either `dataset_id`
   or `dataset_title`.
3. `src/lib/datasets.ts` validates the selection:
   - an ID must belong to the client;
   - a title upserts by `clientId + title`.
4. `src/lib/s3.ts#saveFile` uploads the workbook temporarily.
5. `readFile()` loads the first worksheet with ExcelJS.
6. `src/lib/standard-data.ts` normalizes headers, relationships, member types,
   numbers, and dates.
7. A Prisma transaction:
   - deletes prior rows for that client/dataset and upload type;
   - inserts parsed rows;
   - replaces the `uploads` marker.
8. Utilization parsing derives an admission-month span such as `Jan-Mar`.
9. The temporary object is deleted in `finally`, including parser failures.
10. TanStack Query invalidates/refetches the client detail.

Masterlist required columns:

- `Masked ID`
- `Company Name/Subgroup`
- `Relationship`
- `Member Type`

Utilization required columns:

- `Masked ID`
- `Company Name / Subgroup`
- `Relationship`
- `Member Type`
- `Diagnosis`
- `Provider Name`
- `Claim/Coverage Type`
- `Approved Claim Amount`

The upload UI accepts `.xlsx`, `.xls`, and `.csv`, but the server reads the
object as an ExcelJS workbook. Validate actual CSV behavior before claiming
that CSV uploads are supported end to end.

## 5. Single-Dataset Report Generation

UI:

- `src/app/client/[clientId]/ReportGenerator.tsx`
- `src/app/client/[clientId]/NewAccount.tsx`

Only datasets with both upload markers are selectable.

1. The user selects one complete dataset.
2. `src/preApi/GenerateReportApi.tsx#generateOneYear` posts to
   `/api/protected/generate/new`.
3. `src/lib/standard-data.ts#generateSingleDataset` builds:
   - chart 1: company/member demographics;
   - chart 2: total claim amount/count;
   - chart 3: company by claim coverage;
   - chart 4: claim metrics by relationship;
   - chart 5: top diagnoses by member type;
   - chart 6: top providers by member type.
4. The browser stores the response plus `lastData` in
   `src/lib/store.ts`.
5. The user is routed to `/client/result/solo`.
6. The result page renders charts/tables and can export their DOM nodes as PNG
   files in `report-assets.zip`.

The generation handler currently has no explicit auth or `canCreate` guard.

## 6. Comparative Report Generation

UI: `src/app/client/[clientId]/OldAccount.tsx`

1. The user selects at least two complete datasets.
2. `generateMultiYear()` posts the ordered selection to
   `/api/protected/generate/old`.
3. `generateMultiDataset()` builds chart 1 and chart 2 for every dataset.
4. Charts 3 through 6 are generated only from the last selected dataset.
5. The last selected dataset is also stored as `lastData` for Table 5
   export/import.
6. The browser routes to `/client/result/multi`.

Selection order therefore changes which dataset supplies the detailed claims
tables and custom Table 5 key.

## 7. Table 5 CSV Override

Result pages:

- `src/app/client/result/solo/page.tsx`
- `src/app/client/result/multi/page.tsx`

Export:

1. The result page posts `clientId` and `datasetId` to
   `/api/protected/generate/exportT5`.
2. `src/lib/standard-data.ts#exportTable5Rows` groups all utilization rows by
   member type and diagnosis.
3. Papa Parse serializes a timestamped CSV response.

Import:

1. The browser parses the edited CSV with Papa Parse.
2. It posts rows with `clientId` and `py` to
   `/api/protected/generate/importT5`.
3. Existing `customIllnesses` rows for the same `clientId + py` are deleted.
4. New rows are inserted.
5. On result-page load,
   `/api/protected/generate/checkCustomIllnesses` is queried.
6. Imported rows replace generated Table 5 data when any are found.

These three handlers currently have no explicit auth guard.

## 8. Deck Upload, List, View, Download, and Edit

UI:

- client-specific deck table: `src/app/client/[clientId]/Decks.tsx`
- all-decks page: `src/app/decks/page.tsx`
- upload: `src/components/decks/UploadDeck.tsx` and
  `UploadDeckWithClientSelect.tsx`
- edit: `src/components/decks/EditDeck.tsx`
- view: `src/components/decks/ViewDeck.tsx`

Storage:

- object key: `brgraphv2/decks/<clientId>/<timestamp>-<filename>`
- metadata: Prisma `decks`

API behavior:

- `uploadDeck`: requires auth and `canUploadDeck`.
- `getDecks`: requires auth and `canViewDeck`.
- `getAllDecks`: returns every deck and client without an explicit guard.
- `getSignedUrl`: returns a one-hour signed URL and Office Online embed URL
  without an explicit guard.
- `downloadDeck`: streams the object without an explicit guard.
- `updateDeck`: updates metadata and optionally replaces/deletes the object
  without an explicit guard.

Local MinIO supports upload/download. Office Online cannot view localhost
signed URLs.

## 9. User and Administrator Management

Regular users:

- UI: `src/app/admin/user-management/page.tsx`
- API: `src/app/api/protected/user-management`
- access: super admin, or admin with at least one management flag
- operations additionally require `canAdd`, `canEdit`, or `canRemove`
- created/reset users receive a generated temporary password and
  `mustChangePassword=true`

Administrators:

- UI: `src/app/admin/admin-management/page.tsx`
- API: `src/app/api/protected/admin-management`
- access: super admin only
- self-delete, self-reset, and self-permission changes are blocked
- promoting to super admin forces `canAdd`, `canEdit`, and `canRemove`

Email:

- `src/lib/permissions.ts` creates human-readable role/permission text.
- `src/lib/email.ts` sends credentials through Resend.
- account creation/reset continues even when email delivery fails.
- the API response still says credentials were sent, so local testing must
  inspect logs and not assume delivery.

## 10. Template Download

The upload modals link to:

- `/api/protected/downloadMasterTemp?insurerId=<id>`
- `/api/protected/downloadUtilTemp?insurerId=<id>`

Both require authentication, but the `insurerId` query parameter is currently
unused. The handlers always return the generic workbooks in `docs`.

The insurer-specific route aliases and `templates/<insurer>` files do not
currently participate in this download flow.

## 11. Auth Diagnostics

`/debug/auth` calls `/api/debug/auth-session` and displays:

- whether auth-related environment variables are present;
- request host/cookie presence;
- safe token/session fields.

The diagnostics do not return secret values, but both routes are unguarded.
Treat them as temporary debugging tools and avoid expanding their output with
cookies, raw tokens, or environment values.
