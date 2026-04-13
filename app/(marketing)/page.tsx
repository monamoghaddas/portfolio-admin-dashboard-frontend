import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    title: "Portfolio Admin Dashboard",
    description:
      "A modern dashboard built with Next.js, TypeScript, Tailwind, and React Query. Includes filtering, drawer workflows, CRUD interactions, and scalable UI architecture.",
    href: "/dashboard",
  },
  {
    title: "Engineering notes",
    description:
      "How this repo is structured: App Router layouts, data layer, React Query hooks, and the in-memory demo API that powers the UI.",
    href: "/engineering",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Query",
  "KendoReact",
  "Redux",
  "UI Architecture",
  "Design Systems",
  "Responsive UI",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(30,58,95,0.18),transparent_50%),linear-gradient(to_bottom_right,#f1f5f9,#e0e7ff,#c7d2fe)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1e3a5f]">
              Frontend Engineer Portfolio
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Building scalable, polished, and product-focused frontend
              experiences.
            </h1>

            <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              I’m a frontend engineer focused on React, TypeScript, design
              systems, and data-driven user interfaces. I build clean, reusable,
              and production-style applications with strong UX fundamentals.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md bg-[#1e3a5f] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View Project
              </Link>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Explore Work
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[420px] w-[320px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
              <Image
                src="/images/mona.jpg"
                alt="Mona Moghaddas"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900">
            Featured Work
          </h2>
          <p className="text-sm text-slate-500">
            Selected work that highlights frontend architecture, product design
            thinking, and interactive UI development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  className="inline-flex items-center text-sm font-medium text-[#1e3a5f] hover:underline"
                >
                  Open project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-4" id="skills">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Core Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16" id="workflow">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Focus</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              Frontend Architecture
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Building reusable component systems, scalable project structure,
              and maintainable UI patterns for long-term product growth.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Strength</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              Product-Focused UI
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Creating polished, user-friendly interfaces with strong hierarchy,
              responsive behavior, and thoughtful interaction design.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Workflow</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              Data-Driven Development
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Working with APIs, state management, query layers, and UI feedback
              states to create production-style frontend experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16" id="contact">
        <div className="rounded-2xl bg-[#1e3a5f] p-8 text-white shadow-sm">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold">
              Let’s build something great
            </h2>
            <p className="text-sm leading-6 text-slate-200">
              I enjoy building modern frontend applications with strong
              architecture, thoughtful UX, and scalable component systems.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-[#1e3a5f] transition hover:bg-slate-100"
              >
                Open Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
