import { NextResponse } from "next/server";
import { createItem, getItems } from "@/lib/server/items-store";
import type { Item } from "@/types/item";

function isValidStatus(status: unknown): status is Item["status"] {
  return status === "active" || status === "inactive";
}

function isValidItemPayload(payload: unknown): payload is Item {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  const item = payload as Partial<Item>;
  return (
    typeof item.id === "string" &&
    typeof item.name === "string" &&
    isValidStatus(item.status) &&
    typeof item.createdAt === "string"
  );
}

export async function GET() {
  try {
    const items = await getItems();
    return NextResponse.json(items);
  } catch {
    return NextResponse.json(
      { error: "Failed to list items" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!isValidItemPayload(body)) {
      return NextResponse.json({ error: "Invalid item payload" }, { status: 400 });
    }
    const item = await createItem(body);
    return NextResponse.json(item);
  } catch {
    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 500 },
    );
  }
}
