import { Item } from "@/types/item";

type StatusBadgeProps = {
  status: Item["status"];
};

export default function StatusBadge({ status }: StatusBadgeProps) {
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
