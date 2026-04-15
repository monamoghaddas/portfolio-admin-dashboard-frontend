import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  description?: ReactNode;
  /** Larger title for main marketing sections (default). */
  size?: "lg" | "md";
};

export default function SectionHeading({
  title,
  description,
  size = "lg",
}: SectionHeadingProps) {
  const titleClass =
    size === "lg"
      ? "font-display text-2xl font-semibold tracking-tight text-slate-900 md:text-[1.75rem] md:leading-snug"
      : "font-display text-lg font-semibold tracking-tight text-slate-900";

  const blockSpacing = size === "lg" ? "mb-8" : "mb-5";

  return (
    <div className={`${blockSpacing} space-y-3`}>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 shrink-0 bg-[#1e3a5f]/80" aria-hidden />
        <h2 className={titleClass}>{title}</h2>
      </div>
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-slate-500 md:pl-13">
          {description}
        </p>
      ) : null}
    </div>
  );
}
