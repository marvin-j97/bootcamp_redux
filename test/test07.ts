import ava, { ExecutionContext } from "ava";
import { LinkedList } from "../src/task07_generics";

function snapshot<T>(t: ExecutionContext, list: LinkedList<T>, arr: T[]) {
  list.forEach((x, i) => {
    t.is(x, arr[i]);
  });
}

{
  const list = new LinkedList<number>();

  list.append(1);

  ava.skip("list insert 1", (t) => {
    snapshot(t, list, [1]);
  });
}

{
  const list = new LinkedList<number>();

  list.append(1);
  list.append(2);

  ava.skip("list insert 2", (t) => {
    snapshot(t, list, [1, 2]);
  });
}

{
  const list = new LinkedList<number>();

  list.append(1);
  list.append(2);
  list.append(4);

  ava.skip("list insert 2", (t) => {
    snapshot(t, list, [1, 2, 4]);
  });

  ava.skip("list forEach", (t) => {
    let sum = 0;
    list.forEach((x) => (sum += x));
    t.is(sum, 7);
  });

  ava.skip("list size", (t) => {
    t.is(list.size(), 3);
  });
}

ava.skip("list fromArray", (t) => {
  const arr = [5, 4, 3, 2, 1];
  const list = LinkedList.fromArray(arr);

  snapshot(t, list, arr);
});

ava.skip("list fromArray 2", (t) => {
  const list = LinkedList.fromArray([]);
  t.is(list.size(), 0);
});

// BONUS
ava.skip("list prepend", (t) => {
  const list = LinkedList.fromArray([1, 2, 3]);
  list.prepend(4);

  snapshot(t, list, [4, 1, 2, 3]);
});

// BONUS
ava.skip("list last", (t) => {
  const list = new LinkedList();
  t.is(list.last(), null);
});

// BONUS
ava.skip("list last 2", (t) => {
  const list = LinkedList.fromArray([1, 2, 3]);
  t.is(list.last(), 3);
  list.append(5);
  t.is(list.last(), 5);
});

// BONUS
ava.skip("list iter", (t) => {
  const list = LinkedList.fromArray([1, 2, 3]);

  let sum = 0;
  for (const x of list.iter()) {
    sum += x;
  }
  t.is(sum, 6);
});

// BONUS
ava.skip("list filter", (t) => {
  const list = LinkedList.fromArray([1, 2, 3]);
  const list2 = list.filter((x) => x === 2);

  snapshot(t, list2, [2]);
});

// BONUS
ava.skip("list map", (t) => {
  const list = LinkedList.fromArray([1, 2, 3]);
  const list2 = list.map((x) => x + 1);

  snapshot(t, list2, [0, 1, 2]);
});

// BONUS
ava.skip("list reduce", (t) => {
  const list = LinkedList.fromArray([1, 2, 3]);
  const sum = list.reduce((a, x) => a + x, 0);

  t.is(sum, 6);
});
