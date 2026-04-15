import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/marketing/section-heading";
import { SITE_GITHUB_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering notes",
  description:
    "How this portfolio repo is structured: App Router, TanStack React Query, Route Handlers, and the in-memory items demo.",
  openGraph: {
    title: "Engineering notes — Portfolio",
    description:
      "Stack, folder map, and data flow for the portfolio admin dashboard frontend.",
  },
};

const stack = [
  "Next.js (App Router)",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "TanStack React Query",
  "Vitest + Testing Library + jsdom",
  "Sonner",
];

const structure = [
  {
    path: "app/(marketing)/",
    note: "Portfolio landing and this page; uses marketing layout + navbar.",
  },
  {
    path: "app/(app)/",
    note: "Dashboard demo routes: dashboard, items, analytics, settings.",
  },
  {
    path: "components/",
    note: "Layout shell (sidebar, topbar) and dashboard UI (table, drawer).",
  },
  {
    path: "hooks/",
    note: "TanStack React Query hooks wrapping list and mutation calls.",
  },
  {
    path: "app/api/items/",
    note: "Route Handlers: GET/POST collection, PATCH/DELETE by id.",
  },
  {
    path: "lib/server/items-store.ts",
    note: "In-memory store + simulated latency; not durable on serverless (see README).",
  },
  {
    path: "lib/api/items.ts",
    note: "Client fetch helpers that call the items API from TanStack React Query hooks.",
  },
];

const noteCardClass =
  "marketing-reveal-up rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm marketing-transition-standard transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="marketing-fade-up text-sm font-medium uppercase tracking-[0.2em] text-[#1e3a5f]">
          Portfolio project
        </p>
        <h1 className="marketing-fade-up marketing-fade-up-delay font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-[2rem] md:leading-snug">
          Engineering notes
        </h1>
        <p className="marketing-fade-up marketing-fade-up-delay-2 mt-4 text-base leading-[1.75] text-slate-600">
          The interactive demo reads and writes through TanStack React Query
          hooks. Those
          hooks call{" "}
          <code className="rounded bg-slate-200/80 px-1.5 py-0.5 text-sm text-slate-800">
            lib/api/items.ts
          </code>
          , which issues HTTP requests to Next.js Route Handlers. The handlers
          use an in-memory store so you can try create, update, and delete
          without provisioning a database (see README for deployment limits).
        </p>

        <section className="marketing-reveal-up mt-10 space-y-3">
          <SectionHeading title="Stack" size="md" />
          <ul className="list-inside list-disc text-sm leading-relaxed text-slate-600">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="marketing-reveal-up marketing-reveal-delay-1 mt-10 space-y-4">
          <SectionHeading title="Folder map" size="md" />
          <ul className="space-y-3">
            {structure.map((row) => (
              <li key={row.path} className={noteCardClass}>
                <p className="font-mono text-sm text-[#1e3a5f]">{row.path}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {row.note}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="marketing-reveal-up marketing-reveal-delay-1 mt-10 space-y-3">
          <SectionHeading title="Data flow" size="md" />
          <p className="text-sm leading-relaxed text-slate-600">
            UI components and pages call hooks such as{" "}
            <code className="rounded bg-slate-200/80 px-1.5 py-0.5 text-sm">
              useItems
            </code>{" "}
            and mutation hooks. The hooks invoke async API helpers, which update
            the in-memory store and return fresh data to the query cache.
          </p>
        </section>

        <p className="mt-10 text-sm leading-7 text-slate-600">
          Curious how this repo came together day to day—including the AI-assisted
          parts? Read{" "}
          <Link
            href="/building-with-ai"
            data-ga-event="engineering_story_click"
            data-ga-category="portfolio_navigation"
            data-ga-label="Building this portfolio with AI and Cursor"
            data-ga-location="engineering_content"
            className="marketing-transition-standard font-medium text-[#1e3a5f] underline-offset-4 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/40 focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Building this portfolio with AI and Cursor
          </Link>
          .
        </p>

        <div className="marketing-reveal-up marketing-reveal-delay-2 mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            data-ga-event="engineering_nav_click"
            data-ga-category="portfolio_navigation"
            data-ga-label="Back to portfolio"
            data-ga-location="engineering_footer"
            className="marketing-transition-standard inline-flex items-center justify-center rounded-md border border-slate-300/90 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/35 focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Back to portfolio
          </Link>
          <Link
            href="/dashboard"
            data-ga-event="engineering_nav_click"
            data-ga-category="portfolio_navigation"
            data-ga-label="See Live Demo"
            data-ga-location="engineering_footer"
            className="marketing-transition-standard inline-flex items-center justify-center rounded-md bg-[#1e3a5f] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/45 focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            See Live Demo
          </Link>
          {SITE_GITHUB_URL ? (
            <a
              href={SITE_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              data-ga-event="engineering_nav_click"
              data-ga-category="portfolio_navigation"
              data-ga-label="View on GitHub"
              data-ga-location="engineering_footer"
              className="marketing-transition-standard inline-flex items-center justify-center rounded-md border border-slate-300/90 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/35 focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              View on GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
