import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";

import { DishService } from "./dishes.service";
import { CreateDishDto } from "./dto/create-dish.dto";
import { NotFoundException } from "@nestjs/common";

@Controller("dishes")
export class DishesController {
  constructor(private readonly dishService: DishService) {}

  @Get()
  findAll(@Query("restaurantId") restaurantId?: string) {
    return this.dishService.findAll(
      restaurantId === undefined
        ? undefined
        : Number(restaurantId),
    );
  }

  @Get(":id")
  find(@Param("id", ParseIntPipe) id: number) {
    return this.dishService.find(id);
  }

  @Post()
  create(@Body() dto: CreateDishDto) {
    return this.dishService.create(dto);
  }
}