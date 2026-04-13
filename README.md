# Portfolio admin dashboard (frontend)

Personal portfolio site with a **marketing home** and an **interactive admin-style demo**. The demo showcases React Query, CRUD-style flows, a drawer pattern, filtering, and toast feedback—backed by a small **in-memory** API (no real database).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Portfolio landing (hero, featured work, skills) |
| `/engineering` | Short notes on stack, folders, and data flow |
| `/dashboard` | Main demo: stats, search/filter, table, drawer CRUD |
| `/items` | Read-only item catalog (manage on dashboard) |
| `/analytics` | Simple aggregates and lists from the same item data |
| `/settings` | Browser-only preferences (`localStorage`) |

## Stack

Next.js (App Router), React, TypeScript, Tailwind CSS v4, TanStack React Query, Sonner.

Add your public repository URL in [`lib/site.ts`](lib/site.ts) as `SITE_GITHUB_URL` to show a GitHub link on the engineering page.
