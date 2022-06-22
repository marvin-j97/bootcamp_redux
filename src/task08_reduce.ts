export class Customer {
  private salesCount: number;

  constructor(c: number) {
    this.salesCount = c;
  }

  getSalesCount() {
    return this.salesCount;
  }
}

export function countSales(customers: Customer[]): number {
  // TODO: implement
  return 0;
}
