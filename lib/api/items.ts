import { mockItems } from "@/lib/mock/items";
import { Item } from "@/types/item";

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

  itemsDb = itemsDb.map((item) =>
    item.id === updatedItem.id ? updatedItem : item,
  );

  return updatedItem;
}

export async function deleteItem(itemId: string): Promise<{ id: string }> {
  await wait();

  itemsDb = itemsDb.filter((item) => item.id !== itemId);

  return { id: itemId };
}
