import { QuantySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/" className="underline">
              Editar carrito
            </Link>

            {/* Items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="mr-5"
                />

                <div>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <p className="font-bold">Subtotal: 1000</p>
                  <button className="underline">remover</button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Direccion de entrega</h2>
            <div className="mb-10">
              <p>Welinton suarez</p>
              <p>San jose, Costa Rica</p>
              <p>San jose, Costa Rica</p>
              <p>San jose, Costa Rica</p>
              <p>928374782364</p>
            </div>
            {/* divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>
            <h2 className="mb-2">Resumen de la orden</h2>
            <div className="grid grid-cols-2">
              <span>Numero de productos</span>
              <span className="text-right">3 articulos</span>
              <span>Subtotal</span>
              <span className="text-right">$ 100</span>
              <span>Impuestos</span>
              <span className="text-right">$ 100</span>
              <span className="mt-5 text-xl">Total</span>
              <span className="mt-5 text-xl text-right">$ 100</span>
            </div>
            <div className="">
              <Link
                href="/orders/123"
                className="flex btn-primary justify-center w-full mt-5"
              >
                Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
