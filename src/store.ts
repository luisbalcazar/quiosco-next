import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "./generated/prisma/client";

interface Store {
  order: OrderItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (id: Product["id"]) => void;
  decreaseQuantity: (id: Product["id"]) => void;
  removeItem: (id: Product["id"]) => void;
  clearOrder: () => void;
  //Delete Modal
  isDeleteModalOpen: boolean;
  selectedProduct: Product | null;
  openDeleteModal: (product: Product) => void;
  closeDeleteModal: () => void;
}

export const useStore = create<Store>((set, get) => ({
  order: [],
  addToCart: (product) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { categoryId, image, ...data } = product; //extraemos los que no necesitamos y desestructuramos los que si en data
    let order: OrderItem[] = [];

    if (get().order.find((item) => item.id === data.id)) {
      order = get().order.map((item) =>
        item.id === data.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: item.price * (item.quantity + 1),
            }
          : item,
      );
    } else {
      order = [
        ...get().order,
        {
          ...data,
          quantity: 1,
          subtotal: 1 * product.price,
        },
      ];
    }

    set(() => ({
      order,
    }));
  },
  increaseQuantity: (id) => {
    set((state) => ({
      order: state.order.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: item.price * (item.quantity + 1),
            }
          : item,
      ),
    }));
  },
  decreaseQuantity: (id) => {
    let order: OrderItem[] = [];

    if (get().order.find((item) => item.quantity > 1)) {
      order = get().order.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
              subtotal: item.price * (item.quantity - 1),
            }
          : item,
      );

      set(() => ({
        order,
      }));
    }
  },
  removeItem: (id) => {
    set((state) => ({
      order: state.order.filter((item) => item.id !== id),
    }));
  },
  clearOrder: () => {
    set(() => ({
      order: [],
    }));
  },
  //Delete Modal
  isDeleteModalOpen: false,
  selectedProduct: null,
  openDeleteModal: (product) =>
    set({ isDeleteModalOpen: true, selectedProduct: product }),
  closeDeleteModal: () =>
    set({ isDeleteModalOpen: false, selectedProduct: null }),
}));
