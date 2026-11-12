import { Module } from "@nestjs/common";
import { RestaurantsController } from "./restaurants.controller";
import { RestaurantsService } from "./restaurants.service";
import { RESTAURANT_REPOSITORY } from "./restaurant.tokens";
import { InMemoryRestaurantRepository } from "./restaurant.repository";
import { restaurantSeed } from "./restaurant.seed";

@Module({
  controllers: [RestaurantsController],
  providers: [
    RestaurantsService,
    {
      provide: RESTAURANT_REPOSITORY,
      useFactory: () =>
        new InMemoryRestaurantRepository(restaurantSeed),
    },
  ],
  exports: [RESTAURANT_REPOSITORY],
})
export class RestaurantsModule {}