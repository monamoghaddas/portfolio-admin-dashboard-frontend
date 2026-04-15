import Link from "next/link";
import MarketingMobileNav from "@/components/layout/marketing-mobile-nav";

export default function MarketingNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/75 shadow-sm backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-white/65">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-2 px-4 py-4 sm:gap-3 sm:px-6 md:gap-4">
        <MarketingMobileNav />

        <Link
          href="/"
          className="min-w-0 flex-1 truncate text-base font-semibold tracking-tight text-slate-900 sm:text-lg md:flex-initial focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/35 focus-visible:ring-offset-2"
        >
          Mona Moghaddas
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          <a
            href="#experience"
            className="text-sm font-medium text-slate-600 transition hover:text-[#1e3a5f] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/35 focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-slate-600 transition hover:text-[#1e3a5f] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/35 focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Projects
          </a>
          <Link
            href="/building-with-ai"
            className="text-sm font-medium text-slate-600 transition hover:text-[#1e3a5f] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/35 focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            How I built this
          </Link>
          <a
            href="#skills"
            className="text-sm font-medium text-slate-600 transition hover:text-[#1e3a5f] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/35 focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition hover:text-[#1e3a5f] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/35 focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Contact
          </a>
        </nav>

        <Link
          href="/dashboard"
          className="hidden shrink-0 rounded-md bg-[#1e3a5f] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/50 focus-visible:ring-offset-2 motion-reduce:transition-none md:ml-auto md:inline-flex md:items-center md:justify-center"
        >
          Dashboard
        </Link>
      </div>
    </header>
  );
}
