import { Product } from "@/src/generated/prisma/client";
import { formatCurrency } from "@/src/utils";
import Image from "next/image";
import AddProductButton from "./AddProductButton";
import { getImagePath } from "../../src/utils/index";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const imagePath = getImagePath(product.image);
  return (
    <div className="border bg-white flex flex-col h-full">
      <Image
        width={300}
        height={400}
        src={imagePath}
        alt={`Imagen platillo ${product.name}`}
        className="w-full object-cover"
      />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-2xl font-bold line-clamp-2 min-h-[8rem]">
          {product.name}
        </h3>
        <p className="mt-auto font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>

        <AddProductButton product={product} />
      </div>
    </div>
  );
}
