import { Product } from "@/pages/api/products";

export default async function getProducts() {
  const res = await fetch(
    "http://localhost:3000/api/products?offset=50&step=0"
  );
  const products: Product[] = await res.json();
  return products;
}
