export type ItemStatus = "active" | "inactive";

export interface Item {
  id: string;
  name: string;
  status: ItemStatus;
  createdAt: string;
}
