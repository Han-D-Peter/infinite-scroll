import { DependencyList, useEffect, useMemo } from "react";
import { useIsMount } from "./useIsMounted";

export const useEffectIfMounted = (
  callback: () => void | Function,
  deps: DependencyList
) => {
  const isMount = useIsMount();
  const dependency = useMemo(() => [isMount, ...deps], [isMount, deps]);

  useEffect(() => {
    let returnBack: Function | void;
    if (isMount) {
      returnBack = callback();
    }
    return () => {
      if (returnBack) {
        returnBack();
      }
    };
  }, dependency);
};
