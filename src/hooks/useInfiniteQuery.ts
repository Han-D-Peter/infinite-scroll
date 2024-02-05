import { Product } from "@/pages/api/products";
import { useState } from "react";

interface useInfiniteQueryResult<T> {
  data: T[];
  isLoading: boolean;
  loadMore: () => void;
}

interface useInfiniteQueryArgs<T> {
  queryFn: () => Promise<any>;
  initialData?: T[];
  offset: number;
  startStep?: number;
}

function useInfiniteQuery<T>(
  args: useInfiniteQueryArgs<T>
): useInfiniteQueryResult<T>;

function useInfiniteQuery<T>({
  queryFn,
  initialData,
  offset,
  startStep = 0,
}: useInfiniteQueryArgs<T>): useInfiniteQueryResult<T> {
  const [data, setData] = useState<T[]>([]);

  async function getData() {
    const res = await queryFn();
    const jsonifiedResponse: T[] = await res.json();
    setData(jsonifiedResponse);
  }

  return { data, isLoading: true, loadMore: () => {} };
}

export default useInfiniteQuery;
