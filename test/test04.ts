import ava from "ava";
import { allNegatives } from "../src/task04_map";

const fixture: [number[], number[]][] = [
  [
    [1, 8, 3, 6, 3, 4, 5, 1],
    [-1, -8, -3, -6, -3, -4, -5, -1],
  ],
  [
    [-20, -19, -18, -2],
    [20, 19, 18, 2],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 1],
    [-0, -0, -0, -0, -0, -0, -0, -1],
  ],
  [
    [-4, 5, 3],
    [4, -5, -3],
  ],
];

fixture.forEach(([arr, expected], i) => {
  ava.skip(`[${i}] ${arr} should be converted to ${expected}`, (t) => {
    t.deepEqual(allNegatives(arr), expected);
  });
});
