"use client";

import Link from "next/link";
import ItemsTable from "@/components/dashboard/items-table";
import { useItems } from "@/hooks/useItems";

export default function ItemsPage() {
  const { data = [], isLoading, isError } = useItems();

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-600">Loading items...</div>;
  }

  if (isError) {
    return (
      <div className="p-6 text-sm text-red-600">Something went wrong.</div>
    );
  }

  return (
    <div className="min-h-full bg-[#f7f8fa] px-6 py-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold text-slate-900">Items</h1>
            <p className="max-w-2xl text-sm text-slate-500">
              Read-only catalog of portfolio items. Create, edit, and delete
              flows live on the dashboard.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-md bg-[#1e3a5f] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Manage items
          </Link>
        </div>

        <ItemsTable items={data} readOnly />
      </div>
    </div>
  );
}
