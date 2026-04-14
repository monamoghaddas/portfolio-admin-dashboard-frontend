import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mona Moghaddas — Senior Front-End Engineer",
  description:
    "Portfolio and interactive admin dashboard demo: React, TypeScript, Next.js, TanStack Query, and modern UI patterns.",
  openGraph: {
    title: "Mona Moghaddas — Senior Front-End Engineer",
    description:
      "9+ years building scalable interfaces; featured work and live dashboard demo.",
  },
};

const featuredProjects = [
  {
    title: "Portfolio Admin Dashboard",
    description:
      "A modern dashboard built with Next.js, TypeScript, Tailwind, and React Query. Includes filtering, drawer workflows, CRUD interactions, and scalable UI architecture.",
    href: "/dashboard",
    cta: "Open project",
  },
  {
    title: "Engineering notes",
    description:
      "How this repo is structured: App Router layouts, data layer, React Query hooks, and the in-memory demo API that powers the UI.",
    href: "/engineering",
    cta: "Open project",
  },
  {
    title: "How I built this",
    description:
      "A first-person story: building the portfolio with Cursor and AI—what worked, honest risks, and why the stack fits the workflow.",
    href: "/building-with-ai",
    cta: "Read story",
  },
];

const experience = [
  {
    company: "Control Gap Inc.",
    role: "Senior Front-End Developer",
    period: "Apr 2022 - Present",
    location: "Ontario, CA (Remote)",
    highlights: [
      "Lead front-end architecture for enterprise React + TypeScript applications.",
      "Built a shared KendoReact component library to standardize UI across products.",
      "Improved performance with lazy loading, memoization, and code splitting, reducing bundle size by 25%.",
      "Mentor developers on TypeScript, React Query, and scalable UI patterns.",
    ],
  },
  {
    company: "Monark Group",
    role: "Front-End Developer",
    period: "May 2020 - May 2022",
    location: "Surrey, CA (Hybrid)",
    highlights: [
      "Developed and maintained e-commerce and prescription ordering products.",
      "Created reusable Material UI components and improved delivery speed by 30%.",
      "Integrated Storyblok CMS to let non-technical teams manage content.",
    ],
  },
  {
    company: "Kater (Monark Group)",
    role: "Front-End Developer",
    period: "Sep 2019 - Jan 2020",
    location: "Surrey, CA (Hybrid)",
    highlights: [
      "Engineered reusable form components and custom hooks for onboarding workflows.",
      "Managed complex UI state with Redux and Redux-Saga for predictable data flow.",
      "Built responsive interfaces with Bootstrap, CSS variables, and media queries.",
    ],
  },
  {
    company: "Planbox",
    role: "Front-End Developer",
    period: "Oct 2015 - Feb 2018",
    location: "Montreal, CA (On-Site)",
    highlights: [
      "Refactored enterprise React apps to improve reusability and rendering performance.",
      "Implemented responsive Sass architecture and cross-browser UI consistency.",
      "Collaborated with QA and R&D to stabilize releases and reduce frontend defects.",
    ],
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "React Query",
  "KendoReact",
  "Material UI",
  "Redux",
  "Storybook",
  "Jest / RTL / Vitest",
  "UI Architecture",
  "Design Systems",
  "Responsive UI",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(30,58,95,0.18),transparent_50%),linear-gradient(to_bottom_right,#f1f5f9,#e0e7ff,#c7d2fe)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1e3a5f]">
              Frontend Engineer Portfolio
            </p>

            <h1 className="max-w-none text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Senior Front-End Engineer building scalable, high-performance user
              interfaces.
            </h1>

            <p className="max-w-none text-base leading-7 text-slate-600 md:text-lg">
              9+ years of experience across enterprise dashboards, e-commerce,
              and data-heavy products using React, TypeScript, Next.js, and
              modern design systems.
            </p>

            <div className="flex flex-col flex-wrap gap-3 pt-2 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md bg-[#1e3a5f] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View Project
              </Link>

              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                View Experience
              </a>

              <a
                href="/resume.pdf"
                download="Mona-Moghaddas-Resume.pdf"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-xl">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  {project.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900">
            Professional Experience
          </h2>
          <p className="text-sm text-slate-500">
            Roles focused on frontend architecture, reusable component systems,
            and high-quality product delivery.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-[#1e3a5f]">
                    {item.company}
                  </p>
                </div>
                <div className="text-sm text-slate-500 md:text-right">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>- {highlight}</li>
                ))}
              </ul>
            </article>
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
              architecture, thoughtful UX, and scalable component systems. Open
              to senior frontend opportunities.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-[#1e3a5f] transition hover:bg-slate-100"
              >
                Open Dashboard
              </Link>
              <a
                href="mailto:moghaddas.mona@gmail.com"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/mona-moghaddas-0a05696b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
