import { useContext } from "react";
import { GlobalCounterContext } from "./global_counter";

export function useGlobalCounter() {
  const { count, setCount } = useContext(GlobalCounterContext);

  function increment() {
    setCount(count + 1);
  }

  return {
    count,
    increment,
  };
}
