import type { InferGetStaticPropsType } from "next";
import { Product } from "./api/products";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const infiniteContainerRef = useInfiniteScroll({
    threshHold: [0.6, 0.8, 1],
    dataLength: products.length,
    trigger: () => console.log("more"),
  });

  return <main>hello</main>;
}

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:3000/api/products?offset=50&step=0"
  );
  const products: Product[] = await res.json();
  return { props: { products: products } };
};
