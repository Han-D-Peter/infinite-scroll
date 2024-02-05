import { MutableRefObject, useEffect, useRef } from "react";

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
  const containerRef = useRef<T>(null);
  const observers: MutableRefObject<IntersectionObserver[]> = useRef<
    IntersectionObserver[]
  >([]);
  const unObservers = useRef([]);

  // threshhold 안에 있는 요소만큼 IntersectionObserver를 생성함
  useEffect(() => {
    const observersArr = threshHold.map(() => {
      const observer = new IntersectionObserver((entries, observer) => {
        if (!entries[0].isIntersecting) {
          return;
        }
        trigger();
        observer.unobserve(entries[0].target);
      });
      return observer;
    });
    observers.current = observersArr;
  }, []);
  // (전체 요소 길이 * threshhold) % 만큼을 observe 하도록 맞춰둠

  const nextObserve = () => {
    if (
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observers.current === null
    ) {
      return;
    }

    const container = containerRef.current;

    observers.current.forEach((observer, index) => {
      const threshHoldPoint = (
        container.children.length * threshHold[index]
      ).toFixed(0);
      observer.observe(container.children[Number(threshHoldPoint)]);
    });
  };

  // dataLength가 바뀌면 다시 threshHold 요소들로 observe 해줌

  useEffect(() => {
    nextObserve();
  }, [dataLength]);

  return containerRef;
}

export default useInfiniteScroll;

// const infiniteContainerRef = useInfiniteScroll<HTMLDivElement>({
//     threshHold: [0.6, 0.8, 1],
//     dataLength: products.length,
//     trigger: () => console.log("more"),
//   });
