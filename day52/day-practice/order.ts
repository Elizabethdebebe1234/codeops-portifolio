/* Declare `type Area` as a union of the four delivery areas, built from an `as const` array*/

const deliveryAreas = ["Bole", "Piazza", "CMC", "Mexico"] as const;

type Area = (typeof deliveryAreas)[number];


/*Declare `type OrderStatus` as a union of the five order states.*/
type OrderStatus =
  | "Pending"
  | "Preparing"
  | "Ready"
  | "OnTheWay"
  | "Delivered";

/*Declare `type Dish` with a name and a price in santim, and `type Order` with a readonly id, a customer name, an area, a status, a dish list, an optional TeleBirr phone, and a total in santim.*/
type Dish = {
  name: string;
  price: number;
};

type Order = {
  readonly id: number;
  customerName: string;
  area: Area;
  status: OrderStatus;
  dishes: Dish[];
  telebirrPhone?: string;
  total: number;
};


/*Write `deliveryFee(order: Order): number` — free above 500 ETB, 40 ETB to Bole, 60 ETB elsewhere.*/
function deliveryFee(order: Order): number {
  if (order.total > 50000) {
    return 0;
  }

  if (order.area === "Bole") {
    return 4000;
  }

  return 6000;
}


/*Write `statusMessage(status: OrderStatus): string` as a switch with a `never` default.*/
function statusMessage(status: OrderStatus): string {
  switch (status) {
    case "Pending":
      return "Your order is waiting for confirmation.";

    case "Preparing":
      return "Your food is being prepared.";

    case "Ready":
      return "Your food is ready.";

    case "OnTheWay":
      return "Your order is on the way.";

    case "Delivered":
      return "Your order has been delivered.";

    default: {
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
    }
  }
}

/*Write `receipt(order: Order): string` using a multi-line template literal and an `Intl.NumberFormat` helper for every ETB amount.*/
const formatETB = (amountInSantim: number): string => {
  return new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
  }).format(amountInSantim / 100);
};


/*Add a sixth status to the union without touching statusMessage. Screenshot the compiler error, then fix it.*/
function receipt(order: Order): string {
  const dishList = order.dishes
    .map((dish) => `${dish.name}: ${formatETB(dish.price)}`)
    .join("\n");

  const fee = deliveryFee(order);

  return `
========== FOOD RECEIPT ==========

Order ID: ${order.id}
Customer: ${order.customerName}
Delivery Area: ${order.area}

Dishes:
${dishList}

Subtotal: ${formatETB(order.total)}
Delivery Fee: ${formatETB(fee)}
Total: ${formatETB(order.total + fee)}

Payment Phone: ${order.telebirrPhone ?? "Not provided"}
Status: ${statusMessage(order.status)}

==================================
`;
}
