export function sum(...nums: number[]): number {
  return nums.reduce((acc: number, current: number) => acc + current, 0);
}

export function power(base: number, exponent: number): number {
  return base ** exponent;
}
