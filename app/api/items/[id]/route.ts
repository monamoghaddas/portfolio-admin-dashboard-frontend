import { NextResponse } from "next/server";
import { deleteItem, updateItem } from "@/lib/server/items-store";
import type { Item } from "@/types/item";

type RouteContext = { params: Promise<{ id: string }> };

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

export async function PATCH(request: Request, context: RouteContext) {
  const { id } = await context.params;

  try {
    const body: unknown = await request.json();
    if (!isValidItemPayload(body)) {
      return NextResponse.json({ error: "Invalid item payload" }, { status: 400 });
    }
    if (body.id !== id) {
      return NextResponse.json({ error: "ID mismatch" }, { status: 400 });
    }
    const item = await updateItem(body);
    return NextResponse.json(item);
  } catch {
    return NextResponse.json(
      { error: "Failed to update item" },
      { status: 500 },
    );
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const { id } = await context.params;

  try {
    const result = await deleteItem(id);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Failed to delete item" },
      { status: 500 },
    );
  }
}
