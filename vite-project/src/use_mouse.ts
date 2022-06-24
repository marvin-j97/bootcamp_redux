import { useEffect, useState } from "react";

export function useMouse() {
  const [coords, setCoords] = useState([0, 0]);
  const [x, y] = coords;

  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      setCoords([ev.clientX, ev.clientY]);
    };

    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  return {
    x,
    y,
  };
}
