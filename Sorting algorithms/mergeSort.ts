// Here we are making creating two different array
function merge(
  arr: number[],
  lefti: number,
  leftj: number,
  righti: number,
  rightj: number
): void {
  const a = Array(leftj - lefti + 1);
  const b = Array(rightj - righti + 1);
  let k = 0;
  for (let i = lefti; i <= leftj; i++) {
    a[k] = arr[i];
    k++;
  }

  k = 0;
  for (let i = righti; i <= rightj; i++) {
    b[k] = arr[i];
    k++;
  }
  let c = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      c.push(a[i]);
      i++;
    } else {
      c.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    c.push(a[i]);
    i++;
  }
  while (j < b.length) {
    c.push(b[j]);
    j++;
  }
  k = 0;
  for (let i = lefti; i <= rightj; i++) {
    arr[i] = c[k];
    k++;
  }
}

function mergeSort(arr: number[], i: number, j: number): void {
  if (i >= j) return;
  const mid: number = Math.floor((i + j) / 2);
  mergeSort(arr, i, mid);
  mergeSort(arr, mid + 1, j);
  merge(arr, i, mid, mid + 1, j);
}

const arr5: number[] = [12, 34, -1, 23, 4, 5];
mergeSort(arr5, 0, arr5.length - 1);
console.log(arr5);
