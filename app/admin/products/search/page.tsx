import ProductsSearchForm from "@/components/products/ProductsSearchForm";
import ProductTable from "@/components/products/ProductTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function searchProduct(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
    include: {
      category: true,
    },
  });
  return products;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const products = await searchProduct(searchParams.search);

  return (
    <>
      <Heading>Resultados de Búsqueda: {searchParams.search}</Heading>
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-end">
        <ProductsSearchForm />
      </div>
      {products.length > 0 ? (
        <ProductTable products={products} />
      ) : (
        <p>No hay productos.</p>
      )}
    </>
  );
}
