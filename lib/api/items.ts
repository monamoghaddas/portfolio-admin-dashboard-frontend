import type { Item } from "@/types/item";

async function parseJson<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

/** Client-side fetch to Route Handlers; use only from the browser or `queryFn` / `mutationFn`. */
export async function getItems(): Promise<Item[]> {
  const res = await fetch("/api/items", { cache: "no-store" });
  return parseJson<Item[]>(res);
}

export async function createItem(item: Item): Promise<Item> {
  const res = await fetch("/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return parseJson<Item>(res);
}

export async function updateItem(updatedItem: Item): Promise<Item> {
  const res = await fetch(`/api/items/${encodeURIComponent(updatedItem.id)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedItem),
  });
  return parseJson<Item>(res);
}

export async function deleteItem(itemId: string): Promise<{ id: string }> {
  const res = await fetch(`/api/items/${encodeURIComponent(itemId)}`, {
    method: "DELETE",
  });
  return parseJson<{ id: string }>(res);
}
