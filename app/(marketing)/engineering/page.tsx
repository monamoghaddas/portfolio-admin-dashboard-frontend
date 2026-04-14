import type { Metadata } from "next";
import Link from "next/link";
import { SITE_GITHUB_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering notes",
  description:
    "How this portfolio repo is structured: App Router, React Query, Route Handlers, and the in-memory items demo.",
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
  "@tanstack/react-query",
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
    note: "React Query hooks wrapping list and mutation calls.",
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
    note: "Client fetch helpers that call the items API from React Query.",
  },
];

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1e3a5f]">
          Portfolio project
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          Engineering notes
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The interactive demo reads and writes through React Query hooks. Those
          hooks call{" "}
          <code className="rounded bg-slate-200/80 px-1.5 py-0.5 text-sm text-slate-800">
            lib/api/items.ts
          </code>
          , which issues HTTP requests to Next.js Route Handlers. The handlers
          use an in-memory store so you can try create, update, and delete
          without provisioning a database (see README for deployment limits).
        </p>

        <section className="mt-10 space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Stack</h2>
          <ul className="list-inside list-disc text-sm leading-7 text-slate-600">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Folder map</h2>
          <ul className="space-y-3">
            {structure.map((row) => (
              <li
                key={row.path}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="font-mono text-sm text-[#1e3a5f]">{row.path}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {row.note}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Data flow</h2>
          <p className="text-sm leading-7 text-slate-600">
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
            className="font-medium text-[#1e3a5f] underline-offset-2 hover:underline"
          >
            Building this portfolio with AI and Cursor
          </Link>
          .
        </p>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Back to portfolio
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-md bg-[#1e3a5f] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Open dashboard
          </Link>
          {SITE_GITHUB_URL ? (
            <a
              href={SITE_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              View on GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
