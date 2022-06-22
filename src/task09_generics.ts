/**
 * List node
 *
 * Just hold data and a reference to the next element (or null)
 */
export class ListNode<T> {
  value: T;
  next: T | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

/**
 * Generic singly linked list (without recursion)
 */
export class LinkedList<T> {
  private head: ListNode<T> | null = null;

  first(): ListNode<T> | null {
    return this.head;
  }

  /**
   * Appends a new item
   *
   * [1,2,3] + 4 -> [1,2,3,4]
   */
  append(node: T): void {
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
  prepend(node: T): void {
    // TODO: implement
  }

  /**
   * BONUS: Gets the last item
   */
  last(): T | null {
    return null;
  }
}
