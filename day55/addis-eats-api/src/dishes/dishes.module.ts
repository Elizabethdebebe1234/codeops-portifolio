import { Module } from "@nestjs/common";
import { DishesController } from "./dishes.controller";
import { DishService } from "./dishes.service";
import { DISH_REPOSITORY } from "./dish.tokens";
import { InMemoryDishRepository } from "./dish.repository";
import { dishSeed } from "./dish.seed";
import { RestaurantsModule } from "../restaurants/restaurants.module";

@Module({
  imports: [RestaurantsModule],
  controllers: [DishesController],
  providers: [
    DishService,
    {
      provide: DISH_REPOSITORY,
      useFactory: () => new InMemoryDishRepository(dishSeed),
    },
  ],
})
export class DishesModule {}