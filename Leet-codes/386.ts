// https://leetcode.com/problems/lexicographical-numbers/description/

let arr!: number[];

function func(i: number, n: number): number[] | undefined {
  if (i > n) return;
  if (i !== 0) {
    arr.push(i);
  }

  for (let j = i === 0 ? 1 : 0; j <= 9; j++) {
    func(10 * i + j, n);
  }
  return arr;
}

function lexicalOrder(n: number): number[] {
  arr = [];
  func(0, n);
  return arr;
}
