import { Item } from "@/types/item";

type ItemsTableProps = {
  items?: Item[];
  onRowClick?: (item: Item) => void;
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

export default function ItemsTable({
  items = [],
  onRowClick,
}: ItemsTableProps) {
  if (!items.length) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto max-w-sm space-y-2">
          <h3 className="text-sm font-semibold text-slate-900">
            No items found
          </h3>
          <p className="text-sm leading-6 text-slate-500">
            Try adjusting your search or filter to find what you are looking
            for.
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
          {items.map((item) => (
            <tr
              key={item.id}
              onClick={() => onRowClick?.(item)}
              className="cursor-pointer border-b border-slate-100 transition-colors hover:bg-slate-50 last:border-b-0"
            >
              <td className="px-5 py-4 font-medium text-slate-900">
                {item.name}
              </td>
              <td className="px-5 py-4">
                <StatusBadge status={item.status} />
              </td>
              <td className="px-5 py-4 text-slate-600">{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
