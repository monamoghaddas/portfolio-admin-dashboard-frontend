"use client";

import { useEffect, useId, useRef, useState } from "react";
import StatusBadge from "@/components/ui/status-badge";
import { Item } from "@/types/item";

type ItemDrawerProps = {
  item: Item | null;
  isOpen: boolean;
  isCreateMode?: boolean;
  isSaving?: boolean;
  isDeleting?: boolean;
  onClose: () => void;
  onSave: (item: Item) => Promise<void> | void;
  onDelete: (itemId: string) => Promise<void> | void;
};

type FormValues = {
  name: string;
  status: Item["status"];
  createdAt: string;
};

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFormValues(item: Item | null, isCreateMode: boolean): FormValues {
  if (isCreateMode) {
    return {
      name: "",
      status: "active",
      createdAt: new Date().toISOString().split("T")[0],
    };
  }

  return {
    name: item?.name ?? "",
    status: item?.status ?? "active",
    createdAt: item?.createdAt ?? "",
  };
}

export default function ItemDrawer({
  item,
  isOpen,
  isCreateMode = false,
  isSaving = false,
  isDeleting = false,
  onClose,
  onSave,
  onDelete,
}: ItemDrawerProps) {
  const titleId = useId();
  const subtitleId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const [isEditing, setIsEditing] = useState(isCreateMode);
  const [formValues, setFormValues] = useState<FormValues>(() =>
    getFormValues(item, isCreateMode),
  );

  const isBusy = isSaving || isDeleting;
  const isNameEmpty = !formValues.name.trim();

  useEffect(() => {
    if (!isOpen) return;

    returnFocusRef.current = document.activeElement as HTMLElement | null;
    const id = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && !isBusy) {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab" || !panelRef.current) return;

      const list = [
        ...panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ];
      if (!list.length) return;

      const first = list[0];
      const last = list[list.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, isBusy, onClose]);

  useEffect(() => {
    if (isOpen) return;
    const el = returnFocusRef.current;
    if (el && typeof el.focus === "function" && document.body.contains(el)) {
      el.focus();
    }
    returnFocusRef.current = null;
  }, [isOpen]);

  function handleFieldChange<K extends keyof FormValues>(
    field: K,
    value: FormValues[K],
  ) {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSave() {
    if (isNameEmpty || isBusy) return;

    const nextItem: Item = {
      id: item?.id ?? crypto.randomUUID(),
      ...formValues,
      name: formValues.name.trim(),
    };

    await onSave(nextItem);
    setIsEditing(false);
  }

  function handleCancel() {
    if (isBusy) return;

    if (isCreateMode) {
      onClose();
      return;
    }

    setFormValues(getFormValues(item, false));
    setIsEditing(false);
  }

  async function handleDelete() {
    if (!item || isBusy) return;
    await onDelete(item.id);
  }

  const title = isCreateMode ? "Create Item" : "Item Details";
  const subtitle = isCreateMode
    ? "Add a new item to your dashboard."
    : "Review and update the selected item.";

  return (
    <>
      <button
        type="button"
        aria-label="Close panel"
        onClick={isBusy ? undefined : onClose}
        tabIndex={-1}
        className={`fixed inset-0 z-40 bg-slate-900/30 transition-opacity ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={subtitleId}
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
        className={`fixed top-14 right-0 z-50 h-[calc(100vh-56px)] w-full max-w-md transform border-l border-slate-200 bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between border-b border-slate-200 px-6 py-4">
            <div>
              <p id={titleId} className="text-sm font-semibold text-slate-900">
                {title}
              </p>
              <p id={subtitleId} className="mt-1 text-xs text-slate-500">
                {subtitle}
              </p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              disabled={isBusy}
              aria-label="Close item panel"
              className="rounded-md px-2 py-1 text-sm text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span aria-hidden>×</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {item || isCreateMode ? (
              <div className="space-y-6">
                {!isCreateMode && (
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-slate-900">
                      {isEditing ? "Edit Mode" : "View Mode"}
                    </p>

                    {!isEditing ? (
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={handleDelete}
                          disabled={isBusy}
                          className="rounded-md border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {isDeleting ? "Deleting..." : "Delete"}
                        </button>

                        <button
                          type="button"
                          onClick={() => setIsEditing(true)}
                          disabled={isBusy}
                          className="rounded-md bg-[var(--primary)] px-3 py-2 text-sm font-medium text-[var(--primary-foreground)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Edit
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={handleCancel}
                          disabled={isBusy}
                          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Cancel
                        </button>

                        <button
                          type="button"
                          onClick={handleSave}
                          disabled={isBusy || isNameEmpty}
                          className="rounded-md bg-[var(--primary)] px-3 py-2 text-sm font-medium text-[var(--primary-foreground)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {isSaving ? "Saving..." : "Save"}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {isCreateMode && (
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={handleCancel}
                      disabled={isBusy}
                      className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      onClick={handleSave}
                      disabled={isBusy || isNameEmpty}
                      className="rounded-md bg-[var(--primary)] px-3 py-2 text-sm font-medium text-[var(--primary-foreground)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSaving ? "Creating..." : "Create"}
                    </button>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    Name
                  </p>

                  {isEditing || isCreateMode ? (
                    <input
                      type="text"
                      value={formValues.name}
                      onChange={(e) =>
                        handleFieldChange("name", e.target.value)
                      }
                      disabled={isBusy}
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
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

                  {isEditing || isCreateMode ? (
                    <div className="relative w-full">
                      <select
                        value={formValues.status}
                        onChange={(e) =>
                          handleFieldChange(
                            "status",
                            e.target.value as Item["status"],
                          )
                        }
                        disabled={isBusy}
                        className="w-full appearance-none rounded-md border border-slate-300 bg-white px-3 py-2 pr-10 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                        <span className="text-xs" aria-hidden>
                          {"\u25be"}
                        </span>
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

                  {isEditing || isCreateMode ? (
                    <input
                      type="date"
                      value={formValues.createdAt}
                      onChange={(e) =>
                        handleFieldChange("createdAt", e.target.value)
                      }
                      disabled={isBusy}
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70"
                    />
                  ) : (
                    <p className="text-sm text-slate-700">
                      {formValues.createdAt}
                    </p>
                  )}
                </div>

                {isNameEmpty && (isEditing || isCreateMode) && (
                  <p className="text-sm text-red-600">Name is required.</p>
                )}

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-900">
                    Portfolio Note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    This drawer demonstrates create, edit, and delete flows in a
                    shared component, with React Query cache updates.
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
