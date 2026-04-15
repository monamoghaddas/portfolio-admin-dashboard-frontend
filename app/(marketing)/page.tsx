import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/marketing/section-heading";

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

type FeaturedProject = {
  title: string;
  description: string;
  href: string;
  cta: string;
  primary?: boolean;
};

const featuredProjects: FeaturedProject[] = [
  {
    title: "Portfolio Admin Dashboard",
    description:
      "A modern dashboard built with Next.js, TypeScript, Tailwind, and React Query. Includes filtering, drawer workflows, CRUD interactions, and scalable UI architecture.",
    href: "/dashboard",
    cta: "Open project",
    primary: true,
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

const cardTransition =
  "transition-[transform,box-shadow,border-color] duration-300 ease-out motion-reduce:transition-none";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <section className="relative overflow-hidden border-b border-slate-200/90 bg-[linear-gradient(to_bottom_right,#f1f5f9,#e8edf8,#d9e0ff)]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,58,95,0.2),transparent_48%),radial-gradient(circle_at_85%_15%,rgba(99,102,241,0.14),transparent_42%),radial-gradient(circle_at_50%_100%,rgba(148,163,184,0.12),transparent_55%)]"
          aria-hidden
        />
        <div
          className="marketing-hero-glow pointer-events-none absolute -right-24 -top-28 h-[min(55vw,28rem)] w-[min(55vw,28rem)] rounded-full bg-indigo-400/25 blur-3xl motion-reduce:animate-none"
          aria-hidden
        />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <div className="space-y-6">
            <p className="marketing-fade-up text-sm font-medium uppercase tracking-[0.2em] text-[#1e3a5f]">
              Frontend Engineer Portfolio
            </p>

            <h1 className="marketing-fade-up marketing-fade-up-delay font-display max-w-none text-4xl font-semibold leading-[1.12] tracking-tight text-slate-900 md:text-5xl md:leading-[1.1]">
              Senior Front-End Engineer building scalable, high-performance user
              interfaces.
            </h1>

            <p className="marketing-fade-up marketing-fade-up-delay-2 max-w-none text-base leading-[1.75] text-slate-600 md:text-lg md:leading-[1.7]">
              9+ years of experience across enterprise dashboards, e-commerce,
              and data-heavy products using React, TypeScript, Next.js, and
              modern design systems.
            </p>

            <div className="marketing-fade-up marketing-fade-up-delay-2 flex flex-col flex-wrap gap-3 pt-2 sm:flex-row">
              <Link
                href="/dashboard"
                data-ga-event="cta_dashboard_click"
                data-ga-category="portfolio_cta"
                data-ga-label="View Project"
                data-ga-location="hero"
                className="inline-flex items-center justify-center rounded-md bg-[#1e3a5f] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/45 focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                View Project
              </Link>

              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-md border border-slate-300/90 bg-white/90 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/35 focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                View Experience
              </a>

              <a
                href="/resume.pdf"
                download="Mona-Moghaddas-Resume.pdf"
                data-ga-event="cta_resume_download_click"
                data-ga-category="portfolio_cta"
                data-ga-label="Download Resume"
                data-ga-location="hero"
                className="inline-flex items-center justify-center rounded-md border border-slate-300/90 bg-white/90 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/35 focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              className={`relative rounded-full bg-gradient-to-br from-[#1e3a5f]/35 via-indigo-300/50 to-slate-100 p-[3px] shadow-[0_25px_60px_-15px_rgba(30,58,95,0.35)] ring-4 ring-white/90 ${cardTransition} motion-reduce:hover:translate-y-0`}
            >
              <div className="relative h-[314px] w-[314px] overflow-hidden rounded-full bg-slate-100 shadow-inner sm:h-[320px] sm:w-[320px]">
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
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          title="Featured Work"
          description="Selected work that highlights frontend architecture, product design thinking, and interactive UI development."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => {
            const isPrimary = Boolean(project.primary);
            const inner = (
              <div className="space-y-4">
                <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  className="inline-flex items-center text-sm font-medium text-[#1e3a5f] underline-offset-4 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/40 focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  {project.cta}
                </Link>
              </div>
            );

            if (isPrimary) {
              return (
                <div
                  key={project.title}
                  className={`group relative rounded-2xl bg-gradient-to-br from-[#1e3a5f]/35 via-indigo-400/25 to-slate-200/80 p-px shadow-sm ${cardTransition} hover:-translate-y-1 hover:shadow-xl focus-within:-translate-y-1 focus-within:shadow-xl motion-reduce:hover:translate-y-0 motion-reduce:focus-within:translate-y-0`}
                >
                  <div
                    className={`h-full rounded-[calc(1rem-1px)] border border-transparent bg-white p-6 ${cardTransition} group-hover:border-slate-200/80`}
                  >
                    {inner}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.title}
                className={`group relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm ${cardTransition} hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg focus-within:-translate-y-1 focus-within:border-slate-300 focus-within:shadow-lg motion-reduce:hover:translate-y-0 motion-reduce:focus-within:translate-y-0`}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          title="Professional Experience"
          description="Roles focused on frontend architecture, reusable component systems, and high-quality product delivery."
        />

        <div className="space-y-6">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className={`rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm ${cardTransition} hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md motion-reduce:hover:translate-y-0`}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900">
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
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-10 shrink-0 bg-[#1e3a5f]/80"
                aria-hidden
              />
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 md:text-[1.75rem] md:leading-snug">
                Core Skills
              </h2>
            </div>

            <div className="flex flex-wrap gap-2.5 md:gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200/90 bg-slate-50/90 px-4 py-2 text-sm text-slate-700 shadow-sm transition-[color,background-color,border-color,box-shadow] duration-200 hover:border-[#1e3a5f]/35 hover:bg-white hover:text-[#1e3a5f] hover:shadow-sm motion-reduce:transition-none"
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
          <div
            className={`rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm ${cardTransition} hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md motion-reduce:hover:translate-y-0`}
          >
            <p className="text-sm font-medium text-slate-500">Focus</p>
            <h3 className="font-display mt-3 text-lg font-semibold tracking-tight text-slate-900">
              Frontend Architecture
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Building reusable component systems, scalable project structure,
              and maintainable UI patterns for long-term product growth.
            </p>
          </div>

          <div
            className={`rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm ${cardTransition} hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md motion-reduce:hover:translate-y-0`}
          >
            <p className="text-sm font-medium text-slate-500">Strength</p>
            <h3 className="font-display mt-3 text-lg font-semibold tracking-tight text-slate-900">
              Product-Focused UI
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Creating polished, user-friendly interfaces with strong hierarchy,
              responsive behavior, and thoughtful interaction design.
            </p>
          </div>

          <div
            className={`rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm ${cardTransition} hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md motion-reduce:hover:translate-y-0`}
          >
            <p className="text-sm font-medium text-slate-500">Workflow</p>
            <h3 className="font-display mt-3 text-lg font-semibold tracking-tight text-slate-900">
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
        <div className="rounded-2xl bg-[#1e3a5f] p-8 text-white shadow-[0_25px_50px_-12px_rgba(30,58,95,0.45)] ring-1 ring-white/10">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-[1.75rem]">
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
                data-ga-event="cta_dashboard_click"
                data-ga-category="portfolio_cta"
                data-ga-label="Open Dashboard"
                data-ga-location="contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-[#1e3a5f] shadow-sm transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e3a5f] motion-reduce:transition-none"
              >
                Open Dashboard
              </Link>
              <a
                href="mailto:moghaddas.mona@gmail.com"
                data-ga-event="cta_email_click"
                data-ga-category="portfolio_cta"
                data-ga-label="Email Me"
                data-ga-location="contact"
                className="inline-flex items-center justify-center rounded-md border border-white/35 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e3a5f] motion-reduce:transition-none"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/mona-moghaddas-0a05696b/"
                target="_blank"
                rel="noreferrer"
                data-ga-event="cta_linkedin_click"
                data-ga-category="portfolio_cta"
                data-ga-label="LinkedIn"
                data-ga-location="contact"
                className="inline-flex items-center justify-center rounded-md border border-white/35 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e3a5f] motion-reduce:transition-none"
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
