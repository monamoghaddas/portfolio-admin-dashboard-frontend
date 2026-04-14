"use client";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 p-6">
      <p className="max-w-md text-center text-sm text-red-600">
        {error.message || "Something went wrong."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[var(--primary-foreground)] transition hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
