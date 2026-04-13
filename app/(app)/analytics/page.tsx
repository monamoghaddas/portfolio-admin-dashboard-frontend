"use client";

import { useMemo } from "react";
import { useItems } from "@/hooks/useItems";
import type { Item } from "@/types/item";

function newestItem(items: Item[]) {
  if (!items.length) return null;
  return [...items].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )[0];
}

export default function AnalyticsPage() {
  const { data = [], isLoading, isError } = useItems();

  const stats = useMemo(() => {
    const total = data.length;
    const active = data.filter((i) => i.status === "active").length;
    const inactive = data.filter((i) => i.status === "inactive").length;
    const activePct = total ? Math.round((active / total) * 100) : 0;
    const inactivePct = total ? Math.round((inactive / total) * 100) : 0;
    const recent = newestItem(data);
    const sortedByDate = [...data].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    return {
      total,
      active,
      inactive,
      activePct,
      inactivePct,
      recent,
      sortedByDate,
    };
  }, [data]);

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-600">Loading analytics...</div>;
  }

  if (isError) {
    return (
      <div className="p-6 text-sm text-red-600">Something went wrong.</div>
    );
  }

  return (
    <div className="min-h-full bg-[#f7f8fa] px-6 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-slate-900">Analytics</h1>
          <p className="text-sm text-slate-500">
            Derived from the same in-memory item set as the dashboard (demo
            data).
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total items</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {stats.total}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Active</p>
            <p className="mt-2 text-2xl font-semibold text-emerald-700">
              {stats.active}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Inactive</p>
            <p className="mt-2 text-2xl font-semibold text-slate-700">
              {stats.inactive}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            Status distribution
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Share of items by status (percentages are rounded).
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <div className="mb-1 flex justify-between text-xs text-slate-600">
                <span>Active</span>
                <span>
                  {stats.active} ({stats.activePct}%)
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-[width]"
                  style={{ width: `${stats.activePct}%` }}
                />
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-xs text-slate-600">
                <span>Inactive</span>
                <span>
                  {stats.inactive} ({stats.inactivePct}%)
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-slate-400 transition-[width]"
                  style={{ width: `${stats.inactivePct}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">
              Newest item
            </h2>
            {stats.recent ? (
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Name</dt>
                  <dd className="font-medium text-slate-900">
                    {stats.recent.name}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Status</dt>
                  <dd className="text-slate-900">{stats.recent.status}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Created</dt>
                  <dd className="text-slate-900">{stats.recent.createdAt}</dd>
                </div>
              </dl>
            ) : (
              <p className="mt-4 text-sm text-slate-500">No items yet.</p>
            )}
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">
              Recent activity
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Items sorted by <code className="text-slate-600">createdAt</code>{" "}
              descending.
            </p>
            <ul className="mt-4 space-y-3">
              {stats.sortedByDate.slice(0, 5).map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 text-sm last:border-b-0 last:pb-0"
                >
                  <span className="font-medium text-slate-900">{item.name}</span>
                  <span className="shrink-0 text-xs text-slate-500">
                    {item.createdAt}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
