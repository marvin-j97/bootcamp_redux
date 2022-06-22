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
  append(node: T): void {
    if (!this.head?.next) {
      this.head = new ListNode(node);
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = new ListNode(node);
    }
  }

  /**
   * Returns the amount of list nodes
   */
  size(): number {
    let count = 0;
    for (const _ of this.iter()) {
      count++;
    }
    return count;
  }

  /**
   * Executes a callback for every list item
   */
  forEach(fn: (item: T, index: number) => unknown): void {
    let index = 0;
    for (const x of this.iter()) {
      fn(x, index);
    }
  }

  /**
   * Converts a JS array to a linked list
   */
  static fromArray<T>(arr: T[]): LinkedList<T> {
    const list = new LinkedList<T>();
    for (const item of arr) {
      list.append(item);
    }
    return list;
  }

  /**
   * BONUS: Prepends a new item
   *
   * 4 + [1,2,3] -> [4,1,2,3]
   */
  prepend(node: T): void {
    if (!this.head) {
      this.append(node);
    }

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
