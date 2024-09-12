function reduceToOne(n: number): number {
  //base case
  if (n == 1) return 0;
  if (n < 1) return Infinity;
  let divide3: number = Infinity;
  let divide2: number = Infinity;
  let subOne: number = Infinity;

  if (n % 3 == 0) {
    divide3 = reduceToOne(n / 3);
  }
  if (n % 2 == 0) {
    divide2 = reduceToOne(n / 2);
  }
  subOne = reduceToOne(n - 1);

  return 1 + Math.min(divide3, divide2, subOne);
}

console.log(reduceToOne(10));
