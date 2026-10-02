"use client";

import { useActionState } from "react";
import { placeOrder } from "@/app/actions";
import SubmitButton from "./submit-button";

const initialState = {
  success: false,
  error: "",
  fieldErrors: {},
};

export default function CheckoutForm({ selectedDishId = "1" }) {
  const [state, formAction] = useActionState(placeOrder, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="name">Full Name</label>

      <input
        id="name"
        name="name"
        placeholder="Enter your full name"
        required
      />

      {state.fieldErrors?.name && <p>{state.fieldErrors.name[0]}</p>}

      <br />

      <label htmlFor="phone">Phone Number</label>

      <input id="phone" name="phone" placeholder="0912345678" required />

      {state.fieldErrors?.phone && <p>{state.fieldErrors.phone[0]}</p>}

      <br />

      <label htmlFor="dishId">Select Dish</label>

      <select id="dishId" name="dishId" defaultValue={selectedDishId}>
        <option value="1">Doro Wot — 350 ETB</option>

        <option value="2">Kitfo — 450 ETB</option>

        <option value="3">Shiro — 220 ETB</option>

        <option value="4">Tibs — 400 ETB</option>

        <option value="5">Firfir — 180 ETB</option>
      </select>

      {state.error && <p>{state.error}</p>}

      <SubmitButton />
    </form>
  );
}
