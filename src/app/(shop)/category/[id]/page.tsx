import { ProductGrid, Title } from "@/components";
import { ValidCategories } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;
interface Props {
  params: {
    id: ValidCategories;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  const labels: Record<ValidCategories, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  const products = seedProducts.filter((product) => product.gender === id);
  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Articulos de ${labels[id]}	`}
        subtitle="Los mejores productos segun tu genero"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
