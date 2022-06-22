/**
 * List node
 *
 * Just hold data and a reference to the next element (or null)
 */
export class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

/**
 * Generic singly linked list (without recursion)
 */
export class LinkedList<T> {
  private head: ListNode<T> | null = null;

  first(): T | null {
    return this.head?.value || null;
  }

  /**
   * Appends a new item
   *
   * [1,2,3] + 4 -> [1,2,3,4]
   *
   * Q: How could this be optimized?
   */
  append(value: T): void {
    // TODO: implement
  }

  /**
   * Returns the amount of list nodes
   */
  size(): number {
    // TODO: implement
    // Hint: Can you use another class method to implement this?
    return 0;
  }

  /**
   * Executes a callback for every list item
   */
  forEach(fn: (item: T, index: number) => unknown): void {
    // TODO: implement
  }

  /**
   * Converts a JS array to a linked list
   */
  static fromArray<T>(arr: T[]): LinkedList<T> {
    // TODO: implement
    return new LinkedList();
  }

  /**
   * BONUS: Prepends a new item
   *
   * 4 + [1,2,3] -> [4,1,2,3]
   */
  prepend(value: T): void {
    // TODO: implement
  }

  /**
   * BONUS: Gets the last item
   *
   * Q: How could this be optimized?
   */
  last(): T | null {
    return null;
  }

  /**
   * BONUS: Returns an iterator over the linked list
   *
   * If you add this, you could replace forEach internally
   */
  *iter(): Generator<T> {
    // TODO: implement
  }

  /**
   * BONUS: Returns a new linked list with filtered content
   */
  filter(fn: (item: T, index: number) => boolean): LinkedList<T> {
    // TODO: implement
    return new LinkedList();
  }

  /**
   * BONUS: Returns a new linked list with mapped content
   */
  map<U>(fn: (item: T, index: number) => U): LinkedList<U> {
    // TODO: implement
    return new LinkedList();
  }

  /**
   * BONUS: Reduces the list to a value
   */
  reduce<A>(fn: (accumulator: A, item: T, index: number) => A, initial: A): A {
    // TODO: implement
    return initial;
  }
}
