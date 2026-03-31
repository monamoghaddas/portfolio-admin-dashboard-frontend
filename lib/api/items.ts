import { mockItems } from "@/lib/mock/items";
import { Item } from "@/types/item";

export async function getItems(): Promise<Item[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockItems;
}
