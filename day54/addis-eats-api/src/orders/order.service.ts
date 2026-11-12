import type { Area, Order } from "./order.types";
import { OrderNotFoundError } from "./order.errors";
import type { OrderRepository } from "./order.repository";

export class OrderService {
  constructor(
    private readonly repository: OrderRepository
  ) {}

  // Find one order
  find(id: number): Order {
    const order = this.repository.byId(id);

    if (!order) {
      throw new OrderNotFoundError(id);
    }

    return order;
  }

  // Delivery fees for every area
  feesByArea(): Record<Area, number> {
    return {
      Bole: 4000,
      Kazanchis: 6000,
      Piassa: 6000,
      Megenagna: 6000,
    };
  }

  // Get one selected property from every order
  summarise<K extends keyof Order>(key: K): Order[K][] {
    return this.repository.all().map((order) => order[key]);
  }
}