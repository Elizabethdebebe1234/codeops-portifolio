const dishes = [
  {
    id: "doro-wat",
    name: "Doro Wat",
    price: 240,
    summary:
      "Traditional Ethiopian chicken stew seasoned with berbere and served with injera.",
    image: "/dishes/doro-wat.jpg",
  },
  {
    id: "tibs",
    name: "Tibs",
    price: 280,
    summary:
      "Ethiopian-style sautéed meat with onions, peppers, and traditional spices.",
    image: "/dishes/tibs.jpg",
  },
];

export function getDishes() {
  return dishes;
}

export async function getDish(id) {
  return dishes.find((dish) => dish.id === id);
}
