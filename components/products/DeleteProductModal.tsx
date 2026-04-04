"use client";
import { deleteProduct } from "@/actions/delete-product.action";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useStore } from "@/src/store";
import { toast } from "react-toastify";

export default function DeleteProductModal() {
  const { isDeleteModalOpen, selectedProduct, closeDeleteModal } = useStore();

  const handleDelete = async () => {
    if (!selectedProduct) return;

    const response = await deleteProduct(selectedProduct.id!);

    if (!response) {
      toast.error("Error al eliminar el producto");
      return;
    }

    toast.success("Producto eliminado correctamente");
    closeDeleteModal();
  };
  return (
    <Dialog open={isDeleteModalOpen} onOpenChange={closeDeleteModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿Eliminar producto?</DialogTitle>
          <DialogDescription>
            ¿Estás seguro que querés eliminar{" "}
            <span className="font-bold text-black">
              {selectedProduct?.name}
            </span>
            ? Esta acción no se puede deshacer.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button
            onClick={closeDeleteModal}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Eliminar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
