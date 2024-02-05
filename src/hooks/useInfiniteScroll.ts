import { MutableRefObject, useEffect, useRef } from "react";
import { useEffectIfMounted } from "./useEffectIfMounted";

type useInfiniteScrollArgs = {
  threshHold: number;
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
  const observer: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver>(null);
  const rightBeforeDataLength = useRef(0);

  const nextObserve = () => {
    if (
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observer.current === null
    ) {
      return;
    }

    const container = containerRef.current;

    // 전체 데이터가 아닌 새로 추가된 데이터 중의 threshHold 비율에 해당하는 dom의 순서
    // 배열 인덱스를 사용하기 위해 1을 빼줌
    const fixedCount =
      dataLength -
      (dataLength - rightBeforeDataLength.current) * (1 - threshHold) -
      1;

    observer.current.observe(container.children[fixedCount]);
  };

  // threshhold 안에 있는 요소만큼 IntersectionObserver를 생성함
  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        return;
      }
      trigger();
      observer.unobserve(entries[0].target);
    });
  }, []);

  // dataLength가 바뀌면 다시 threshHold 요소들로 observe 해줌
  useEffectIfMounted(() => {
    nextObserve();
    rightBeforeDataLength.current = dataLength;
  }, [dataLength]);

  return containerRef;
}

export default useInfiniteScroll;
