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
  return customers.reduce((acc, x) => acc + x.getSalesCount(), 0);
}
