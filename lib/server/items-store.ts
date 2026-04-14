/**
 * In-memory item store used only by Route Handlers (`app/api/items/**`).
 *
 * On serverless hosts, each instance may have its own memory: treat CRUD as a
 * demo; data may reset between cold starts or differ per region. For durable
 * data, replace this module with a database-backed implementation.
 */
import { mockItems } from "@/lib/mock/items";
import type { Item } from "@/types/item";

let itemsDb: Item[] = [...mockItems];

function wait(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getItems(): Promise<Item[]> {
  await wait();
  return [...itemsDb];
}

export async function createItem(item: Item): Promise<Item> {
  await wait();
  itemsDb = [item, ...itemsDb];
  return item;
}

export async function updateItem(updatedItem: Item): Promise<Item> {
  await wait();

  itemsDb = itemsDb.map((row) =>
    row.id === updatedItem.id ? updatedItem : row,
  );

  return updatedItem;
}

export async function deleteItem(itemId: string): Promise<{ id: string }> {
  await wait();

  itemsDb = itemsDb.filter((row) => row.id !== itemId);

  return { id: itemId };
}
