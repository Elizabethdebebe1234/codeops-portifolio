import type { Order } from "./order.types";

// The contract
export interface OrderRepository {
  byId(id: number): Order | undefined;
  all(): Order[];
}

// The in-memory implementation
export class InMemoryOrderRepository implements OrderRepository {
  private orders: Map<number, Order>;

  constructor(initialOrders: Order[] = []) {
    this.orders = new Map(
      initialOrders.map((order) => [order.id, order])
    );
  }

  byId(id: number): Order | undefined {
    return this.orders.get(id);
  }

  all(): Order[] {
    return Array.from(this.orders.values());
  }
}