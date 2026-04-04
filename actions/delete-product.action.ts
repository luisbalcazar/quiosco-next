"use server";

import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteProduct(id: number) {
  try {
    const response = await prisma.product.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/products");
    return response;
  } catch (error) {
    console.error("Error al eliminar el producto: ", error);
    return null;
  }
}
