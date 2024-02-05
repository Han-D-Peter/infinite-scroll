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
    offset: products.length,
    startStep: 1,
  });

  const infiniteContainerRef = useInfiniteScroll<HTMLDivElement>({
    threshHold: 0.8,
    dataLength: data.length,

    trigger: loadMore,
  });

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
            <div
              key={id}
              style={{
                borderRadius: "5px",
                border: "1px solid black",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: "skyblue",
                }}
              ></div>
              <div>{title}</div>
              <div>{genre}</div>
              <div>{description}</div>
            </div>
          );
        })}
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
