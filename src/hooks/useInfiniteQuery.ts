import { Product } from "@/pages/api/products";
import { useState } from "react";

interface useInfiniteQueryResult<T> {
  data: T[];
  isLoading: boolean;
  loadMore: () => void;
}

interface useInfiniteQueryArgs<T> {
  queryFn: (offset: number, step: number) => Promise<any>;
  initialData?: T[];
  offset: number;
  startStep?: number;
}

function useInfiniteQuery<T>(
  args: useInfiniteQueryArgs<T>
): useInfiniteQueryResult<T>;

function useInfiniteQuery<T>({
  queryFn,
  initialData = [],
  offset,
  startStep = 0,
}: useInfiniteQueryArgs<T>): useInfiniteQueryResult<T> {
  const [data, setData] = useState<T[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(startStep);

  async function loadMore() {
    setIsLoading(true);
    const jsonifiedResponse: T[] = await queryFn(offset, currentStep)
      .then((res) => res)
      .finally(() => {
        setIsLoading(false);
        setCurrentStep((prev) => prev++);
      });
    setData((prev) => [...prev, ...jsonifiedResponse]);
  }

  return { data, isLoading, loadMore };
}

export default useInfiniteQuery;
