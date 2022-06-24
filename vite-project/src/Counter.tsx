import { useCounter } from "./use_counter";

export function Counter() {
  const { count, increment } = useCounter();

  return (
    <button type="button" onClick={increment}>
      count is: {count}
    </button>
  );
}
