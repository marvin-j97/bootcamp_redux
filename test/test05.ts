import ava from "ava";
import { getDigits, isDigit } from "../src/task05_filter";

{
  // isDigit

  const fixture: [number, boolean][] = [
    [5, true],
    [1, true],
    [0, true],
    [-22, false],
    [10, false],
    [1000, false],
  ];

  fixture.forEach(([x, expected], i) => {
    ava.skip(`[${i}] ${x} should be${expected ? "" : " not"} a digit`, (t) => {
      t.is(isDigit(x), expected);
    });
  });
}

{
  // getDigits

  const fixture: [number[], number[]][] = [
    [
      [1, 5, 9],
      [1, 5, 9],
    ],
    [
      [1, 5, 11],
      [1, 5],
    ],
    [[10, 11, 12], []],
    [[-44, 5, 10], [5]],
  ];

  fixture.forEach(([arr, expected], i) => {
    ava.skip(`[${i}] ${arr} should be converted to ${expected}`, (t) => {
      t.deepEqual(getDigits(arr), expected);
    });
  });
}
