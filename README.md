# Portfolio admin dashboard (frontend)

Personal portfolio site with a **marketing home** and an **interactive admin-style demo**. The demo showcases React Query, CRUD-style flows, a drawer pattern, filtering, and toast feedback. The browser calls **Route Handlers** under `app/api/items/`, which read and write an **in-memory store** in `lib/server/items-store.ts` (no real database).

**Deployed / serverless note:** each function instance keeps its own memory, so item changes may **not persist** across cold starts or between regions. Treat CRUD as a live UI demo; swap the store for a database when you need durable data.

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

## Google Analytics 4 setup

1. Create a GA4 Web Data Stream and copy your measurement ID (format: `G-XXXXXXXXXX`).
2. Add the ID to your environment:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. Restart dev server after setting the variable.

### Tracked events

- Automatic page views on route changes.
- CTA events from the marketing home page:
  - `cta_dashboard_click`
  - `cta_resume_download_click`
  - `cta_email_click`
  - `cta_linkedin_click`
- Project and navigation events from marketing pages:
  - `featured_project_click` (Featured Work card links)
  - `building_with_ai_nav_click` (footer links on `/building-with-ai`)
  - `engineering_story_click` (story link from `/engineering`)
  - `engineering_nav_click` (footer links on `/engineering`)

### Verify tracking

- Open the site and interact with CTAs.
- In browser DevTools Network, confirm requests to `googletagmanager.com` / GA `collect`.
- In GA4, open **Realtime** (and **DebugView** if needed) to confirm `page_view` and CTA events.
- If `NEXT_PUBLIC_GA_ID` is missing, the analytics script is not injected.
