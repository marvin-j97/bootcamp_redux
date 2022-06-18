import ava from "ava";
import { paraRelu, relu } from "../src/task02_relu";

function copy<T>(x: T): T {
  return JSON.parse(JSON.stringify(x));
}

{
  // paraReLU
  const fixture: [number, number, number][] = [
    [0, 0, 0],
    [0, 5, 0],
    [0, -5, 0],
    [1, 0, 1],
    [1, 5, 1],
    [1, -5, 1],
    [10, 0, 10],
    [10, 5, 10],
    [10, -5, 10],
    [-1, 0, 0],
    [-5, 0.1, -0.5],
    [-2, 1, -2],
    [-10, -1, 10],
  ];

  fixture.forEach(([x, a, expected], i) => {
    ava.skip(`[${i}] paraRelu(${x}, ${a})`, async (t) => {
      t.is(copy(paraRelu(x, a)), expected);
    });
  });
}

{
  // ReLU
  const fixture: [number, number][] = [
    [0, 0],
    [1, 1],
    [-5, 0],
    [-20, 0],
    [-0.5, 0],
    [10, 10],
    [0.01, 0.01],
  ];

  fixture.forEach(([x, expected], i) => {
    ava.skip(`[${i}] relu(${x})`, async (t) => {
      t.is(copy(relu(x)), expected);
    });
  });
}
