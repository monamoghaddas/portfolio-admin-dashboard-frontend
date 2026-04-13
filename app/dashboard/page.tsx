"use client";

import { useMemo, useState } from "react";
import ItemDrawer from "@/components/dashboard/item-drawer";
import ItemsTable from "@/components/dashboard/items-table";
import { useItems } from "@/hooks/useItems";
import { Item } from "@/types/item";

export default function DashboardPage() {
  const { data = [], isLoading, isError } = useItems();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [localItems, setLocalItems] = useState<Item[]>([]);

  const sourceItems = localItems.length ? localItems : data;

  const totalItems = sourceItems.length;
  const activeItems = sourceItems.filter(
    (item) => item.status === "active",
  ).length;
  const inactiveItems = sourceItems.filter(
    (item) => item.status === "inactive",
  ).length;

  const filteredItems = useMemo(() => {
    return sourceItems.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ? true : item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [sourceItems, search, statusFilter]);

  function handleRowClick(item: Item) {
    setSelectedItem(item);
    setIsDrawerOpen(true);
  }

  function handleCloseDrawer() {
    setIsDrawerOpen(false);
  }

  function handleSaveItem(updatedItem: Item) {
    const nextItems =
      localItems.length > 0
        ? localItems.map((item) =>
            item.id === updatedItem.id ? updatedItem : item,
          )
        : data.map((item) => (item.id === updatedItem.id ? updatedItem : item));

    setLocalItems(nextItems);
    setSelectedItem(updatedItem);
  }

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-600">Loading items...</div>;
  }

  if (isError) {
    return (
      <div className="p-6 text-sm text-red-600">Something went wrong.</div>
    );
  }

  return (
    <>
      <div className="min-h-full bg-[#f7f8fa] px-6 py-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
            <p className="text-sm text-slate-500">
              Manage and explore your portfolio items.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Total Items</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                {totalItems}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Active</p>
              <p className="mt-2 text-2xl font-semibold text-emerald-700">
                {activeItems}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Inactive</p>
              <p className="mt-2 text-2xl font-semibold text-slate-700">
                {inactiveItems}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="Search items..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10"
              />

              <div className="relative w-full md:w-48">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-slate-900 outline-none transition focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10"
                >
                  <option value="all">All</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                  <span className="text-xs">▾</span>
                </div>
              </div>
            </div>
          </div>

          <ItemsTable items={filteredItems} onRowClick={handleRowClick} />
        </div>
      </div>

      <ItemDrawer
        key={selectedItem?.id ?? "empty"}
        item={selectedItem}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onSave={handleSaveItem}
      />
    </>
  );
}
