import { useEffect, useRef } from "react";

interface refPrevious<T> {
  current: T;
}

function usePrevious<T>(value: T): T {
  const ref: refPrevious<any> = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
