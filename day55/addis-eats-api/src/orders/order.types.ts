// Delivery areas
export const AREAS = [
  "Bole",
  "Kazanchis",
  "Piassa",
  "Megenagna",
] as const;

export type Area = (typeof AREAS)[number];

// Five possible order statuses
export type OrderStatus =
  | "PENDING"
  | "PREPARING"
  | "READY"
  | "ON_THE_WAY"
  | "DELIVERED";

// Dish information
export interface Dish {
  name: string;
  priceSantim: number;
}

// Order information
export interface Order {
  id: number;
  name: string;
  area: Area;
  status: OrderStatus;
  dishes: Dish[];
  totalSantim: number;
}