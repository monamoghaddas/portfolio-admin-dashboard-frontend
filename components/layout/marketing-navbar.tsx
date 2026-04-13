import Link from "next/link";

export default function MarketingNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          Mona Moghaddas
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#projects"
            className="text-sm font-medium text-slate-600 transition hover:text-[#1e3a5f]"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-slate-600 transition hover:text-[#1e3a5f]"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition hover:text-[#1e3a5f]"
          >
            Contact
          </a>
        </nav>

        <Link
          href="/dashboard"
          className="rounded-md bg-[#1e3a5f] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Dashboard
        </Link>
      </div>
    </header>
  );
}
