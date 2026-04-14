import type { Metadata } from "next";
import Link from "next/link";
import PairProgrammingIllustration from "@/components/marketing/pair-programming-illustration";

export const metadata: Metadata = {
  title: "Building this portfolio with AI and Cursor",
  description:
    "A first-person story: what changed when Cursor joined the repo, what worked, what didn’t, and why the stack fits.",
  openGraph: {
    title: "Building this portfolio with AI and Cursor",
    description:
      "Lessons, leverage, honest risks, and an opinionated stack—told like a conversation, not a press release.",
  },
};

export default function BuildingWithAiPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <section
        className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(30,58,95,0.14),transparent_55%),linear-gradient(to_bottom_right,#f1f5f9,#e0e7ff,#eef2ff)]"
        aria-label="Introduction"
      >
        <div className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
            <div className="order-2 min-w-0 flex-1 lg:order-1">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1e3a5f]">
                Meta / process
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                I built this portfolio with an extremely enthusiastic pair
                programmer
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The enthusiastic part is Cursor. The “actually ships” part is
                still me—reading diffs, deciding architecture, and saying no when
                the UI looks done but the logic is doing interpretive dance.
              </p>
            </div>
            <div className="order-1 mx-auto w-full max-w-[min(100%,340px)] shrink-0 drop-shadow-md lg:order-2 lg:max-w-[380px]">
              <PairProgrammingIllustration className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 pb-16 pt-12">
        <div className="space-y-10 text-base leading-7 text-slate-600">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Why this site exists (the honest version)
            </h2>
            <p>
              I wanted a place that does two jobs at once: show how I think about
              frontend architecture, and give you something you can click
              through—not a PDF museum. A marketing home plus a dashboard-shaped
              demo felt right.
            </p>
            <p>
              Before AI-assisted workflows, the slow part wasn’t typing. It was
              context switching: bootstrapping routes, wiring data flow,
              tightening accessibility, and still finding time to write the
              “why” behind the code. My rubber duck finally talks back. It types
              a little too fast sometimes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              The shift: Cursor as pair programmer, not autopilot
            </h2>
            <p>
              I don’t hand the repo to a model and hope. I use Cursor the way I’d
              use a sharp teammate: small scopes, clear intent, and a mandate to
              preserve conventions. The project already encodes a lot of context—
              TypeScript paths, App Router layout boundaries, hooks that wrap
              HTTP calls—so the “conversation” stays grounded.
            </p>
            <p>
              The loop looks boring on purpose: describe the outcome, review the
              diff, run the app, adjust. Exciting demos come from boring loops.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              My very opinionated stack (and why I’m not sorry)
            </h2>
            <p>
              Picking tools wasn’t about chasing novelty. It was about one
              codebase that could tell a story on the marketing side and run a
              credible CRUD demo on the app side—while staying easy to review when
              churn is high.
            </p>
            <ul className="space-y-4 border-l-2 border-slate-200 pl-5">
              <li>
                <strong className="text-slate-800">Next.js (App Router) + Route Handlers.</strong>{" "}
                One framework for the landing pages and a real{" "}
                <code className="rounded bg-slate-200/80 px-1.5 py-0.5 text-sm text-slate-800">
                  /api/items
                </code>{" "}
                boundary. That matters because it mirrors how production apps are
                shaped—not a fake in-memory client pretending to be a server.
                File-based routes also make diffs scannable when someone (human
                or model) moves a lot of files at once.
              </li>
              <li>
                <strong className="text-slate-800">React 19 + TypeScript.</strong>{" "}
                The compiler is the grumpy friend who shows up when a refactor
                looks “fine.” With AI-generated edits touching multiple files,
                types are the difference between confidence and hope.
              </li>
              <li>
                <strong className="text-slate-800">TanStack React Query.</strong>{" "}
                I picked it because I didn’t want the demo to turn into
                prop-drilling fan fiction. Lists and mutations have a repeatable
                shape—query keys, mutation functions, invalidation—which models
                tend to follow well if you set the pattern once.
              </li>
              <li>
                <strong className="text-slate-800">Tailwind CSS v4.</strong>{" "}
                Fast UI iteration without a pile of one-off stylesheets to
                reconcile after JSX changes. It keeps the visual language
                consistent when you’re moving quickly.
              </li>
              <li>
                <strong className="text-slate-800">Vitest + Testing Library + jsdom.</strong>{" "}
                Lightweight guardrails for components and hooks. When the UI
                starts moving fast, tests are where I lock in behavior I care
                about—without pretending every line is covered.
              </li>
              <li>
                <strong className="text-slate-800">ESLint (eslint-config-next).</strong>{" "}
                A baseline gate in CI that complements human review when there’s a
                lot of churn in one sitting.
              </li>
              <li>
                <strong className="text-slate-800">Sonner.</strong>{" "}
                Toasts are a small thing that makes the demo feel like a product
                instead of a wireframe with ambition.
              </li>
            </ul>
            <p>
              Typed boundaries, predictable data-fetch patterns, and file
              conventions mean smaller, reviewable diffs—which matters more than
              raw generation speed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              What I actually learned (the habits, not the hype)
            </h2>
            <ul className="list-inside list-disc space-y-2 pl-1">
              <li>
                Tight prompts beat vague ones. “Make it better” produces art. “Add
                focus trap and return focus on close” produces software.
              </li>
              <li>
                Small scopes keep quality high. If the diff is huge, I split the
                task—or I pay for it later with a very educational debugging
                session.
              </li>
              <li>
                The repo is the source of truth—not the chat. If it isn’t in git,
                it didn’t happen.
              </li>
              <li>
                I say no a lot. The first answer is often plausible. The second
                glance is where seniority shows up.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              What Cursor is actually good at (spoiler: not “vibes”)
            </h2>
            <p>
              Boilerplate and scaffolding. Exploring APIs and patterns I haven’t
              touched in a week. Drafting accessibility improvements. Refactors
              that need consistency across files. Spinning up CI and test
              harness pieces when I’d rather focus on UX correctness.
            </p>
            <p>
              It’s also surprisingly good at being wrong with confidence—which is
              why the workflow only works with review.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              The part where I stopped trusting the green diff
            </h2>
            <p>
              Over-trust is the big one. The UI can look finished while the edge
              cases are on vacation. Subtle logic bugs love AI-assisted velocity
              because they ship faster now too.
            </p>
            <p>
              Security hygiene still matters: I treat chat like a crowded room—no
              secrets, no tokens, no “just paste this env file.” Dependency bloat
              creeps in if every suggestion becomes a merge. And if I never
              rewrite for my own voice, the site reads like everyone else’s—which
              defeats the point of a portfolio.
            </p>
            <p>
              My answer isn’t fear; it’s process. Smaller changes, tests where
              they earn their keep, lint in CI, and a personal rule: if I can’t
              explain a change, it doesn’t ship.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              How I use it in real life
            </h2>
            <p>
              I’m still the owner of architecture, UX judgment, and tradeoffs.
              AI is leverage for a senior IC—not a replacement for one. The
              parts I refuse to outsource are taste, prioritization, and the
              boring work of making something hold up under scrutiny.
            </p>
          </section>

          <p className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-600 shadow-sm">
            <strong className="text-slate-800">Disclaimer:</strong> This is my
            personal experience building this repo—not a sponsored post, and not
            a claim that every team should work the same way.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Back to portfolio
          </Link>
          <Link
            href="/engineering"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Engineering notes
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-md bg-[#1e3a5f] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Open dashboard
          </Link>
        </div>
      </article>
    </div>
  );
}
