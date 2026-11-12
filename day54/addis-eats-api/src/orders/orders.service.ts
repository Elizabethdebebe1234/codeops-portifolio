
import { Inject, Injectable } from "@nestjs/common";
import type { Area, Order } from "./order.types";
import { OrderNotFoundError } from "./order.errors";
import type { OrderRepository } from "./order.repository";
import { ORDER_REPOSITORY } from "./order.tokens";

@Injectable()
export class OrderService {
  constructor(
    @Inject(ORDER_REPOSITORY)
    private readonly repository: OrderRepository
  ) {}

  find(id: number): Order {
    const order = this.repository.byId(id);

    if (!order) {
      throw new OrderNotFoundError(id);
    }

    return order;
  }

  findAll(): Order[] {
    return this.repository.all();
  }

  create(data: Pick<Order, "name" | "area" | "dishes">): Order {
    const orders = this.repository.all();

    const newId =
      orders.length === 0
        ? 1
        : Math.max(...orders.map((order) => order.id)) + 1;

    const totalSantim = data.dishes.reduce(
      (total, dish) => total + dish.priceSantim,
      0
    );

    const newOrder: Order = {
      id: newId,
      name: data.name,
      area: data.area,
      status: "PENDING",
      dishes: data.dishes,
      totalSantim,
    };

    return this.repository.save(newOrder);
  }

  feesByArea(): Record<Area, number> {
    return {
      Bole: 4000,
      Kazanchis: 6000,
      Piassa: 6000,
      Megenagna: 6000,
    };
  }

  summarise<K extends keyof Order>(key: K): Order[K][] {
    return this.repository.all().map((order) => order[key]);
  }
}
