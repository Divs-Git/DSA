function swap(arr: number[], i: number, j: number): void {
  [arr[j], arr[i]] = [arr[i], arr[j]];
}
function partition(arr: number[], L: number, R: number, pIdx: number): number {
  // swap pivot element with last element in the array
  let pivot = arr[pIdx];
  swap(arr, pIdx, R);
  let i = L - 1;
  let j = L;
  while (j <= R - 1) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
    j++;
  }
  //swap the pivot again to i+1 position
  swap(arr, i + 1, R);
  return i + 1;
}

function getPivot(arr: number[], l: number, r: number): number {
  return Math.floor(Math.random() * (r - l) + l);
}

function f(arr: number[], i: number, j: number): void {
  if (i >= j) return;
  let pivotIndex = getPivot(arr, i, j);
  let m = partition(arr, i, j, pivotIndex);
  f(arr, i, m - 1);
  f(arr, m + 1, j);
}

function quickSort(arr: number[]): void {
  f(arr, 0, arr.length - 1);
}

let arr7 = [12, 34, -1, 23, 4, 5, 2586, 25, -1, 24, -1];
quickSort(arr7);
console.log(arr7);
