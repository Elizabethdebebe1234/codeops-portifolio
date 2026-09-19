import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],

      addItem: (dish) =>
        set((state) => ({
          items: [...state.items, dish],
        })),

      increaseItem: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item,
          ),
        })),

      decreaseItem: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id
                ? { ...item, quantity: (item.quantity || 1) - 1 }
                : item,
            )
            .filter((item) => (item.quantity || 1) > 0),
        })),

      removeItem: (id) =>
        set((state) => {
          const index = state.items.findIndex((item) => item.id === id);

          if (index === -1) return state;

          return {
            items: state.items.filter((_, itemIndex) => itemIndex !== index),
          };
        }),

      clear: () => set({ items: [] }),
    }),
    {
      name: "addis-eats-cart",
    },
  ),
);
