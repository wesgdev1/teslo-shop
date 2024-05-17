import { QuantySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito de compras" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas</span>
            <Link href="/" className="underline">
              Continua comprando
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
                  <QuantySelector quantity={3} />
                  <button className="underline">remover</button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-[350px]">
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
                href="/checkout/address"
                className="flex btn-primary justify-center w-full mt-5"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
