import Link from "next/link";
import MobileNav from "@/components/layout/mobile-nav";

export default function Topbar() {
  return (
    <header className="w-full border-b border-slate-200 bg-[var(--primary)] text-white">
      <div className="mx-auto flex h-14 items-center justify-between px-6">
        <div className="flex min-w-0 items-center gap-3 md:gap-4">
          <MobileNav />
          <h1 className="truncate text-sm font-semibold tracking-wide">
            Portfolio Dashboard
          </h1>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <span className="hidden text-xs text-slate-200 sm:inline">
            Frontend Portfolio
          </span>
          <Link
            href="/"
            className="rounded-md border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20"
          >
            Back to site
          </Link>
        </div>
      </div>
    </header>
  );
}
