import { useQuery } from "@tanstack/react-query";
import { getItems } from "@/lib/api/items";

export function useItems() {
  return useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });
}
