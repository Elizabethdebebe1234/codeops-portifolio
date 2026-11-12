export type RestaurantArea =
  | "Bole"
  | "Kazanchis"
  | "Piassa"
  | "Megenagna";

export interface Restaurant {
  id: number;
  name: string;
  area: RestaurantArea;
  isOpen: boolean;
}