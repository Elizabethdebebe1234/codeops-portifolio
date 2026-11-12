
import { Module } from "@nestjs/common";
import { OrdersController } from "./orders.controller";
import { OrderService } from "./orders.service";
import { ORDER_REPOSITORY } from "./order.tokens";
import { InMemoryOrderRepository } from "./order.repository";
import { seedOrders } from "../seed-orders";

@Module({
  controllers: [OrdersController],
  providers: [
    OrderService,
    {
      provide: ORDER_REPOSITORY,
      useFactory: () => new InMemoryOrderRepository(seedOrders),
    },
  ],
})
export class OrdersModule {}
