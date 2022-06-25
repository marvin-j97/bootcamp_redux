/**
 * List node
 *
 * Just holds data and a reference to the next element (or null)
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

  private getLastNode(): ListNode<T> | null {
    let curr = this.head;
    while (curr?.next) {
      curr = curr.next;
    }
    return curr;
  }

  /**
   * Appends a new item
   *
   * [1,2,3] + 4 -> [1,2,3,4]
   *
   * Q: How could this be optimized?
   */
  append(value: T): void {
    if (!this.head) {
      this.head = new ListNode(value);
    } else {
      const last = this.getLastNode();
      if (last) {
        last.next = new ListNode(value);
      }
    }
  }

  /**
   * Returns the amount of list nodes
   */
  size(): number {
    let count = 0;
    this.forEach(() => count++);
    return count;
  }

  /**
   * Executes a callback for every list item
   */
  forEach(fn: (item: T, index: number) => unknown): void {
    let index = 0;
    let curr = this.head;

    while (curr) {
      fn(curr.value, index);
      curr = curr.next;
      index++;
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
  prepend(value: T): void {
    if (!this.head) {
      this.append(value);
    } else {
      let tmp = this.head;
      this.head = new ListNode(value);
      this.head.next = tmp;
    }
  }

  /**
   * BONUS: Gets the last item
   *
   * Q: How could this be optimized?
   *
   * A: Use a tail pointer to provide O(1) access to the last item
   */
  last(): T | null {
    const last = this.getLastNode();
    return last?.value || null;
  }

  /**
   * BONUS: Returns a new linked list with filtered content
   */
  filter(fn: (item: T, index: number) => boolean): LinkedList<T> {
    const list = new LinkedList<T>();

    this.forEach((x, i) => {
      if (fn(x, i)) {
        list.append(x);
      }
    });

    return list;
  }

  /**
   * BONUS: Returns a new linked list with mapped content
   */
  map<U>(fn: (item: T, index: number) => U): LinkedList<U> {
    const list = new LinkedList<U>();

    this.forEach((x, i) => {
      list.append(fn(x, i));
    });

    return list;
  }

  /**
   * BONUS: Reduces the list to a value
   *
   * Q: There is also the function Array.reduceRight, which reduces an array from front to back
   *    (instead of front to back)
   *    Why is the singly linked list not optimal for that function?
   *    What would need to change?
   *
   * A: The singly linked list cannot easily be traversed in reverse
   *    Use a doubly linked list instead
   */
  reduce<A>(fn: (accumulator: A, item: T, index: number) => A, initial: A): A {
    let acc = initial;

    this.forEach((x, i) => {
      acc = fn(acc, x, i);
    });

    return acc;
  }
}
