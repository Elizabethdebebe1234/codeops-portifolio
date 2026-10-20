export const demoOrder = {
  id: "demo-1001",
  customerName: "Demo Customer",
  restaurant: "Addis Eats Kitchen",
  deliveryAddress: "Meskel Square, Addis Ababa, Ethiopia",
  items: [
    { name: "Doro Wot", quantity: 1, price: 240 },
    { name: "Shiro", quantity: 1, price: 130 },
  ],
  statusIndex: 1,
  courier: {
    name: "Demo Courier",
    latitude: 9.018,
    longitude: 38.752,
  },
  destination: {
    latitude: 9.010,
    longitude: 38.761,
  },
  createdAt: "2026-10-20T07:00:00.000Z",
};

export const orderStatuses = [
  "Order received",
  "Preparing your food",
  "Ready for delivery",
  "Out for delivery",
  "Delivered",
];

export function getOrder(id) {
  if (id !== demoOrder.id) return null;

  return {
    ...demoOrder,
    items: demoOrder.items.map((item) => ({ ...item })),
    courier: { ...demoOrder.courier },
    destination: { ...demoOrder.destination },
    total: demoOrder.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ),
    status: orderStatuses[demoOrder.statusIndex],
  };
}
