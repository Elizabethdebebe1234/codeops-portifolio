
import type { Order } from "./orders/order.types";

export const seedOrders: Order[] = [
  {
    id: 1,
    name: "Abebe",
    area: "Bole",
    status: "PENDING",
    dishes: [
      { name: "Doro Wat", priceSantim: 12000 },
      { name: "Injera", priceSantim: 3000 },
    ],
    totalSantim: 15000,
  },
  {
    id: 2,
    name: "Sara",
    area: "Kazanchis",
    status: "PREPARING",
    dishes: [
      { name: "Tibs", priceSantim: 18000 },
    ],
    totalSantim: 18000,
  },
  {
    id: 3,
    name: "Dawit",
    area: "Piassa",
    status: "READY",
    dishes: [
      { name: "Shiro", priceSantim: 8000 },
      { name: "Injera", priceSantim: 2000 },
    ],
    totalSantim: 10000,
  },
];
