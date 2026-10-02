export const dishes = [
  {
    id: "1",
    name: "Doro Wot",
    category: "Ethiopian",
    price: 350,
    description: "Spicy Ethiopian chicken stew served with injera.",
  },
  {
    id: "2",
    name: "Kitfo",
    category: "Ethiopian",
    price: 450,
    description: "Minced beef seasoned with Ethiopian spices and butter.",
  },
  {
    id: "3",
    name: "Shiro",
    category: "Vegetarian",
    price: 220,
    description: "Traditional Ethiopian chickpea stew served with injera.",
  },
  {
    id: "4",
    name: "Tibs",
    category: "Ethiopian",
    price: 400,
    description: "Sautéed meat cooked with onions, peppers, and spices.",
  },
  {
    id: "5",
    name: "Firfir",
    category: "Breakfast",
    price: 180,
    description: "Pieces of injera mixed with spicy berbere sauce.",
  },
];

export async function getDishes() {
  return dishes;
}

export async function getDishById(id) {
  return dishes.find((dish) => dish.id === String(id));
}
