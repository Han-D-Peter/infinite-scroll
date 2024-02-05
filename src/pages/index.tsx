import type { InferGetStaticPropsType } from "next";
import { Product } from "./api/products";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useInfiniteQuery from "@/hooks/useInfiniteQuery";
import getProducts from "@/api/getProducts";
import Card from "@/component/Card";
import { useMemo } from "react";

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data, loadMore, isLoading } = useInfiniteQuery<Product>({
    queryFn: getProducts,
    initialData: products,
    offset: products.length,
    startStep: 1,
  });

  const infiniteContainerRef = useInfiniteScroll<HTMLDivElement>({
    threshHold: 0.8,
    dataLength: data.length,

    trigger: loadMore,
  });

  const skeleton = useMemo(() => {
    return Array.from({ length: products.length }, (_, index) => (
      <Card
        key={index}
        title="Loading..."
        genre="Loading..."
        description="Loading..."
      />
    ));
  }, []);

  return (
    <main>
      <section
        ref={infiniteContainerRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          padding: "200px",
          gap: "40px",
        }}
      >
        {data.map((item) => {
          const { id, title, genre, description } = item;
          return (
            <Card
              key={id}
              title={title}
              genre={genre}
              description={description}
            />
          );
        })}
        {isLoading && skeleton}
      </section>
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
