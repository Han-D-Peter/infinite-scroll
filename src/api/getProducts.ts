import { Product } from "@/pages/api/products";

export default async function getProducts(offset: number, step: number) {
  const res = await fetch(
    `http://localhost:3000/api/products?offset=${offset}&step=${step}`
  );
  const products: Product[] = await res.json();
  return products;
}
