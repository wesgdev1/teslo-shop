import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  // Borrado de registros previos
  await Promise.all([
    await prisma.productImage.deleteMany(),
    await prisma.product.deleteMany(),
    await prisma.category.deleteMany(),
  ]);

  // insetamos categorias
  const { categories, products } = initialData;
  const categoriesData = categories.map((category) => ({
    name: category,
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesBd = await prisma.category.findMany();
  const categoriesMap = categoriesBd.reduce((map, category) => {
    map[category.name] = category.id;
    return map;
  }, {} as Record<string, string>);

  // productos

  products.forEach(async (product) => {
    const { type, images, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    // images

    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));
    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  // imagenes

  console.log("Datos iniciales insertados correctamente");
}

// productos

// esto es para que se ejecute la función main
(() => {
  if (process.env.NODE_ENV === "production") {
    return;
  }
  main();
})();
