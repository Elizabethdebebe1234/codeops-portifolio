"use server";

import { revalidatePath } from "next/cache";
import { orderSchema } from "@/lib/schema";
import { dishes } from "@/lib/dishes";
import { orders } from "@/lib/orders";

export async function placeOrder(previousState, formData) {
  const result = orderSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    dishId: formData.get("dishId"),
  });

  if (!result.success) {
    return {
      success: false,
      error: "Please correct the errors below.",
      fieldErrors: result.error.flatten().fieldErrors,
    };
  }

  const dish = dishes.find((dish) => dish.id === result.data.dishId);

  if (!dish) {
    return {
      success: false,
      error: "Dish not found.",
      fieldErrors: {},
    };
  }

  const order = {
    id: `ord-${Date.now()}`,
    name: result.data.name,
    phone: result.data.phone,
    dishId: dish.id,
    dishName: dish.name,
    total: dish.price,
    currency: "ETB",
    userId: "demo-user",
    status: "Pending",
  };

  orders.push(order);

  revalidatePath("/orders");

  return {
    success: true,
    error: "",
    fieldErrors: {},
    orderId: order.id,
  };
}

export async function cancelOrder(orderId) {
  const currentUser = {
    id: "demo-user",
  };

  if (!currentUser) {
    return {
      success: false,
      error: "Not signed in.",
    };
  }

  const order = orders.find((order) => order.id === orderId);

  if (!order) {
    return {
      success: false,
      error: "Order not found.",
    };
  }

  if (order.userId !== currentUser.id) {
    return {
      success: false,
      error: "You are not allowed to cancel this order.",
    };
  }

  order.status = "Cancelled";

  revalidatePath("/orders");

  return {
    success: true,
    error: "",
  };
}
