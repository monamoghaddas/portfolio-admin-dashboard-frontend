import type { KeyboardEvent } from "react";
import StatusBadge from "@/components/ui/status-badge";
import { Item } from "@/types/item";

type ItemsTableProps = {
  items?: Item[];
  selectedItemId?: string | null;
  onRowClick?: (item: Item) => void;
  /** When true, rows are not clickable and selection styling is hidden. */
  readOnly?: boolean;
};

export default function ItemsTable({
  items = [],
  selectedItemId,
  onRowClick,
  readOnly = false,
}: ItemsTableProps) {
  if (!items.length) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto max-w-sm space-y-2">
          <h3 className="text-sm font-semibold text-slate-900">
            No items found
          </h3>
          <p className="text-sm leading-6 text-slate-500">
            {readOnly
              ? "There are no items to show yet."
              : "Try adjusting your search or filter to find what you are looking for."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr className="border-b border-slate-200">
            <th className="px-5 py-3 text-left font-semibold text-slate-700">
              Name
            </th>
            <th className="px-5 py-3 text-left font-semibold text-slate-700">
              Status
            </th>
            <th className="px-5 py-3 text-left font-semibold text-slate-700">
              Created At
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            const isSelected = !readOnly && item.id === selectedItemId;

            function activateRow() {
              if (!readOnly) onRowClick?.(item);
            }

            function onRowKeyDown(e: KeyboardEvent<HTMLTableRowElement>) {
              if (readOnly) return;
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                activateRow();
              }
            }

            return (
              <tr
                key={item.id}
                tabIndex={readOnly ? undefined : 0}
                role={readOnly ? undefined : "button"}
                aria-label={
                  readOnly
                    ? undefined
                    : `Open details for ${item.name}, ${item.status}`
                }
                aria-pressed={readOnly ? undefined : isSelected}
                onClick={readOnly ? undefined : activateRow}
                onKeyDown={readOnly ? undefined : onRowKeyDown}
                className={`border-b border-slate-100 transition-colors last:border-b-0 ${
                  readOnly
                    ? "cursor-default hover:bg-slate-50/80"
                    : `cursor-pointer outline-none focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--primary)]/30 ${isSelected ? "bg-[var(--primary)]/[0.06]" : "hover:bg-slate-50"}`
                }`}
              >
                <td className="px-5 py-4 font-medium text-slate-900">
                  <div className="flex items-center gap-3">
                    {isSelected && (
                      <span
                        className="h-2 w-2 rounded-full bg-[var(--primary)]"
                        aria-hidden
                      />
                    )}
                    <span>{item.name}</span>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <StatusBadge status={item.status} />
                </td>

                <td className="px-5 py-4 text-slate-600">{item.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
