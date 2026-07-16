# Documentation Index

These documents are intentionally limited to navigation and end-to-end context
that is expensive to reconstruct in a new coding-agent session.

- [Codebase map](codebase-map.md): runtime topology, source-of-truth files,
  route groups, data models, permissions, and legacy paths.
- [End-to-end flows](flows.md): auth, client search, uploads, reports, Table 5
  overrides, decks, and management operations with code references.
- [Testing](testing.md): test commands, coverage areas, and the Node 22 runtime
  requirement.

## Repository-Served Templates

The current template download APIs serve these generic files:

- [Masterlist Template - for BR Automation.xlsx](Masterlist%20Template%20-%20for%20BR%20Automation.xlsx)
- [Utilization Template - for BR Automation.xlsx](Utilization%20Template%20-%20for%20BR%20Automation.xlsx)

The insurer-specific workbooks under `../templates/intellicare`,
`../templates/maxicare`, and `../templates/philcare` remain in the repository,
but the active download handlers do not currently select them.
