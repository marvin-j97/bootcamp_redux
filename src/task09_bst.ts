/**
 * A sorted set can efficiently return whether a key is contained in the set
 *
 * All keys are also sorted in a way to efficiently query the min and max values
 *
 * Internally, a (unbalanced) binary search tree, this yields O(log n) best-case
 * performance for searches
 *
 * https://en.wikipedia.org/wiki/Set_(abstract_data_type)
 */
export class SortedSet {
  root: TreeNode | null = null;

  /**
   * Returns true if the set contains no items
   */
  isEmpty(): boolean {
    return !this.count();
  }

  /**
   * Returns the item count
   */
  count(): number {
    if (!this.root) {
      return 0;
    }
    return this.root.count();
  }

  /**
   * Returns the highest key in the set
   */
  maxKey(): number | null {
    if (!this.root) {
      return null;
    }
    return this.root.maxKey();
  }

  /**
   * Returns the lowest key in the set
   */
  minKey(): number | null {
    if (!this.root) {
      return null;
    }
    return this.root.minKey();
  }

  /**
   * Returns true if the key is contained in the set
   * false otherwise
   */
  contains(key: number): boolean {
    if (!this.root) {
      return false;
    }
    return this.root.contains(key);
  }

  /**
   * Adds a key to the set
   *
   * If the key is already contained, nothing should be done
   */
  insert(key: number): void {
    if (this.isEmpty()) {
      this.root = new TreeNode(key, null, null);
      return;
    }
    this.root?.insert(key);
  }

  /**
   * Returns an iterator over the entire tree in in-order traversal
   * https://en.wikipedia.org/wiki/Tree_traversal#In-order,_LNR
   */
  *inOrder(): Generator<TreeNode> {
    if (!this.root) {
      return;
    }
    yield* this.root.inOrder();
  }
}

/**
 * Represents a node in a binary search tree
 *
 * Operations should be performed using recursion
 */
class TreeNode {
  key: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(key: number, left: TreeNode | null, right: TreeNode | null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  /**
   * Returns true if the node is a leaf (has no children)
   */
  isLeaf(): boolean {
    return !this.left && !this.right;
  }

  isEmpty(): boolean {
    return !this.count();
  }

  count(): number {
    return 1 + (this.left?.count() || 0) + (this.right?.count() || 0);
  }

  maxKey(): number | null {
    if (!this.right) {
      return this.key;
    }
    return this.right.maxKey();
  }

  minKey(): number | null {
    if (!this.left) {
      return this.key;
    }
    return this.left.minKey();
  }

  insert(key: number): void {
    if (key <= this.key) {
      if (this.left) {
        this.left.insert(key);
      } else {
        this.left = new TreeNode(key, null, null);
      }
    } else {
      if (this.right) {
        this.right.insert(key);
      } else {
        this.right = new TreeNode(key, null, null);
      }
    }
  }

  contains(key: number): boolean {
    if (this.key === key) {
      return true;
    } else if (key <= this.key) {
      return this.left?.contains(key) || false;
    } else {
      return this.right?.contains(key) || false;
    }
  }

  // BONUS
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
  // Tip: yield* consumes another entire generator
  *inOrder(): Generator<TreeNode> {
    if (this.left) {
      yield* this.left.inOrder();
    }
    yield this;
    if (this.right) {
      yield* this.right.inOrder();
    }
  }

  /**
   * BONUS: Inverts the tree
   */
  invert(): void {
    const l = this.left;
    const r = this.right;
    this.left = r;
    this.right = l;
    this.left?.invert();
    this.right?.invert();
  }
}
