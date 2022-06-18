/**
 * A sorted set can efficiently return whether a key is contained in the set
 * All keys are also sorted in a way to efficiently query the min and max values
 *
 * Internally, a (unbalanced) binary search tree
 * This yields O(log n) best-case performance for searches
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
    // TODO: implement
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

  isEmpty(): boolean {
    return !this.count();
  }

  count(): number {
    // TODO: implement
    return 0;
  }

  maxKey(): number | null {
    // TODO: implement
    return null;
  }

  minKey(): number | null {
    // TODO: implement
    return null;
  }

  insert(key: number): void {
    // TODO: implement
  }

  contains(key: number): boolean {
    // TODO: implement
    return false;
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
  *inOrder(): Generator<TreeNode> {
    // TODO: implement
  }

  /**
   * Inverts the tree
   */
  invert(): void {
    // TODO: implement
  }
}
