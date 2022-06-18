import ava from "ava";
import { add } from "../src/task01_add";

const fixture: [number, number, number][] = [
  [1, 0, 1],
  [1, 3, 4],
  [0, 0, 0],
  [0, 1, 1],
  [1, -1, 0],
  [-1, 0, -1],
  [10, -15, -5],
];

fixture.forEach(([a, b, expected], i) => {
  ava(`[${i}] add ${a} + ${b}`, async (t) => {
    t.is(add(a, b), expected);
  });
});
