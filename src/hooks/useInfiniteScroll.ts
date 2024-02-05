import { MutableRefObject, useRef } from "react";

type useInfiniteScrollArgs = {
  threshHold: number[];
  dataLength: number;
  trigger: () => void;
};

function useInfiniteScroll<T extends HTMLElement>({
  threshHold,
  dataLength,
  trigger,
}: useInfiniteScrollArgs): MutableRefObject<T>;

function useInfiniteScroll<T extends HTMLElement>({
  threshHold,
  dataLength,
  trigger,
}: useInfiniteScrollArgs) {
  const ref = useRef<T>();

  return ref;
}

export default useInfiniteScroll;

// const infiniteContainerRef = useInfiniteScroll<HTMLDivElement>({
//     threshHold: [0.6, 0.8, 1],
//     dataLength: products.length,
//     trigger: () => console.log("more"),
//   });
