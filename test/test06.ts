import ava from "ava";
import { derivative } from "../src/task06_derive";

const fixture: [(x: number) => number, number, number][] = [
  [() => 5, 0, 0],
  [() => 5, 1, 0],
  [() => -2, 7, 0],

  [(x) => x, 0, 1],
  [(x) => x, 5, 1],
  [(x) => x, -2, 1],
  [(x) => x, -20, 1],

  [(x) => 2 * x, 0, 2],
  [(x) => 2 * x, -5, 2],
  [(x) => 2 * x, 2, 2],

  [(x) => x * x, 0, 0],
  [(x) => x * x, 1, 2],
  [(x) => x * x, 2, 4],
  [(x) => x * x, 4, 8],
  [(x) => x * x, -4, -8],

  [(x) => x * x * x, 0, 0],
  [(x) => x * x * x, 1, 3],
  [(x) => x * x * x, 4, 48],
  [(x) => x * x * x, -4, 48],

  [Math.sin, 0, 1],
  [Math.sin, 0.5, 0.877583],
  [Math.sin, Math.PI, -1],
];

const ERROR_MARGIN = 0.00001;

fixture.forEach(([f, x, expected], i) => {
  ava.skip(
    `[${i}] Should correctly calculate derivative at x = ${x}: ${expected}`,
    (t) => {
      const df = derivative(f);
      t.is(typeof df, "function");
      t.assert(Math.abs(df(x) - expected) < ERROR_MARGIN);
    }
  );
});
