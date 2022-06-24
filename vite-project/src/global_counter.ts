import { createContext, Dispatch, SetStateAction } from "react";

export const GlobalCounterContext = createContext<{
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}>({
  count: 0,
  setCount: () => 0,
});
