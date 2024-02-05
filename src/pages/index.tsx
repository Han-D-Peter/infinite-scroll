import type { InferGetStaticPropsType } from "next";
import { Product } from "./api/products";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useInfiniteQuery from "@/hooks/useInfiniteQuery";
import getProducts from "@/api/getProducts";

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data, loadMore, isLoading } = useInfiniteQuery<Product>({
    queryFn: getProducts,
    initialData: products,
    offset: 50,
    startStep: 1,
  });
  return (
    <main>
      <div>hello</div>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:3000/api/products?offset=50&step=0"
  );
  const products: Product[] = await res.json();
  return { props: { products: products } };
};
