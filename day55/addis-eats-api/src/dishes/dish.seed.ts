import type { Dish } from "./dish.types";

export const dishSeed: Dish[] = [
  { id: 1, restaurantId: 1, name: "Doro Wat", priceSantim: 12000 },
  { id: 2, restaurantId: 1, name: "Tibs", priceSantim: 18000 },
  { id: 3, restaurantId: 2, name: "Kitfo", priceSantim: 20000 },
  { id: 4, restaurantId: 2, name: "Shiro", priceSantim: 8000 },
  { id: 5, restaurantId: 3, name: "Beyaynet", priceSantim: 10000 },
  { id: 6, restaurantId: 3, name: "Firfir", priceSantim: 9000 },
  { id: 7, restaurantId: 4, name: "Gored Gored", priceSantim: 22000 },
  { id: 8, restaurantId: 4, name: "Dulet", priceSantim: 15000 },
];