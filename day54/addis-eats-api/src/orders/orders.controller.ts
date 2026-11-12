
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";


import { OrderNotFoundError } from "./order.errors";
import { CreateOrderDto } from "./dto/create-order.dto";
import { OrderService } from "./orders.service";
import { ORDER_REPOSITORY } from "./order.tokens";
import { InMemoryOrderRepository } from "./order.repository";

@Controller("orders")
export class OrdersController {
  constructor(
    private readonly orderService: OrderService
  ) {}

  // GET /api/orders
  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  // GET /api/orders/1
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    try {
      return this.orderService.find(id);
    } catch (error) {
      if (error instanceof OrderNotFoundError) {
        throw new NotFoundException(error.message);
      }

      throw error;
    }
  }

  // POST /api/orders
  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.orderService.create({
  name: dto.customer,
  area: dto.area,
  dishes: dto.dishes,
});
  }
}
