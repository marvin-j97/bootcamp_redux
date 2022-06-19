const EPSILON = 0.00000001;
const h = EPSILON;

/**
 * Returns the approximate derivative of a function
 * https://en.wikipedia.org/wiki/Derivative
 * http://www.malinc.se/math/calculus/diffatpointen.php
 * https://sites.google.com/a/case.edu/differentiation/_/rsrc/1364892409693/difference-quotient/dq.png
 * https://en.wikipedia.org/wiki/Higher-order_function
 *
 * NOTE: The limit should not be implemented and is given by h = EPSILON
 */
export function derivative(f: (x: number) => number): (x: number) => number {
  return (x) => {
    const dy = f(x + h) - f(x);
    return dy / h;
  };
}

export const derive = derivative;
