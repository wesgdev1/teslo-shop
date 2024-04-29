import { notFound } from "next/navigation";
import { initialData } from "../../../../seed/seed";
import { titleFont } from "@/config/fonts";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;

  const product = initialData.products.find((product) => product.slug === slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* slideshop */}
      <div
        className="cols-span-1 md:col-span-2 
      "
      >
        Test
      </div>
      {/* detalles */}

      <div className="cols-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">{product.price}</p>
        {/* selector de tallas
         */}
        {/* selector de cantidad */}

        <button className="btn-primary my-5">Agregar al carrito</button>
        {/* Descripcion */}

        <h3 className="font-bold text-sm">Descripcionn</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
