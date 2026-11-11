import {
  Order,
  InMemoryOrderRepository,
  OrderService,
  OrderNotFoundError,
} from "./orders";

// Sample orders
const orders: Order[] = [
  {
    id: 1,
    name: "Liz's Order",
    area: "Bole",
    status: "PENDING",
    dishes: [
      { name: "Doro Wat", priceSantim: 25000 },
      { name: "Injera", priceSantim: 5000 },
    ],
    totalSantim: 30000,
  },
  {
    id: 2,
    name: "Customer Two",
    area: "Piassa",
    status: "DELIVERED",
    dishes: [
      { name: "Tibs", priceSantim: 35000 },
    ],
    totalSantim: 35000,
  },
];

// Create repository
const repository = new InMemoryOrderRepository(orders);

// Give repository to service
const service = new OrderService(repository);

// Test finding an order
console.log("Find order:", service.find(1));

// Test all orders
console.log("All orders:", repository.all());

// Test delivery fees
console.log("Fees:", service.feesByArea());

// Test generic summarise
console.log("Order names:", service.summarise("name"));
console.log("Order statuses:", service.summarise("status"));
console.log("Order totals:", service.summarise("totalSantim"));

// Test custom error
try {
  service.find(999);
} catch (err) {
  if (err instanceof OrderNotFoundError) {
    console.log("Missing order ID:", err.id);
  } else if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log(String(err));
  }
}