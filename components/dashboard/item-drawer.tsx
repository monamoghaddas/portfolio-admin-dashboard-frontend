"use client";

import { useState } from "react";
import { Item } from "@/types/item";

type ItemDrawerProps = {
  item: Item | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedItem: Item) => void;
};

type FormValues = {
  name: string;
  status: Item["status"];
  createdAt: string;
};

function getFormValues(item: Item | null): FormValues {
  return {
    name: item?.name ?? "",
    status: item?.status ?? "active",
    createdAt: item?.createdAt ?? "",
  };
}

function StatusBadge({ status }: { status: Item["status"] }) {
  const isActive = status === "active";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
        isActive
          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
          : "bg-slate-100 text-slate-600 ring-1 ring-slate-200"
      }`}
    >
      {isActive ? "Active" : "Inactive"}
    </span>
  );
}

export default function ItemDrawer({
  item,
  isOpen,
  onClose,
  onSave,
}: ItemDrawerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>(() =>
    getFormValues(item),
  );

  function handleFieldChange<K extends keyof FormValues>(
    field: K,
    value: FormValues[K],
  ) {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSave() {
    if (!item) return;

    onSave({
      ...item,
      ...formValues,
    });

    setIsEditing(false);
  }

  function handleCancel() {
    setFormValues(getFormValues(item));
    setIsEditing(false);
  }

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-slate-900/30 transition-opacity ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed top-14 right-0 z-50 h-[calc(100vh-56px)] w-full max-w-md transform border-l border-slate-200 bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between border-b border-slate-200 px-6 py-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Item Details
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Review and update the selected item.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-md px-2 py-1 text-sm text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {item ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-900">
                    {isEditing ? "Edit Mode" : "View Mode"}
                  </p>

                  {!isEditing ? (
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="rounded-md bg-[#1e3a5f] px-3 py-2 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Edit
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        onClick={handleSave}
                        className="rounded-md bg-[#1e3a5f] px-3 py-2 text-sm font-medium text-white transition hover:opacity-90"
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    Name
                  </p>

                  {isEditing ? (
                    <input
                      type="text"
                      value={formValues.name}
                      onChange={(e) =>
                        handleFieldChange("name", e.target.value)
                      }
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10"
                    />
                  ) : (
                    <p className="text-base font-semibold text-slate-900">
                      {formValues.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    Status
                  </p>

                  {isEditing ? (
                    <div className="relative w-full">
                      <select
                        value={formValues.status}
                        onChange={(e) =>
                          handleFieldChange(
                            "status",
                            e.target.value as Item["status"],
                          )
                        }
                        className="w-full appearance-none rounded-md border border-slate-300 bg-white px-3 py-2 pr-10 text-sm text-slate-900 outline-none transition focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                        <span className="text-xs">▾</span>
                      </div>
                    </div>
                  ) : (
                    <StatusBadge status={formValues.status} />
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    Created At
                  </p>

                  {isEditing ? (
                    <input
                      type="date"
                      value={formValues.createdAt}
                      onChange={(e) =>
                        handleFieldChange("createdAt", e.target.value)
                      }
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10"
                    />
                  ) : (
                    <p className="text-sm text-slate-700">
                      {formValues.createdAt}
                    </p>
                  )}
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-900">
                    Portfolio Note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    This drawer demonstrates a master-detail workflow with local
                    edit state, controlled inputs, and inline editing patterns.
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">
                No item selected.
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
