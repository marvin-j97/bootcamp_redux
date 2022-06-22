import ava from "ava";
import { LinkedList } from "../src/task09_generics";

{
  const list = new LinkedList<number>();
  list.append(1);
  list.append(2);
  list.append(3);

  ava.skip("list insert", (t) => {
    const arr = [1, 2, 3];
    list.forEach((x, i) => {
      t.is(x, arr[i]);
    });
  });

  ava.skip("list forEach", (t) => {
    let sum = 0;
    list.forEach((x) => (sum += x));
    t.is(sum, 6);
  });

  ava.skip("list size", (t) => {
    t.is(list.size(), 3);
  });
}

ava.skip("list fromArray", (t) => {
  const arr = [5, 4, 3, 2, 1];
  const list = LinkedList.fromArray(arr);
  t.is(list.size(), 5);

  list.forEach((x, i) => {
    t.is(x, arr[i]);
  });
});

ava.skip("list fromArray", (t) => {
  const list = LinkedList.fromArray([]);
  t.is(list.size(), 0);
});

// BONUS
ava.skip("list prepend", (t) => {
  const list = LinkedList.fromArray([1, 2, 3]);
  list.prepend(4);

  const arr = [4, 1, 2, 3];
  list.forEach((x, i) => {
    t.is(x, arr[i]);
  });
});

// BONUS
ava.skip("list last", (t) => {
  const list = new LinkedList();
  t.is(list.last(), null);
});

// BONUS
ava.skip("list last", (t) => {
  const list = LinkedList.fromArray([1, 2, 3]);
  t.is(list.last(), 3);
  list.append(5);
  t.is(list.last(), 5);
});
