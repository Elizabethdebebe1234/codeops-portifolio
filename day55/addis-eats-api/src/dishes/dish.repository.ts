import type { Dish } from "./dish.types";

export interface DishRepository {
  all(): Dish[];
  byId(id: number): Dish | undefined;
  byRestaurantId(restaurantId: number): Dish[];
  save(dish: Dish): Dish;
}

export class InMemoryDishRepository implements DishRepository {
  private dishes = new Map<number, Dish>();

  constructor(initialDishes: Dish[] = []) {
    initialDishes.forEach((dish) => {
      this.dishes.set(dish.id, dish);
    });
  }

  all(): Dish[] {
    return Array.from(this.dishes.values());
  }

  byId(id: number): Dish | undefined {
    return this.dishes.get(id);
  }

  byRestaurantId(restaurantId: number): Dish[] {
    return this.all().filter(
      (dish) => dish.restaurantId === restaurantId,
    );
  }

  save(dish: Dish): Dish {
    this.dishes.set(dish.id, dish);
    return dish;
  }
}