export class DishNotFoundError extends Error {
  constructor(id: number) {
    super(`Dish with ID ${id} was not found`);
    this.name = "DishNotFoundError";
  }
}

export class RestaurantNotFoundError extends Error {
  constructor(id: number) {
    super(`Restaurant with ID ${id} was not found`);
    this.name = "RestaurantNotFoundError";
  }
}