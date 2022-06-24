import { useState } from "react";

export function usePersistentState(key: string, initial: number) {
  const [x, setX] = useState(initial);

  return [0, () => {}];
}
