"use client";

import { useEffect } from "react";

type GaDebugIndicatorProps = {
  gaId?: string;
  isDevelopment: boolean;
};

export default function GaDebugIndicator({
  gaId,
  isDevelopment,
}: GaDebugIndicatorProps) {
  useEffect(() => {
    if (!isDevelopment) return;

    if (gaId) {
      console.info(`[GA DEBUG] NEXT_PUBLIC_GA_ID detected: ${gaId}`);
      return;
    }

    console.warn(
      "[GA DEBUG] NEXT_PUBLIC_GA_ID is missing. Google Analytics will not be injected.",
    );
  }, []);

  if (!isDevelopment) return null;

  return (
    <div className="fixed bottom-4 right-4 z-9999 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs shadow-md">
      GA ID: {gaId ?? "MISSING"}
    </div>
  );
}
