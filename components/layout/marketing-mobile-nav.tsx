"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useId, useState } from "react";

const SECTION_LINKS = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
] as const;

const PAGE_LINKS = [{ href: "/building-with-ai", label: "How I built this" }] as const;

export default function MarketingMobileNav() {
  const [open, setOpen] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null,
  );
  const panelId = useId();

  useEffect(() => {
    if (typeof document === "undefined") return;
    setPortalContainer(document.body);
  }, []);

  useEffect(() => {
    if (!open) return;
    if (typeof document === "undefined") return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const menu =
    open ? (
      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="pointer-events-none fixed inset-0 z-100 md:hidden"
      >
        <button
          type="button"
          aria-label="Close menu"
          className="pointer-events-auto absolute inset-x-0 bottom-0 top-16 bg-slate-900/40"
          onClick={() => setOpen(false)}
        />

        <nav className="pointer-events-auto absolute left-0 top-16 flex h-[calc(100vh-4rem)] w-[min(100%,20rem)] flex-col border-r border-slate-200 bg-white shadow-xl">
          <div className="px-4 py-4">
            <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              On this page
            </p>
          </div>
          <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-4 pb-4">
            {SECTION_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/35 focus-visible:ring-offset-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {PAGE_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/35 focus-visible:ring-offset-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-slate-200 p-4">
            <Link
              href="/dashboard"
              className="flex items-center justify-center rounded-md bg-[#1e3a5f] px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/45 focus-visible:ring-offset-2"
              onClick={() => setOpen(false)}
            >
              Live Demo
            </Link>
          </div>
        </nav>
      </div>
    ) : null;

  return (
    <>
      <div className="relative z-10 flex shrink-0 items-center md:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={open ? panelId : undefined}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:bg-slate-50"
        >
          {open ? (
            <span className="text-xl leading-none" aria-hidden>
              ×
            </span>
          ) : (
            <span className="flex flex-col gap-1" aria-hidden>
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          )}
        </button>
      </div>
      {menu && portalContainer ? createPortal(menu, portalContainer) : null}
    </>
  );
}
