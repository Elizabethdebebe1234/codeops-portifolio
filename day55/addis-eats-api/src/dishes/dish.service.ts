import { Inject, Injectable } from "@nestjs/common";
import { DISH_REPOSITORY } from "./dish.tokens";
import type { DishRepository } from "./dish.repository";
import { RESTAURANT_REPOSITORY } from "../restaurants/restaurant.tokens";
import type { RestaurantRepository } from "../restaurants/restaurant.repository";
import type { Dish } from "./dish.types";
import type { CreateDishDto } from "./dto/create-dish.dto";
import {
  DishNotFoundError,
  RestaurantNotFoundError,
} from "./dish.errors";

@Injectable()
export class DishService {
  constructor(
    @Inject(DISH_REPOSITORY)
    private readonly dishRepository: DishRepository,

    @Inject(RESTAURANT_REPOSITORY)
    private readonly restaurantRepository: RestaurantRepository,
  ) {}

  findAll(restaurantId?: number): Dish[] {
    return restaurantId === undefined
      ? this.dishRepository.all()
      : this.dishRepository.byRestaurantId(restaurantId);
  }

  find(id: number): Dish {
    const dish = this.dishRepository.byId(id);

    if (!dish) throw new DishNotFoundError(id);

    return dish;
  }

  create(data: CreateDishDto): Dish {
    if (!this.restaurantRepository.byId(data.restaurantId)) {
      throw new RestaurantNotFoundError(data.restaurantId);
    }

    const dish: Dish = {
      id: Math.max(0, ...this.dishRepository.all().map((item) => item.id)) + 1,
      ...data,
    };

    return this.dishRepository.save(dish);
  }
}