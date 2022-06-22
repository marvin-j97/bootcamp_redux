import ava from "ava";
import { SortedSet } from "../src/task07_bst";

function shuffled<T>(arr: T[]): T[] {
  return arr.slice().sort(() => Math.random() - 0.5);
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const shuffledDigits = shuffled(digits);

function createSet() {
  const tree = new SortedSet();
  shuffledDigits.forEach((x) => tree.insert(x));
  return tree;
}

ava.skip("isLeaf", (t) => {
  const tree = createSet();
  t.is(tree.root?.isLeaf(), false);
});

ava.skip("count", (t) => {
  const tree = createSet();
  t.is(tree.count(), 10);
});

ava.skip("contains", (t) => {
  const tree = createSet();

  for (const x of digits) {
    t.assert(tree.contains(x));
  }
});

ava.skip("minKey", (t) => {
  const tree = createSet();
  t.is(tree.minKey(), 0);
});

ava.skip("maxKey", (t) => {
  const tree = createSet();
  t.is(tree.maxKey(), 9);
});

// BONUS
ava.skip("inOrder traversal", (t) => {
  const tree = createSet();

  t.deepEqual(
    Array.from(tree.inOrder()).map(({ key }) => key),
    digits
  );
});

// BONUS
ava.skip("inOrder traversal (inverted)", (t) => {
  const tree = createSet();
  tree.root?.invert();

  t.deepEqual(
    Array.from(tree.inOrder()).map(({ key }) => key),
    digits.reverse()
  );
});
