"use client";

import { useMemo, useState } from "react";
import ItemsTable from "@/components/dashboard/itemsTable";
import { useItems } from "@/hooks/useItems";

export default function DashboardPage() {
  const { data = [], isLoading, isError } = useItems();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredItems = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ? true : item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [data, search, statusFilter]);

  if (isLoading) {
    return <div className="p-6">Loading items...</div>;
  }

  if (isError) {
    return <div className="p-6 text-red-500">Something went wrong.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="mt-2 text-sm text-slate-600">
            Manage and explore your portfolio items.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Search by item name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none md:w-56"
            >
              <option value="all">All statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <ItemsTable items={filteredItems} />
      </div>
    </div>
  );
}
