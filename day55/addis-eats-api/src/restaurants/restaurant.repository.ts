import type { Restaurant } from "./restaurant.types";

export interface RestaurantRepository {
  all(): Restaurant[];
  byId(id: number): Restaurant | undefined;
  save(restaurant: Restaurant): Restaurant;
}

export class InMemoryRestaurantRepository
  implements RestaurantRepository
{
  private restaurants = new Map<number, Restaurant>();

  constructor(initialRestaurants: Restaurant[] = []) {
    initialRestaurants.forEach((restaurant) => {
      this.restaurants.set(restaurant.id, restaurant);
    });
  }

  all(): Restaurant[] {
    return Array.from(this.restaurants.values());
  }

  byId(id: number): Restaurant | undefined {
    return this.restaurants.get(id);
  }

  save(restaurant: Restaurant): Restaurant {
    this.restaurants.set(restaurant.id, restaurant);
    return restaurant;
  }
}