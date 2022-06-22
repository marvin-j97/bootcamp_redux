import ava from "ava";
import { countSales, Customer } from "../src/task08_reduce";

const fixture: [Customer[], number][] = [
  [[], 0],
  [[new Customer(0)], 0],
  [[new Customer(0), new Customer(1), new Customer(3)], 4],
  [[new Customer(75), new Customer(2)], 77],
];

fixture.forEach(([arr, expected], i) => {
  ava(`[${i}] ${JSON.stringify(arr)} should be reduced to ${expected}`, (t) => {
    t.deepEqual(countSales(arr), expected);
  });
});
