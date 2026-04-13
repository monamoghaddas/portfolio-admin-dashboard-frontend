import { Item } from "@/types/item";

type ItemDrawerProps = {
  item: Item | null;
  isOpen: boolean;
  onClose: () => void;
};

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

export default function ItemDrawer({ item, isOpen, onClose }: ItemDrawerProps) {
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
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Item Details
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Review the selected item information.
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
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    Name
                  </p>
                  <p className="text-base font-semibold text-slate-900">
                    {item.name}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    Status
                  </p>
                  <StatusBadge status={item.status} />
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    Created At
                  </p>
                  <p className="text-sm text-slate-700">{item.createdAt}</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-900">
                    Portfolio Note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    This drawer demonstrates a common product pattern for
                    viewing and managing item details without leaving the
                    dashboard.
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
