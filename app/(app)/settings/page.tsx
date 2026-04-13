"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { toast } from "sonner";
import {
  defaultDemoSettings,
  parseDemoSettings,
  SETTINGS_STORAGE_KEY,
  type DemoSettings,
} from "@/lib/settings/preferences";

const SETTINGS_EVENT = "portfolio-demo-settings-updated";

let snapshotCache: { raw: string; value: DemoSettings } | null = null;

function readStoredSettings(): DemoSettings {
  if (typeof window === "undefined") return defaultDemoSettings;
  const raw = window.localStorage.getItem(SETTINGS_STORAGE_KEY) ?? "";
  if (snapshotCache && snapshotCache.raw === raw) {
    return snapshotCache.value;
  }
  const value = raw ? parseDemoSettings(raw) : defaultDemoSettings;
  snapshotCache = { raw, value };
  return value;
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === SETTINGS_STORAGE_KEY || event.key === null) {
      callback();
    }
  };
  const onLocal = () => callback();
  window.addEventListener("storage", onStorage);
  window.addEventListener(SETTINGS_EVENT, onLocal);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(SETTINGS_EVENT, onLocal);
  };
}

export default function SettingsPage() {
  const persisted = useSyncExternalStore(
    subscribe,
    readStoredSettings,
    () => defaultDemoSettings,
  );

  const [draft, setDraft] = useState<DemoSettings>(defaultDemoSettings);

  useEffect(() => {
    // Sync from localStorage after mount and when other tabs (or Save) update the store.
    setDraft(persisted);
  }, [persisted]);

  const update = useCallback(
    <K extends keyof DemoSettings>(key: K, value: DemoSettings[K]) => {
      setDraft((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  function handleSave() {
    try {
      window.localStorage.setItem(
        SETTINGS_STORAGE_KEY,
        JSON.stringify(draft),
      );
      window.dispatchEvent(new Event(SETTINGS_EVENT));
      toast.success("Settings saved locally.");
    } catch {
      toast.error("Could not save settings.");
    }
  }

  return (
    <div className="min-h-full bg-[#f7f8fa] px-6 py-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
          <p className="text-sm text-slate-500">
            Demo preferences stored in your browser (
            <code className="text-slate-600">localStorage</code>). No account or
            server.
          </p>
        </div>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">Notifications</h2>
          <p className="mt-1 text-xs text-slate-500">
            Toggle UI only; this portfolio app does not send email.
          </p>

          <div className="mt-6 space-y-4">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1e3a5f] focus:ring-[#1e3a5f]/30"
                checked={draft.emailNotifications}
                onChange={(e) =>
                  update("emailNotifications", e.target.checked)
                }
              />
              <span>
                <span className="block text-sm font-medium text-slate-900">
                  Email notifications
                </span>
                <span className="block text-xs text-slate-500">
                  Surface a realistic notifications preference control.
                </span>
              </span>
            </label>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1e3a5f] focus:ring-[#1e3a5f]/30"
                checked={draft.productUpdates}
                onChange={(e) => update("productUpdates", e.target.checked)}
              />
              <span>
                <span className="block text-sm font-medium text-slate-900">
                  Product updates
                </span>
                <span className="block text-xs text-slate-500">
                  Occasional changelog-style nudges (demo only).
                </span>
              </span>
            </label>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">Display</h2>
          <p className="mt-1 text-xs text-slate-500">
            Stored for future UI tweaks; tables currently use the default
            density.
          </p>

          <div className="mt-6">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1e3a5f] focus:ring-[#1e3a5f]/30"
                checked={draft.compactTables}
                onChange={(e) => update("compactTables", e.target.checked)}
              />
              <span>
                <span className="block text-sm font-medium text-slate-900">
                  Compact tables
                </span>
                <span className="block text-xs text-slate-500">
                  Prefer tighter row spacing when supported.
                </span>
              </span>
            </label>
          </div>
        </section>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center justify-center rounded-md bg-[#1e3a5f] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Save settings
          </button>
        </div>
      </div>
    </div>
  );
}
