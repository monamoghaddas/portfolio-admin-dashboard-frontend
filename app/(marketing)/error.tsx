"use client";

export default function MarketingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 p-6">
      <p className="max-w-md text-center text-sm text-red-600">
        {error.message || "Something went wrong."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
      >
        Try again
      </button>
    </div>
  );
}
