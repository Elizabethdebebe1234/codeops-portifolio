"use client";

import { useActionState } from "react";
import { placeOrder } from "@/app/actions";
import SubmitButton from "./submit-button";

const initialState = {
  success: false,
  error: "",
  fieldErrors: {},
};

export default function CheckoutForm() {
  const [state, formAction] = useActionState(placeOrder, initialState);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="name">Name</label>

        <br />

        <input id="name" name="name" placeholder="Enter your name" />

        {state.fieldErrors?.name && <p>{state.fieldErrors.name[0]}</p>}
      </div>

      <br />

      <div>
        <label htmlFor="phone">Phone</label>

        <br />

        <input id="phone" name="phone" placeholder="0912345678" />

        {state.fieldErrors?.phone && <p>{state.fieldErrors.phone[0]}</p>}
      </div>

      <br />

      <div>
        <label htmlFor="dishId">Dish</label>

        <br />

        <select id="dishId" name="dishId" defaultValue="1">
          <option value="1">Doro Wot - 350 ETB</option>

          <option value="2">Kitfo - 450 ETB</option>

          <option value="3">Shiro - 220 ETB</option>

          <option value="4">Tibs - 400 ETB</option>

          <option value="5">Firfir - 180 ETB</option>
        </select>
      </div>

      <br />

      {state.error && <p>{state.error}</p>}

      {state.success && (
        <p>
          Order created successfully!
          <br />
          Order ID: {state.orderId}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
