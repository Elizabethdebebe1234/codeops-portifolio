"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
      error: "Please correct the errors.",
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

  redirect("/orders");
}
