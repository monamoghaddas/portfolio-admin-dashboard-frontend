import { Item } from "@/types/item";

type ItemsTableProps = {
  items: Item[];
};

export default function ItemsTable({ items }: ItemsTableProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-md border border-slate-200 p-6 text-sm text-slate-500">
        No items found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr className="border-b border-slate-200">
            <th className="px-4 py-3 text-left font-medium text-slate-700">
              Name
            </th>
            <th className="px-4 py-3 text-left font-medium text-slate-700">
              Status
            </th>
            <th className="px-4 py-3 text-left font-medium text-slate-700">
              Created At
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-100 last:border-b-0"
            >
              <td className="px-4 py-3 text-slate-900">{item.name}</td>
              <td className="px-4 py-3 capitalize text-slate-700">
                {item.status}
              </td>
              <td className="px-4 py-3 text-slate-700">{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
