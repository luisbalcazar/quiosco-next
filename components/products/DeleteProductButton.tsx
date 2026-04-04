"use client";
import { Product } from "@/src/generated/prisma/client";
import { useStore } from "@/src/store";
import React from "react";

export default function DeleteProductButton({ product }: { product: Product }) {
  const { openDeleteModal } = useStore();
  return (
    <button
      onClick={() => openDeleteModal(product)}
      className="text-indigo-600 hover:text-indigo-800 ml-4"
    >
      Eliminar <span className="sr-only">{product.name}</span>
    </button>
  );
}
